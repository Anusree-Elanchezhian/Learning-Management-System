import React from "react";
import NavBar from "../navbar/NavBar";
import './java.css';
const Java=()=>{
    return(
    
        <div className="java">
            <div className="cls1">
                <h1 className="jav"> Java Fundamentals</h1>
                <hr></hr>
            </div>
            <div className="desc-main">
               <h3 className="desc"> Describtion:</h3>
               <p>Java Course is about helping aspirants learn the concepts of programming 
                and solve complex problems. This course requires patience, analytical thinking 
                ability, attention to detail as they are essential in becoming a successful programmer.</p>
                <hr>
                </hr>
                <p>
                    Duration  :&nbsp;&nbsp;&nbsp; 3hr 45 mins
                    </p>
                <p>
                    Instructor:&nbsp;&nbsp;&nbsp; Dr RamyaPriya R
                </p>
                <p style={{textAlign:'center'}}>
                    <u>Syllabus</u>
                </p>
                <p>1.1 Basics of Java</p>
                <p>1.2 Basic Operations using java</p>
                <p>1.3 Conditions</p>
                <p>1.4 Loops/Switches</p>
                <p>1.5 Basic Problem solving</p>
                <iframe width="768" height="432" src="https://www.youtube.com/embed/eIrMbAQSU34" title="Java Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
};
export default Java;