import React, { useState } from 'react';
import './EditableForm.css';
import { Input, Label } from '@fluentui/react-components';
import { PrimaryButton, Text } from '@fluentui/react';
import { SaveRegular,EditRegular,CalendarCancelRegular} from '@fluentui/react-icons'; // Import icons

const EditableForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    const isEmptyField = Object.values(formData).some(value => !value);
    if (isEmptyField) {
      setError('All fields are required. Please fill in all fields.');
      return;
    }
    onSave(formData);
    setIsEditable(false);
  };

  return (
    <div className='skillroomcard'>
      <h2>Skillroom Details</h2>
      {error && <div className='error-message'>{error}</div>}
      <form>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className='form-field'>
            <Label>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              {isEditable ? (
                <Input
                  type={key === 'price' ? 'number' : 'text'}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className='input-field'
                />
              ) : (
                <Text className='view-text'>{value}</Text>
              )}
            </Label>
          </div>
        ))}
        <div className='dualbutton'>
          {isEditable ? (
            <PrimaryButton type="button" onClick={handleSaveClick}>
              <SaveRegular /> Save
            </PrimaryButton>
          ) : (
            <PrimaryButton type="button" onClick={handleEditClick}>
              <EditRegular />Edit
            </PrimaryButton>
          )}
          <PrimaryButton type="button" onClick={onCancel}>
          <CalendarCancelRegular /> Cancel
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default EditableForm;
