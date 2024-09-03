import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const GlobalContext = createContext();
const API_URL = 'http://localhost:5001/api/users';

function Wrapper({ children }) {
  const [classes, setClasses] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log('API Response:', response);
        if (response && response.data) {
          setClasses(response.data);
        } else {
          console.error('Unexpected response format:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  const FetchClasses = () => {
    axios.get(API_URL)
      .then(response => {
        if (response && response.data) {
          setClasses(response.data);
        } else {
          console.error('Unexpected response format:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching classes:', error.message);
      });
  };
  const addClass = (className) => {
    axios.post(API_URL, { name: className })
      .then(response => {
        setClasses([...classes, response.data]);
        setIsPopupOpen(false); // Close the popup after adding the class name
        setErrors({});
      })

      .catch(error => {
        setErrors(error.response.data.error);
      });
  };
  const updateClass = (classId, newClassName) => {
    axios.put(`${API_URL}/${classId}`, { name: newClassName })
      .then(response => {
        // Ensure response.data is defined
        if (response && response.data) {
          setClasses(classes.map((classItem) =>
            classItem._id === classId ? { ...classItem, name: newClassName } : classItem
          ));
          setErrors({});
          FetchClasses();
        } else {
          console.error('Unexpected response format:', response);
        }
      })
      .catch(error => {
        console.error('There was an error updating the class!', error.response?.data || error.message);
      });
  };

  const deleteClass = (classId) => {
    axios.delete(`${API_URL}/${classId}`)
      .then(response => {
        // Ensure response.data is defined
        if (response && response.data) {
          setClasses(classes.filter((classItem) => classItem._id !== classId));
        } else {
          console.error('Unexpected response format:', response);
        }
      })
      .catch(error => {
        console.error('There was an error deleting the class!', error.response?.data || error.message);
      });
  };

  const handleAddClassClick = () => {
    setIsPopupOpen(true); // Open the popup when the button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <GlobalContext.Provider value={{ classes, addClass, updateClass, deleteClass, isPopupOpen, handleAddClassClick, handleClosePopup, totalClasses: classes.length }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Wrapper;