import Sidebar from "../SideBar";
import * as React from 'react'
import '../../App.css';

import MainContent from "./MainContent";

const Mainpage = () => {
    const[organization,setOrganization]=React.useState("organization1");
    
     

    const navItems = [
        {
          value: 'organization1',
          navField: 'Organization 1'
        },
        {
          value: 'organization2',
          navField: 'Organization 2'
        },
        {
          value: 'organization3',
          navField: 'Organization 3'
        },
        {
          value: 'organization4',
          navField: 'Organization 4'
        },
        {
          value: 'organization5',
          navField: 'Organization 5'
        }
      ];

    return (<div className='incontent'>
        <Sidebar navItems={navItems} setOrganization={setOrganization}/>
        <MainContent organization={organization}/>
        
        


    </div>);

}
export default Mainpage;