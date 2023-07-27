import React from 'react';
import NavBar from '../navbar/NavBar';
import './DashBoard.css';
import { Link} from 'react-router-dom';
import Header from '../header/Header';
import { PiBooksFill } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
const DashBoard=()=>{
    return (
        <div style={{ flexDirection: 'column', height: '100vh'}}>
      <Header/>
        <div style={{display:'flex',}}>
            <NavBar/>
            <div className='dash-container' style={{width:'100%'}}>
                <div className='das-head'>
                    <h3>Dashboard</h3>
                </div>

                <h3 style={{paddingLeft:'4%'}}>Courses Enrolled</h3>
                <div className='dash-card'>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                       <div style={{display:'block'}}><div className='dcrs'>Java Fundamentals</div>
                       <div> <button className='dbtn'><Link to='/java' className='dln'>Start</Link></button></div>
                       </div>
                    </div>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                    <div style={{display:'flex'}}>
                    <div style={{display:'block'}}><div className='dcrs'>Python Fundamentals</div>
                      <div> <button className='dbtn'><Link to='/java' className='dln'>Start</Link></button></div>
                    </div></div>
                    </div>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                    <div style={{display:'block'}}><div className='dcrs'>Complete JavaScript</div>
                       <div> <button className='dbtn'><Link to='/java' className='dln'>Start</Link></button></div>
                    </div></div>
                </div>

                <h3 style={{paddingLeft:'4%'}}>Ongoing Courses</h3>
                <div className='dash-card'>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                       <div style={{display:'block'}}><div className='dcrs'>Java Fundamentals</div>
                       <div> <button className='dbtn'><Link to='/java' className='dln'>Start</Link></button></div>
                       </div>
                    </div>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                    <div style={{display:'flex'}}>
                    <div style={{display:'block'}}><div className='dcrs'>Python Fundamentals</div>
                      <div> <button className='dbtn'><Link to='/java' className='dln'>Start</Link></button></div>
                    </div></div>
                    </div>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                    <div style={{display:'block'}}><div className='dcrs'>Complete JavaScript</div>
                       <div> <button className='dbtn'><Link to='/components/courses/java' className='dln'>Start</Link></button></div>
                    </div></div>
                </div>
                <h3 style={{paddingLeft:'4%'}}>Completed Courses</h3>
                <div className='dash-card'>
                    <div className='dcard'>
                    <div><PiBooksFill style={{paddingRight:'30px'}}/></div>
                       <div style={{display:'block'}}><div className='dcrs'>Front-end</div>
                       <div><h4>Percentage: 95% </h4></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};
export default DashBoard;