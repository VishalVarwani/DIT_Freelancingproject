import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

import "../css/header.css"

import { useState } from 'react';


import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
  const form = useRef();

 
  const [clicked, setClicked] = useState(false);
 
  const handleclick = () => {
    setClicked(!clicked);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dz1ssbn', 'template_y0kfldb', form.current, 'GO2LeZejiuj9Jshpd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const navigate = useNavigate();
  return (
 <div>
  <div>
    <Link to="https://api.whatsapp.com/send?phone=+91 8976758080&amp;text=Hi I need to know about IT Courses"
        class="float" target="_blank"><i class="fa fa-whatsapp my-float"></i></Link>
<Link class="wp-call-button" to="tel:+91 8976758080"></Link>
    {/* header area start */}
    <header style={{backgroundColor:""}}>
      <div className="tp-header__area">
        <div className="tp-header__top theme-bg-2 d-none d-lg-block">
          <div className="container-fluid">
            <div className="">
              <div className="row align-items-center">
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="tp-header__info">
                    <ul>
                      <li>
                        <Link style={{color:"white"}} to="tel:+91 8976758080"><i className="fa-regular fa-phone" />
                          +91 8976758080</Link>   &nbsp; / &nbsp;
                        <Link style={{color:"white"}}  to="tel:+91 8976758070">
                          +91 8976758070</Link>
                      </li>
                      {/*<li>
                           <Link to="https://goo.gl/maps/qzqY2PAcQwUz1BYN9" target="_blank"><i class="fa-regular fa-location-dot"></i> Crown St, Brookoln, Ny 11225, USA</Link>
								 
                        </li>*/}
                      <li>
                        {/*  <i class="fa-regular fa-clock"></i> Mon
                              - Sat 9.00 am - 20.00 pm*/}
                        <div className="footer__social">
                          <span><Link to="https://www.facebook.com/Ditiinstitute"><i className="fab fa-facebook-f" /></Link></span>
                          <span><Link to="#" className="yt"><i className="fab fa-youtube" /></Link></span>
                          <span><Link to="https://instagram.com/diti_institute" className="tw"><i className="fab fa-instagram" /></Link></span>
                        </div>
                        {/*	<i class="fa-regular fa-envelope"></i>&nbsp; <Link to="mailto:info.ditinstitute@gmail.com">info.ditinstitute@gmail.com</Link>*/}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                  <p style={{color: 'white', fontSize: 18, marginTop: 15, float: 'right'}}>AN ISO 9001-2015 Certified</p>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2">
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Book A Demo
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
        <p style={{color: '#000f2f', fontSize: 20, textAlign: 'center', textDecoration: 'underline', fontWeight: 700}}>Courses Enquiry</p>
     
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          
        </div>
        <div className="heading_s1 mb-3" style={{textAlign: 'center'}}>
                      <h6>Please feel the below form, we will call you very shortly</h6>
                    </div>
        <div className="modal-body">
        <form ref={form} onSubmit={sendEmail} className="pt-md-2">
                      <div className="row">
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Your Name *" id="nameEnquiry" className="form-control alpha-only" name="to_name" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Mobile No. *" id="phoneEnquiry" className="form-control number-only" name="mobile" type="text" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Email ID" id="emailEnquiry" className="form-control" name="from_name" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Course Name" id="course" className="form-control" name="message" type="text" />
                          {/*<input t placeholder="Enter course" id="message" class="form-control" name="Message" rows="4"></textarea>*/}
                        </div>
                        <div className="col-md-12" style={{textAlign: 'center'}}>
                          {/*<input type="submit" name="submit" value="Send Details" class="tp-btn"  id="submitEnquiry" />*/}
                          <button className="tp-btn"onClick={() => alert('Thankyou we will call you shortly!')} style={{cursor: 'pointer'}}>
                            <span>Submit <i className="fa-regular fa-arrow-right" /> </span>
                          </button> 
                        </div>
                      
                      </div>
                    </form>
        </div>
        
      </div>
    </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-header__main" id="header-sticky">
        <div className="container-fluid">
          <div className="">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-5 col-md-4">
                
                <div className="tp-header-left d-flex justify-content-between align-items-center" style={{padding: 9}}>
               
                  <div className="logo">
                    <span>
                      <img src="assets/img/logo/ditilogo4.png" alt="logo" />
                    </span>
                  
                  </div>
                </div>
              </div>
             
              <div className="col-xxl-6 col-xl-7 col-md-8">
                <div className="main-menu text-end">
                  <nav>
                    <div className="">
                    <ul style={{color:"black"}}id="navbar" className={clicked ? "active" : ""}>

                     <li> <Link className='active' style={{color:"black"}} to="/">Home</Link> </li>
                    <li>  <Link style={{color:"black"}}  to="/about">About</Link> </li>
                    
                      <div className="subnav">
                        <button style={{display:"flex", justifyContent:"space-evenly", fontWeight:"600", fontSize:"17px"}} className="subnavbtn" onClick={()=> navigate("/courses")}>Courses <i className="fa fa-caret-down" style={{paddingTop: "5px",paddingLeft: "5px"}}/></button>
                        <div className="subnav-content" style={{textAlign: "left", padding:"10px"}}>
                          <ul>
                          {/*<Link to="basiccourses.php">Basic Courses</Link>*/}
                         <li><Link to="/angular">Angular</Link> </li> 
                          <li> <Link to="/c">C &amp; C++</Link> </li>
                          <li><Link to="/cloudcomputing">Cloud Computing</Link> </li>
                          <li> <Link to="/database">Database</Link> </li>
                          <li> <Link to="/digital">Digital Marketing</Link> </li>
                          <li> <Link to="/analytics">Data Analytics</Link> </li>
                          <li> <Link to="/fullstack">FullStack</Link> </li>
                          <li>  <Link to="/hardware">Hardware &amp; Networking</Link> </li>
                          <li> <Link to="/java">Java</Link> </li>
                          <li> <Link to="/mern">Merns Stack</Link> </li>
                          <li><Link to="/dotnet">Microsoft.Net / C#</Link> </li>
                          <li><Link to="/oracle">Oracle</Link> </li>
                          <li><Link to="/python">Python</Link> </li>
                          <li><Link to="/testing">Software Testing</Link> </li>
                          </ul>
                          {/*<Link to="django.php">Dmobilejango</Link>*/}
                          {/*<Link to="datascience.php">Data Science</Link>*/}
                          
                          
                      </div> 
                      
                      </div>
                      <div className="subnav">
                        <button style={{display:"flex", fontWeight:"640"}} className="subnavbtn">Services <i className="fa fa-caret-down" style={{paddingTop: "5px",paddingLeft: "5px"}} /></button>
                        <div className="subnav-contentnarrow" style={{textAlign: "left"}}>
                          <ul>
                         <li> <Link to="/website">Website Development</Link></li>
                          <li><Link to="/professional">Professional Sevices</Link></li>
                          <li><Link to="/corporate">Corporate Training</Link></li>
                          </ul>
                        </div>
                      </div>
                     <li><Link to="/gallery">Gallery</Link></li> 
                     <li> <Link  to="/placement">Placement</Link></li> 
                     <li> <Link to="/contact">Contact</Link></li> 
                      <Link className="butonstyle" style={{cursor: 'pointer', marginleft:"100px"}} to="/login">
                      Login&nbsp;<i className="fa-regular fa-arrow-right" style={{fontSize: "11",paddingTop: "5px",paddingLeft: "5px"}} />
                      </Link>
                      </ul>
                      
                    </div>
                    <div id='mobile' onClick={handleclick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
                 
                  </nav>
                </div>
                
              </div>
              
                
                 
            </div>
          </div>
        </div>
        
      </div>
      
    </header></div>
  {/* header area end */}
 
  </div>


  )
}
