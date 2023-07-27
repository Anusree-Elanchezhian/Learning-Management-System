import React,{Component} from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';
import './Home.css'
import { useSelector } from 'react-redux';

const Home= () => {
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
      <NavBar/>
    <div className='full'>
    <div className='scroll'>  
    <h1>Welcome {username} !</h1>   
     <marquee 
        behavior="scroll"
        direction="left"
        scrollamount={600}
        scrolldelay={2000}
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689131104/learning-education-ideas-insight-intelligence-study-concept_bpjjij.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{marginLeft:"30px",padding:"30px"}}
          />
        </a>
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689130399/work-net_cjktmz.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
        <a href="/" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689130408/front-view-woman-portrait-with-graduation-cap_jqci9y.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
      </marquee>
      <h3>
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
      </h3>
      <h3 className='author'>
      - Malcolm X
      </h3>
      <button type='submit' className='hbtn'><Link to='/components/signup/SignUp' className='link'>
        Get Started</Link>
      </button>
      </div>
    <div>
      <h2 style={{paddingLeft:'3%'}}>
        Top Courses <ArrowForwardIcon/>
      </h2>
      <div className='topCourse'>
          <div class="card1">
          <div class="container1">
            <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1688968372/Book_cy98zq.jpg' alt='course' style={{width:'100%'}}/>
          <h4><b>Java Fundamentals</b></h4> 
          <button>View Course</button>
        </div>
        </div>
        <div class="card1">
        <div class="container1">
        <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1688968372/Book_cy98zq.jpg' alt='course' style={{width:'100%'}}/>
           <h4><b>Basic of React</b></h4>
           <button>View Course</button>
           </div>
        </div>
        <div class="card1">
          <div class="container1"> 
          <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1688968372/Book_cy98zq.jpg' alt='course' style={{width:'100%'}}/>
          <h4><b>Web Development</b></h4> 
          <button>View Course</button>
        </div>
        </div>
      </div>
    </div>
      <hr></hr>
      <div className='footer' style={{display:'flex'}}>
            <p>&copy; {new Date().getFullYear()} ABH. All rights reserved.</p>
            <div className='social-icons' >
            <EmailIcon />&nbsp;&nbsp;&nbsp;
            <TwitterIcon  />&nbsp;&nbsp;&nbsp;
            <LinkedInIcon  />&nbsp;&nbsp;&nbsp;
            <YouTubeIcon />&nbsp;&nbsp;&nbsp;
            <FacebookIcon />
            </div>
          </div>
     </div>
</div>
</div>
    );
};
export default Home;