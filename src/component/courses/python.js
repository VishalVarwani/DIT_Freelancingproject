import React from 'react'
import Header from '../header'
import Footer from '../footer'
export default function Python() {
  return (
    <div>
    <Header/>
<main>
<style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
<div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50,backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
<div className="container">
  <div className="row">
    <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Python Training</div>
    <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Python is a popular general-purpose programming language. It is used in machine learning, web development, desktop applications, and many other fields. Fortunately for beginners, Python has a simple, easy-to-use syntax. This makes Python a great language to learn for beginners.
    </div>
  </div>
  <div className="tp-form__btn" style={{paddingBottom: 33}}>
       <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2">
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Book A Demo <i className="fa-regular fa-arrow-right" />
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
        <form action="mail.php" method="POST" className="pt-md-2">
                      <div className="row">
                        <div className="form-group col-sm-12" style={{paddingTop: 10, paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Your Name *" id="nameEnquiry" className="form-control alpha-only" name="fname" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{paddingTop: 10, paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Mobile No. *" id="phoneEnquiry" className="form-control number-only" name="mobile" type="text" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                        </div>
                        <div className="form-group col-sm-12" style={{paddingTop: 10, paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Email ID" id="emailEnquiry" className="form-control" name="email" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{paddingTop: 10, paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Course Name" id="course" className="form-control" name="course" type="text" />
                          {/*<input t placeholder="Enter course" id="message" class="form-control" name="Message" rows="4"></textarea>*/}
                        </div>
                        <div className="col-md-12" style={{textAlign: 'center'}}>
                          {/*<input type="submit" name="submit" value="Send Details" class="tp-btn"  id="submitEnquiry" />*/}
                          <button className="tp-btn" onclick="return validationEnquiry();" style={{cursor: 'pointer'}}>
                            <span>Submit <i className="fa-regular fa-arrow-right" /> </span>
                          </button> 
                        </div>
                        <div className="col-sm-12">
                          <div id="alert-msg" className="alert-msg text-center" />
                        </div>
                      </div>
                    </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>
</div>
      
      </div>
  <div style={{color: '#ffffff', fontSize: 20, fontWeight: 900}}><span>Call Trainer</span><br /><a style={{color:"white"}} href="tel:+91 8976758080"><i className="fa-regular fa-phone" />
      +91 8976758080</a></div>
</div>
</div>
<div className="tp-about__section" style={{paddingTop: 50, paddingBottom: 30}}>
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div style={{background: '#f3f1ee', padding: 29}}>
        <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Python Training</p>
        <p style={{fontSize: 16, fontFamily: 'arial'}} /><h5>Duration: 3 Months</h5><p />

      </div>
      
      <div className="accordion" id="myAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Python</button>									
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div className="card-body">
              <p>
                <b>Python Overview</b>
              </p><li>Features of Python</li>
              <li>Environment Setup</li>
              <li>Running Mode of Python</li>
              <li>Getting Started</li>
              <b>Basic Syntax</b>
              <li>Python Identifier</li>
              <li>Reserve Words</li>
              <li>Lines and Indentation</li>
              <li>Multi-Line Statements</li>
              <li>Quotation in Python</li>
              <li>Comments in Python</li>
              <li>Using Blank Lines</li>
              <li>Waiting for the User</li>
              <li>Multiple Statements on a Single Line</li>
              <li>Multiple Statement Groups as Suites</li>
              <b>Variable</b>
              <li>Assigning Values to variables</li>
              <li>Multiple Assignment</li>
              <li>Standard Data Types</li>
              <li>Python Numbers</li>
              <li>Python String</li>
              <li>Python List</li>
              <li>Python Tuples</li>
              <li>Python Dictionary</li>
              <li>Data Type Conversion</li>
              <b>Basic Operators</b>
              <li>Types of Operators</li>
              <li>Python Arithmetic Operators</li>
              <li>Python Comparison Operators</li>
              <li>Python Assignment Operators</li>
              <li>Python Bitwise Operators</li>
              <li>Python Logical Operators</li>
              <li>Python Membership Operators</li>
              <li>Python Identity Operators</li>
              <li>Python Operators Precedence</li>
              <b>Decision Making</b>
              <li>If Statement</li>
              <li>If….else Statement</li>
              <li>elif Statement</li>
              <li>Nested Statement</li>
              <li>Single Statement Suites</li>
              <b>Function</b>
              <li>Defining a Function</li>
              <li>Calling a Function</li>
              <li>Function Arguments</li>
              <li>Pass By Reference Vs Value</li>
              <li>The Anonymous Functions</li>
              <li>The Return Statement</li>
              <li>Scope of Variables</li>
              <b>Module</b>
              <li>Import Statement</li>
              <li>From …. Import Statement</li>
              <li>From …. Import* Statement</li>
              <li>Locating Modules</li>
              <li>The PYTHONPATH variable</li>
              <li>Namespaces and Scoping</li>
              <li>The dir() function</li>
              <li>The globals() and locals() Functions</li>
              <li>The reload() Function</li>
              <li>Packages in Python</li>
              <b>Exception</b>
              <li>Handling An Exception</li>
              <li>The except Clause with No Exceptions</li>
              <li>The except Clause with Multiple Exceptions</li>
              <li>The try-finally Clause</li>
              <li>Argument Of an Exception</li>
              <li>Raising an Exception</li>
              <li>User Defined Exceptions</li>
              <b>File I/O</b>
              <li>Printing to the Screen</li>
              <li>Reading Keyboard Input</li>
              <li>Opening and Closing Files</li>
              <li>Reading and Writing Files</li>
              <li>File Positions</li>
              <li>Renaming and Deleting Files</li>
              <li>Directories in Python</li>
              <li>File &amp; Directory Related Methods</li>
              <b>Database</b>
              <li>Database Connection</li>
              <li>Creating Database Table</li>
              <li>Insert Operation</li>
              <li>Read Operation</li>
              <li>Update Operation</li>
              <li>Delete Operation</li>
              <li>Performing Transactions</li>
              <li>Commit Operation</li>
              <li>Rollback Operation</li>
              <li>Disconnecting Database</li>
              <li>Handling Error</li>
              <b>OOPS Overview</b>
              <li>Creating Class</li>
              <li>Creating Object</li>
              <li>Accessing Attributes</li>
              <li>Built-In-Class Attributes</li>
              <li>Destroying Objects (Garbage Collection)</li>
              <li>Class Inheritance</li>
              <li>Overriding Methods</li>
              <li>Overloading Operators</li>
              <li>Data Hiding </li>
              <li>Regular Expressions</li>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>Django</button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div className="card-body">
            <p>
              <b>Introduction to Django</b>
            </p><li>Installation of Django</li>
            <li>Creating a virtual environment for better dependency management</li>
            <li>Setup Django environment</li>
            <li>Create your first sample Django project</li>
            <li>Understanding the project structure of a newly created django project</li>
            <li>Django Admin, Commands and Shell</li>
            <li>Difference between a App and a Project</li>
            <li>Role of Flask and Django</li>
            <b>Django Architecture</b>
            <li>Django Project MVT Architecture and MVC</li>
            <li>Difference Between MVT and MVC</li>
            <b>Routing</b>
            <li>Understanding urls.py and the purpose of it</li>
            <li>Creating urls with names and namespaces</li>
            <li>Building dynamic urls</li>
            <li>Mapping of the urls with the view functions</li>
            <li>Linking the urls of an app in a project with the the root app of the project using 'include</li>
            <b>Django Views</b>
            <li>Django views</li>
            <li>Function Based Views</li>
            <li>Django CRUDE operation using function</li>
            <li>What is Render and relative</li>
            <li>Import URL names as Links</li>
            <b>The Django Template System</b>
            <li>Basic Using Template System</li>
            <li>Need for templates</li>
            <li>How to Configure Template</li>
            <li>Template Loading</li>
            <li>Using conditionals and looping in django templates</li>
            <li>Django convention of storing the static assets like images, css and javascript and referencing them from the template</li>
            <li>Handling different kind of media files</li>
            <li>Template Inheritance</li>
            <b>Intracting With Database</b>
            <li>What is ORM?</li>
            <li>Benefits of ORM</li>
            <li>Connecting a django project to a database</li>
            <li>Django migrations</li>
            <li>Visualize business data as django models</li>
            <li>Django model Field and field types</li>
            <li>Relationship between django models - One to One, Many to One, Many to Many</li>
            <li>Saving, updating, deleting, and querying django models</li>
            <li>admin files and registration models fields</li>
            <b>The Django Admin Dashboard</b>
            <li>Activating the admin interface</li>
            <li>Customize admin dashboard</li>
            <li>Creating superuser for accessing the backend admin dashboard</li>
            <li>Customizing django admin templates look and feel (perform CRUD Operations)</li>
            <b>Built in Django Apps And Web Development Concern</b>
            <li>Authentication system</li>
            <li>Messages framework</li>
            <li>Emailing system</li>
            <b>Session Management</b>
            <li>HTTP as a stateless protocol</li>
            <li>Django session management built in app</li>
            <li>Concept of session management and how it internally uses cookies and session id</li>
            <li>Storing attributes in a session and retrieving from the same session</li>
            <li>Destroying a session using 'flush'</li>
            <b>Django class Based Generic Views</b>
            <li>Introduction Generic Class Based Views</li>
            <li>How to create generic class based views</li>
            <li>Class based CRUDE operation</li>
            <li>Create views</li>
            <li>Retrieve views</li>
            <li>Update views</li>
            <li>Delete views</li>
            <b>Rest Web Services</b>
            <li>Web Services and REST</li>
            <li>Django REST framework</li>
            <li>What is serializers?</li>
            <li>Creating Views</li>
            <li>Creating curls</li>
            <li>Update and delete records using serialized/django rest framework</li>
            <li>POSTMAN details and how to check API's in POSTMAN</li>
            <p />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{fontWeight: 800, fontSize: 18}}>Data Science</button>                     
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div className="card-body">
           
          </div>
        </div>
      </div>
      <div className="tp-form__btn" style={{paddingBottom: 15, textAlign: 'center', paddingTop: 15}}>
        <a onclick="show();" className="tp-btn" style={{cursor: 'pointer'}}>
          <span>Book A Demo <i className="fa-regular fa-arrow-right" /> </span>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</main>

  <Footer/>
</div>
)
}
