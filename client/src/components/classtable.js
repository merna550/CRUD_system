import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import { useNavigate } from 'react-router-dom';
function ClassTable() {
  const { classes, updateClass, deleteClass } = useContext(GlobalContext);
  const [editClassId, setEditClassId] = useState(null);
  const [newClassName, setNewClassName] = useState('');
  const navigate = useNavigate();

  const handleEdit = (classId, className) => {
    setEditClassId(classId);
    setNewClassName(className);
  };

  const handleSave = (classId) => {
    if (classId && newClassName) {
      updateClass(classId, newClassName);
      setEditClassId(null);
      setNewClassName('');
    } else {
      console.error('Invalid classId or newClassName');
    }
  };

  const handleCancel = () => {
    setEditClassId(null);
    setNewClassName('');
  };



  return (
    <div className="mt-10">
      <table className="min-w-full">
        <thead className='bg-gray-400'>
          <tr>
            <th className="px-4 py-2 lg:text-2xl text-xl">Class Name</th>
            <th className="px-4 py-2 lg:text-2xl text-xl">Actions</th>
          </tr>
        </thead>
        <tbody className='bg-gray-300'>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td className="border px-4 py-2 text-xl font-bold">
                {editClassId === classItem._id ? (
                  <input
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    className="border border-gray-300 rounded p-2 text-xl"
                  />
                ) : (
                  classItem.name
                )}
              </td>
              <td className="border px-4 py-2">
                {editClassId === classItem._id ? (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => handleSave(classItem._id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded ml-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => handleEdit(classItem._id, classItem.name)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                      onClick={() => deleteClass(classItem._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded ml-2"
                      
                    >
                      Add Students
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable;
