import React, { useState ,useContext} from 'react'

import PopUp from '../components/popup'
import AddClassButton from '../components/addclassbutton';
import ClassTable from '../components/classtable';
import { GlobalContext } from '../context/GlobalWrapper';

function Classes() {
  // const [classes, setClasses] = useState([]);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const addClass = (className) => {
  //   setClasses([...classes, { name: className, id: classes.length + 1 }]);
  //   setIsPopupOpen(false); // Close the popup after adding the class
  // };
  // const updateClass = (classId, newClassName) => {
  //   setClasses(classes.map((classItem) =>
  //     classItem.id === classId ? { ...classItem, name: newClassName } : classItem
  //   ));
  // };

  // const deleteClass = (classId) => {
  //   setClasses(classes.filter((classItem) => classItem.id !== classId));
  // };

  // const addStudents = (classId) => {
  //   // Logic to add students to the class
  // };

  // const handleAddClassClick = () => {
  //   setIsPopupOpen(true); // Open the popup when the button is clicked
  // };
  // const handleClosePopup = () => {
  //   setIsPopupOpen(false); // Close the popup
  // };

  const {
    classes,
    addClass,
    updateClass,
    deleteClass,
    addStudents,
    isPopupOpen,
    handleAddClassClick,
    handleClosePopup
  } = useContext(GlobalContext);
  return (
    <div className='flex h-screen'>
      <div className='mt-28 flex-grow p-5 ml-[200px]'>
        <AddClassButton onClick={handleAddClassClick} />
        {isPopupOpen && <PopUp onClose={handleClosePopup} addClass={addClass} />}
        <ClassTable classes={classes} updateClass={updateClass} deleteClass={deleteClass} addStudents={addStudents} />
      </div>
    </div>
  )
}

export default Classes;