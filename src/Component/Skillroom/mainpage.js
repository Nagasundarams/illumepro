import Sidebar from "../SideBar";
import * as React from 'react'
import '../../App.css';

import MainContent from "./MainContent";

const Mainpage = () => {

     

    const navItems = [
        {
          navRoute: '/organization1',
          navField: 'Organization 1'
        },
        {
          navRoute: '/organization2',
          navField: 'Organization 2'
        },
        {
          navRoute: '/organization3',
          navField: 'Organization 3'
        },
        {
          navRoute: '/organization4',
          navField: 'Organization 4'
        },
        {
          navRoute: '/organization5',
          navField: 'Organization 5'
        }
      ];

    return (<div className='incontent'>
        <Sidebar navItems={navItems}/>
        <MainContent/>
        
        


    </div>);

}
export default Mainpage;