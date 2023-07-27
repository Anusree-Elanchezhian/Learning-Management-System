import React,{Component} from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../header/Header';
import AdminNavBar from '../navbar/Navbar';
import './Home.css'
import { useSelector } from 'react-redux';

const AdminHome= () => {
  const username = useSelector((state) => state.username);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
      <div style={{display:'flex', height: '100vh' }}>
      <AdminNavBar/>
    <div className='full'>
    <div className='scroll1'>  
    <h1>Welcome {username} !</h1>   
    
      <h3>
      "Education is the most powerful weapon which you can use to change the world."
      </h3>
      <h3 className='author'>
      - Nelson Mandela
      </h3>
      {/* <button type='submit' className='hbtn'><Link to='/components/signup/SignUp' className='link'>
        Get Started</Link>
      </button> */}
      <hr></hr>
      </div>
      {/* <div className='footer' style={{display:'flex'}}>
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            <div className='social-icons' >
            <EmailIcon />&nbsp;&nbsp;&nbsp;
            <TwitterIcon  />&nbsp;&nbsp;&nbsp;
            <LinkedInIcon  />&nbsp;&nbsp;&nbsp;
            <YouTubeIcon />&nbsp;&nbsp;&nbsp;
            <FacebookIcon />
            </div>
          </div> */}
     </div>
</div>
</div>
    );
};
export default AdminHome;