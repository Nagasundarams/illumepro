import React, { useState } from 'react';
import './EditableForm.css';

// Here we're going to get a data for particular skillroom


const EditableForm = ({initialData,onSave,onCancel}) => {
  const [formData, setFormData] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error on change
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditable(true);
  };

  // Save changes
  const handleSaveClick = () => {
    // Check for empty fields
    const isEmptyField = Object.values(formData).some(value => !value);
    if (isEmptyField) {
      setError('All fields are required. Please fill in all fields.');
      return; // Prevent saving
    }
    onSave(formData);

    setIsEditable(false);
    console.log("Saved data:", formData);
  };

  return (
    <div className='skillroomcard'>
      <h2>Course Details</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
      <form>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '10px' }}>
            <label>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              {isEditable ? (
                <input
                  type={key === 'price' ? 'number' : 'text'}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  style={{ marginLeft: '10px' }}
                />
              ) : (
                <span style={{ marginLeft: '10px' }}>{value}</span>
              )}
            </label>
          </div>
        ))}
        <div>
          {isEditable ? (
            <button type="button" onClick={handleSaveClick}>Save</button>
          ) : (
            <button type="button" onClick={handleEditClick}>Edit</button>
          )}
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditableForm;
