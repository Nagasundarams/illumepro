import React, { useState } from 'react';
import './Content.css';
import { Button, PrimaryButton } from '@fluentui/react';
import { Input, Label, Textarea } from '@fluentui/react-components';

const additionalInputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Session Name:',
    required: true,
  },
  {
    name: 'sessionDate',
    type: 'date',
    label: 'Session Date:',
    required: true,
  },
  {
    name: 'startTime',
    type: 'time',
    label: 'Start Time:',
    required: true,
  },
  {
    name: 'endTime',
    type: 'time',
    label: 'End Time:',
    required: true,
  },
  {
    name: 'duration',
    type: 'text',
    label: 'Duration:',
    required: true,
  },
  {
    name: 'price',
    type: 'number',
    label: 'Price:',
    required: true,
  },
  {
    name: 'paymentLink',
    type: 'text',
    label: 'Payment Link:',
    required: true,
  },
  {
    name: 'openSeats',
    type: 'number',
    label: 'Open Seats:',
    required: true,
  },
  {
    name: 'instructor',
    type: 'text',
    label: 'Instructor:',
    required: true,
  },
  {
    name: 'sessionConductedBy',
    type: 'text',
    label: 'Session Conducted By:',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Description:',
    required: true,
  },
  {
    name: 'classId',
    type: 'text',
    label: 'Class ID:',
    required: true,
  },
  {
    name: 'venueId',
    type: 'text',
    label: 'Venue ID:',
    required: true,
  },
];

const MainContent = ({ formtitle, inputs, formValues, handleChange, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState([{ name: '', sessionDate: '', startTime: '', endTime: '', duration: '', price: '', paymentLink: '', openSeats: '', instructor: '', sessionConductedBy: '', description: '', classId: '', venueId: '' }]); // State for sessions

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const onFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSubmit({ ...formValues, sessions }); // Pass sessions along with other form values
    toggleDialog(); // Optionally close the dialog after submission
  };

  const handleSessionChange = (index, e) => {
    const { name, value } = e.target;
    const newSessions = [...sessions];
    newSessions[index] = {
      ...newSessions[index],
      [name]: value,
    };
    setSessions(newSessions);
  };

  const handleAddSession = () => {
    setSessions([...sessions, { sessionDate: '', sessionDuration: '' }]); // Add a new session
  };

  const handleRemoveSession = (index) => {
    const newSessions = sessions.filter((_, i) => i !== index); // Remove the session at the specified index
    setSessions(newSessions);
  };

  return (
    <div className="main-content">
      <div>
        <PrimaryButton className='newbutton' onClick={toggleDialog}>+Add</PrimaryButton>
        <div className={`dialog ${isOpen ? 'open' : ''}`}>
          <Button className="close-btn" onClick={toggleDialog}>&times;</Button>
          <h2>{formtitle}</h2>
          <form className='formdialog' onSubmit={onFormSubmit}>
            {inputs.map((e) => (
              <div key={e.name}>
                <Label htmlFor={e.name}>{e.label}</Label>
                <Input
                  type={e.type}
                  name={e.name}
                  value={formValues[e.name] || ''}
                  required={e.required}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Render session inputs */}
            <h3>Sessions</h3>
            {sessions.map((session, index) => (
              <div key={index} className="session-inputs">
                {additionalInputs.map((input) => (
                  <div key={input.name}>
                    <Label htmlFor={`${input.name}${index}`}>{input.label}</Label>
                    {input.type === 'textarea' ? (
                      <Textarea
                        name={input.name}
                        value={session[input.name]}
                        onChange={(e) => handleSessionChange(index, e)}
                        required={input.required}
                      />
                    ) : (
                      <Input
                        type={input.type}
                        name={input.name}
                        value={session[input.name]}
                        onChange={(e) => handleSessionChange(index, e)}
                        required={input.required}
                      />
                    )} </div>
                ))}
                <Button appearance='outline' type="button" onClick={() => handleRemoveSession(index)}>Remove Session</Button>
              </div>
            ))}

            <PrimaryButton primary type="button" onClick={handleAddSession}>Add Session</PrimaryButton>

            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
