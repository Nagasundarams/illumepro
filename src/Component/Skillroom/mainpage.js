import Cardo from "../Card";
import Sidebar from "../SideBar";
import '../../App.css';
import MainContent from "../Content";
import { useState } from "react";
import EditableForm from "./EditableForm";
import TableContent from './TableContent';

const Mainpage = () => {

    const inputs = [
        {
            name: 'classname',
            type: 'text',
            label: 'Class Name:',
            required: true,
        },
        {
            name: 'organizationName',
            type: 'text',
            label: 'Organization Name:',
            required: true,
        },
        {
            name: 'startDate',
            type: 'date',
            label: 'Start Date:',
            required: true,
        },
        {
            name: 'endDate',
            type: 'date',
            label: 'End Date:',
            required: true,
        },
        {
            name: 'duration',
            type: 'text',
            label: 'Duration (e.g., 2 weeks):',
            required: true,
        },
        {
            name: 'programCategory',
            type: 'text',
            label: 'Program Category:',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            label: 'Price:',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description:',
            required: true,
        },
        {
            name: 'ageRange',
            type: 'text',
            label: 'Age Range:',
            required: true,
        },
        {
            name: 'totalSeats',
            type: 'number',
            label: 'Total Seats:',
            required: true,
        },
        {
            name: 'remainingSeats',
            type: 'number',
            label: 'Remaining Seats:',
            required: true,
        },
        {
            name: 'venueId',
            type: 'text',
            label: 'Venue ID:',
            required: true,
        },
        {
            name: 'facilityId',
            type: 'text',
            label: 'Facility ID:',
            required: true,
        },
        {
            name: 'heroImageURL',
            type: 'text',
            label: 'Hero Image URL:',
            required: true,
        },
        {
            name: 'paymentLink',
            type: 'text',
            label: 'Payment Link:',
            required: true,
        },
        {
            name: 'instructorID',
            type: 'text',
            label: 'Instructor ID:',
            required: true,
        },
        {
            name: 'tags',
            type: 'text', // Can be a text input or an array input, adjust as necessary
            label: 'Tags (comma separated):',
            required: false,
        },
    ];    

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
        {/* <div className='card-container'>
            <Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo /><Cardo />
        </div> */}
        <TableContent/>
        <EditableForm/>


    </div>);

}
export default Mainpage;