import React,{ useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { AiFillHome} from 'react-icons/ai';
import {IoBook} from 'react-icons/io5';
import { GiTeacher } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const AdminNavBar= ({Children}) => {

  const[isOpen,setIsOpen] =useState(true);
  const toggle=()=> setIsOpen(!isOpen);
  const menuItem=[
    {
      path:"/admin/home/Home",
      name:"Home",
      icon:<AiFillHome/>
    },
    {
      path:"/admin/courses/Courses",
      name:"Manage Courses",
      icon:<IoBook/>
    },
    {
      path:"/admin/user/User",
      name:"Manage User",
      icon:<BsPeopleFill/>
    },
    {
      path:"/admin/instructor/Instructor",
      name:"Manage Instructor",
      icon:<GiTeacher/>
    },
    // {
    //   path:"/components/certificate/Certification",
    //   name:"Certification",
    //   icon:<PiCertificateFill/>
    // },
    {
      path:"/admin/profile/Profile",
      name:"Profile",
      icon:<MdAccountCircle/>
    }
  ]
    return (
      <div className='container'>
        <div style={{width:isOpen ? "250px": "50px"}} className='sidebar'>
          <div className='top_section'>
            <h1 style={{display:isOpen ? "block": "none"}} className='logo'></h1>
            <div style={{marginLeft:isOpen ? "0px": " 0px"}}className='bars'>
              <FaBars onClick={toggle}/>&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          {
            menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link' activeclassName='active'>
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen ? "block": "none"}} className='link_text'>{item.name}</div>
            </NavLink>
            ))
          }
        </div>
        <main>{Children}</main>
      </div>
    )
};
export default AdminNavBar