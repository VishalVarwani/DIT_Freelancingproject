import React from 'react'
import {  Route, Routes } from "react-router-dom";
import About from './component/about';
import Home from './component/home';
import Hello from './component/hello';
import Gallery from './component/gallery';
import Placement from './component/placement';
import Contact from './component/contact';
import Login from './component/login';
import Courses from './component/courses';
import Angular from './component/courses/angular';
import Cloud from './component/courses/cloud';
import Database from './component/courses/database';
import Datascience from './component/courses/datascience';
import Digital from './component/courses/digital';
import C from './component/courses/c';
import Analytics from './component/courses/analytics';
import Fullstack from './component/courses/fullstack';
import Hardware from './component/courses/hardware';
import Java from './component/courses/java';
import Mern from './component/courses/mern';
import Oracle from './component/courses/oracle';
import Dotnet from './component/courses/dotnet';
import Python from './component/courses/python';
import Testing from './component/courses/testing';
import Website from './component/courses/website';
import Basiccourses from './component/courses/basiccourses';
import Professional from './component/courses/professional';
import Corporate from './component/courses/corporate';
import ContactForm from './component/contactform';

export default function App() {

  
  return (
    <div>
{/* <About/>      */}


 <Routes>

    <Route path='about' element={<About/>}/>
    <Route path='login' element={<Login/>}/>

    <Route path='contact' element={<Contact/>}/>
    <Route path='courses' element={<Courses/>}/>

    <Route path='/' element={<Home/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='placement' element={<Placement/>}/>
    

{/* courses */}
<Route path='angular' element={<Angular/>}/>
<Route path='cloudcomputing' element={<Cloud/>}/>
<Route path='database' element={<Database/>}/>
<Route path='datascience' element={<Datascience/>}/>
<Route path='digital' element={<Digital/>}/>
<Route path='c' element={<C/>}/>
<Route path='analytics' element={<Analytics/>}/>
<Route path='fullstack' element={<Fullstack/>}/>
<Route path='hardware' element={<Hardware/>}/>
<Route path='java' element={<Java/>}/>
<Route path='mern' element={<Mern/>}/>
<Route path='oracle' element={<Oracle/>}/>
<Route path='dotnet' element={<Dotnet/>}/>
<Route path='python' element={<Python/>}/>
<Route path='testing' element={<Testing/>}/>
<Route path='website' element={<Website/>}/>
<Route path='basiccourses' element={<Basiccourses/>}/>
<Route path='professional' element={<Professional/>}/>
<Route path='corporate' element={<Corporate/>}/>
<Route path='contactform' element={<ContactForm/>}/>






    </Routes>
    </div>
  )
}
