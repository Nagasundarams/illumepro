import Cardo from "../Card";
import Sidebar from "../SideBar";
import '../../App.css';
import MainContent from "../Content";
import { useState } from "react";

const Mainpage = () => {

    const inputs=[ {
        name:'classname',
        type: 'text',
        label: 'classname:',
        required: true
    }, {
        name:'Organaizationname',
        type: 'text',
        label: 'Organaizationname:',
        required: true
    }]

    const [createskillroom, setcreateskillroom] = useState({
        classname: '',
        Organaizationname: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcreateskillroom((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handleSubmit = (data) => {
        // Here you can handle the form data, e.g., send it to an API
        console.log('Form Submitted:', data);
        // Reset form values if needed
        setcreateskillroom({
            classname: '',
            Organaizationname: ''
        });
    };
    return (<div className='incontent'>
        <Sidebar />
        <MainContent formtitle='Add Skillroom' inputs={inputs}  formValues={createskillroom}  handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className='card-container'>
            <Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo />
        </div>
    </div>);

}
export default Mainpage;