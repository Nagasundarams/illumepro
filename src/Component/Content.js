import React,{useState} from 'react';
import './Content.css'
import { Button } from '@fluentui/react';


const MainContent = ({formtitle,inputs,formValues, handleChange,handleSubmit}) => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };
    const onFormSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission
      handleSubmit(formValues); // Call the handleSubmit function with the current form values
      toggleDialog(); // Optionally close the dialog after submission
  };
  return (
    <div className="main-content">
    <div>
            <button className='newbutton' onClick={toggleDialog}>+ Add</button>
            <div className={`dialog ${isOpen ? 'open' : ''}`}>
                <Button className="close-btn" onClick={toggleDialog}>&times;</Button>
                <h2>{formtitle}</h2>
                <form onSubmit={onFormSubmit}>
                    {inputs.map((e)=>(<><label htmlFor="name">{e.label}</label>
                      <input type={e.type}   name={e.name} value={formValues[e.name]} required={e.required} onChange={handleChange} /></>))}
                   
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  );
};

export default MainContent;
