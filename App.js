import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import SignUp from './components/signup/SignUp';

// imports for student role
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Assessment from './components/assessment/Assessment';
import DashBoard from './components/dashboard/DashBoard';
import Certification from './components/certificate/Certification';
import Profile from './components/profile/Profile';
import Java from './components/courses/Java';
import Forget from './components/forgetpassword/Forget';
import Weekend from './components/assessment/quiz/weekend';
import Feedback from './components/feedback/Feedback';

// imports for the admin role
import AdminNavBar from './admin/navbar/Navbar';
import AdminHome from './admin/home/Home';
import AdminCourses from './admin/courses/Courses';
import AdminProfile from './admin/profile/Profile';
import User from './admin/user/User';
import Instructor from './admin/instructor/Instructor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/components/signup/SignUp' element={<SignUp/>} />
        {/* routing for student */}
        <Route path='/components/home/Home' element={<Home/>}/>
        <Route path='/components/navbar/NavBar' element={<NavBar/>}/>
        <Route path='/components/courses/Courses' element={<Courses/>}/>
        <Route path='/components/dashboard/DashBoard' element={<DashBoard/>}/>
        <Route path='/components/assessment/Assessment' element={<Assessment/>}/>
        <Route path='/components/certificate/Certification' element={<Certification/>}/>
        <Route path='/components/profile/Profile' element={<Profile/>}/>
        <Route path='/java' element={<Java/>}/>
        <Route path='/components/forgetpassword/forget' element={<Forget/>}/>
        <Route path='/components/assessment/quiz/weekend' element={<Weekend/>}/>
        <Route path='/components/feedback/Feedback' element={<Feedback/>}></Route>
        {/* Routing for admin */}
        <Route path='/admin/navbar/NavBar' element={<AdminNavBar/>}/>
        <Route path='/admin/home/Home' element={<AdminHome/>}/>
        <Route path='/admin/courses/Courses' element={<AdminCourses/>}/>
        <Route path='/admin/profile/Profile' element={<AdminProfile/>}/>
        <Route path='/admin/user/User' element={<User/>}/>
        <Route path='/admin/instructor/Instructor' element={<Instructor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
