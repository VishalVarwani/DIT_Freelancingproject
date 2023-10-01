import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Fullstack() {
  return (
    <div>
        <Header/>
   <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50, backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Full Stack Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Full Stack Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Full Stack Training</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                    <b>HTML5 and CSS3</b>
                  </p><li>HTML Fundamentals</li>
                  <li>Basic Tags</li>
                  <li>New Tags in HTML5</li>
                  <li>Local Storage</li>
                  <li>Index DB</li>
                  <li>CSS3 Fundamentals</li>
                  <li>CSS3 New Properties</li>
                  <li>CSS3 Animation</li>
                  <li>CSS3 Tooltips</li>
                  <li>CSS @Media Query and CSS Pagination</li>
                  <b>JQUERY and AJAX</b>
                  <li>JQuery Introduction</li>
                  <li>JQery Effects</li>
                  <li>JQuery Form and JQuery Events</li>
                  <li>AJAX and JSON AJAX</li>
                  <b>Advanced JavaScript</b>
                  <li>Introduction to Object Oriented concepts</li>
                  <li>Functions</li>
                  <li>Closures</li>
                  <li>Creating objects using constructor and Prototype</li>
                  <b>AngularJS</b>
                  <li>Introduction</li>
                  <li>Binding and Expression</li>
                  <li>Directives</li>
                  <li>Controllers</li>
                  <li>Filters</li>
                  <li>Form Features</li>
                  <li>Modules</li>
                  <li>Services</li>
                  <li>Routing and SPA</li>
                  <li>Angular JS</li>
                  <li>MVC(Model View Controller) Web API</li>
                  <b>NodeJs</b>
                  <li>Introduction to NodeJs</li>
                  <li>NodeJs Architecture</li>
                  <li>NPM(Node Packaging Manager)</li>
                  <li>Installing NPM module</li>
                  <li>Creating and locating modules</li>
                  <li>Creating a simple HTTP server</li>
                  <li>understanding routing in ExpressJS</li>
                  <li>Other Middlewares</li>
                  <li>Connecting NodeJS to Database</li>
                  <li>mongoose Module and Creating REST API’s</li>
                  <b>MongoDB</b>
                  <li>Introduction to NOSQL Database</li>
                  <li>Basic CRUD Operations</li>
                  <li>Indexing</li>
                  <li>Aggregation</li>
                  <li>Data Modeling concepts</li>
                  <li>Connecting MongoDB sing Mongoose</li>
                  <p />
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>Full Stack Development: Microsoft Dotnet</button>									
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                
                  
                    <b>Introduction to C#</b>
                  <li>History of C# Version
</li>
                  <li>C# Code Execution</li>
                  <li>Installing and Configuring Visual Studio</li>
                  <li>Variable</li>
                  <li>Data Type</li>
                  <li>Safe Type Casting with IS and AS Operator</li>
    
                    <b>C# Conditional Statements and Loops</b>
             
                  <li>Operators</li>
                  <li>Operators precedence</li>
                  <li>Conditional Statements: if, if..else if, switch</li>
                  <li>Loops: do..while, while, for, foreach</li>
                  <li>Jump Statements</li>
                  <b>C# Arrays and Strings</b>
                  <li>Arrays</li>
                  <li>Types of Arrays
</li>
                  <li>Strings</li>
                  <li>String Methods
</li>

  <b>Introduction to C#</b>
<li>History of C# Version</li>
<li>C# Code Execution</li>
<li>Installing and Configuring Visual Studio</li>
<li>Variable</li>
<li>Data Type</li>
<li>Safe Type Casting with IS and AS Operator</li>

  <b>C# Conditional Statements and Loops</b>

<li>Operators</li>
<li>Operators precedence</li>
<li>Conditional Statements: if, if..else if, switch</li>
<li>Loops: do..while, while, for, foreach</li>
<li>Jump Statements</li>

  <b>C# Arrays and Strings</b>

<li>Arrays</li>
<li>Types of Arrays</li>
<li>Strings</li>
<li>String Methods</li>
  <b>Object-Oriented Programming in C#</b>
<li>Object-Oriented Programming Concepts</li>
<li>Access Modifiers</li>
<li>Constructor</li>
<li>Inheritance</li>
<li>Methods</li>
<li>Structure</li>

  <b>C# Concepts: Abstract Class, Interface, and Partial Class</b>
<li>Abstract Class</li>
<li>Interface</li>
<li>Interface vs. Abstract Class</li>
<li>Static Class</li>
<li>Extension Methods</li>
<li>Partial Class</li>
<li>Partial Methods</li>
  <b>C# Concepts: Property, Indexer, Attributes, and Exception Handling</b>
<li>Property</li>
<li>Indexer</li>
<li>Exception Handling</li>
<li>Enum</li>
<li>Attributes</li>
  <b>C# Concepts: Anonymous Type, Delegates, Events, and Lambda</b>
<li>Extension Methods</li>
<li>Anonymous Type</li>
<li>Var and Dynamic</li>
<li>Delegates</li>
<li>Events</li>
<li>Anonymous Methods</li>
<li>Lambda Expression</li>
<li>Expression Tree</li>
  <b>C# Asynchronous Programming – Async and Await</b>
<li>What is Synchronous and Asynchronous?</li>
<li>Asynchronous Programming Patterns in .NET</li>
<li>Asynchronous Programming Model (APM)</li>
<li>Event-based Asynchronous Pattern (EPM)</li>
<li>Task-based Asynchronous Pattern (TAP)</li>
<li>Async and Await in Task-based Asynchronous Pattern TAP
</li>
<li>Asynchronous vs. Multithreading
</li>

    <b>SQL Server</b>
    
      <li>Getting Started with SQL Server</li>
      <li>Introduction to Database</li>
      <li>Introduction to SQL Server</li>
      <li>Installing SQL Server and Components</li>
      <li>SQL Server Database and Tables</li>
      <li>SQL Keys</li>
      <li>SQL Commands</li>
      <li>SQL Constraints</li>
      <li>Types of Database</li>
      <b>T-SQL Fundamentals with SQL Server</b>
      <li>Data Types, Variables, and Operators</li>
      <li>SQL Server Control Of Flow</li>
      <li>SQL Query and Sub Query</li>
      <li>SQL Clauses</li>
      <li>SQL Predicates</li>
      <li>SQL Joins</li>
      <li>SQL Exceptions</li>
      <li>Try..Catch</li>
      <b>SQL Server Views and Indexes</b>
      <li>SQL Server Views</li>
      <li>Types of Views</li>
      <li>SQL Server Indexes</li>
      <li>Types of Indexes</li>
      <b>SQL Server Stored Procedures and Functions</b>
      <li>Introduction to Stored Procedure</li>
      <li>Types of Stored Procedure</li>
      <li>Creating Stored Procedures For Insert, Update and Delete</li>
      <li>Stored Procedures Parameters</li>
      <li>SQL Server Functions</li>
      <li>Scalar Functions</li>
      <li>Table Valued Functions</li>
      <b>SQL Server Triggers and Cursors</b>
      <li>SQL Server Triggers</li>
      <li>Types of Triggers</li>
      <li>SQL Server Cursors</li>
      <li>Types of Cursors</li>
      <li>Cursor Alternatives</li>
      <b>Understanding and Managing Azure SQL Database</b>
      <li>Introduction to Azure SQL Database</li>
      <li>Database Deployment Models</li>
      <li>Azure SQL Database Server</li>
      <li>Creating and Managing Single Database</li>
      <li>Purchasing Models: DTU and vCore</li>
      <li>Azure SQL Database Tools</li>
      <li>Database Migration Using DMA</li>
      <li>Creating and Managing Elastic Pool</li>
      <li>Creating Managed Instance</li>
 <br/>
    <b>HTML5</b> <br/> <br/>
      <b>Introduction to HTML</b>
      <li>What is HTML?</li>
      <li>History of HTML</li>
      <li>HTML Development IDE</li>
      <li>HTML Page Structure</li>
      <li>Introduction to HTML5</li>
      <li>HTML5 Document</li>
      <li>Browsers Support and Advantages</li>
      <b>HTML5 Basics: Tags, Elements, and Attributes</b>
      <li>HTML Tags</li>
      <li>HTML Elements and Attributes</li>
      <li>HTML Formatting and Styles</li>
      <li>HTML Layouts</li>
      <li>HTML Blocks and Inline Elements</li>
      <li>Empty Elements and Nested Elements</li>
      <li>HTML Quotation and Citation Elements</li>
      <li>HTML CSS</li>
      <b>HTML5 Tables, Lists, and Layouts</b>
      <li>HTML Tables – Columns, Row, Border, Padding</li>
      <li>HTML Lists – Order and Unorder List</li>
      <li>What is HTML Layouts?</li>
      <li>Table Based Layout</li>
      <li>Div Based Layout</li>
      <li>HTML5 Structure Based Layout</li>
      <b>HTML5 Forms, Media and Storage</b>
          <li>HTML5 New Input Elements</li>
          <li>HTML5 Forms Attributes</li>
          <li>HTML5 Validations</li>
          <li>HTML Media</li>
          <li>HTML Audio</li>
          <li>HTML Video</li>
          <li>HTML and JavaScript</li>
          <li>HTML Storage API</li>
          <li>HTML Graphics</li>

          <b>CSS3</b>
      <li>CSS3 Fundamentals</li>
      <li>Introduction to CSS</li>
      <li>CSS3 Selectors</li>
      <li>Pseudo Elements and Pseudo Classes</li>
      <li>Types of CSS</li>
      <li>CSS Fonts and CSS Text</li>
      <li>CSS Box Model</li>
      <li>Margin, Padding, and Border</li>
      <li>Position and Colors</li>
      <li>CSS Background and Gradients</li>
      <b>CSS3 Advanced Concepts</b>
      <li>CSS Units</li>
      <li>CSS Layout</li>
      <li>Media Queries</li>
      <li>CSS Functions</li>
      <li>Transforms – 2D and 3D</li>
      <li>Transitions and Animations</li>
      <li>CSS Shadow</li>
<br/>
      <b>Bootstrap</b><br/>
      <br/>

      <b>Introduction to Bootstrap</b>
      <li>Bootstrap Installation Options</li>
      <li>Introduction to Bootstrap 4</li>
      <li>Layouts and Grid System</li>
      <li>Alignments and Offsets</li>
      <b>Bootstrap 4 Flexbox, Style, and Utilities</b>
      <li>Flexbox</li>
      <li>Typography</li>
      <li>Colors</li>
      <li>Utilities</li>
      <b>Bootstrap 4 CSS Components: Images, List, Tables, Button and Cards</b>
      <li>Images and Lists</li>
      <li>Bootstrap Tables</li>
      <li>Buttons, Badges</li>
      <li>Cards, Media Objects</li>
      <b>Bootstrap 4 CSS Components: Forms, Navbars, Pagination and Spinners</b>
      <li>Forms and Validations</li>
      <li>Nav, Navbar</li>
      <li>Breadcrumb and Pagination</li>
      <li>Progress bars and Spinners</li>
      <br/>
      <b>ASP.NET MVC</b> <br/> <br/>
      <b>Introduction to ASP.NET MVC</b>
      <li>ASP.NET MVC vs. ASP.NET Web Forms</li>
      <li>Advantages of ASP.NET MVC</li>
      <li>Creating ASP.NET MVC5 Project</li>
      <li>Understanding ASP.NET MVC Folder Structure</li>
      <li>Layout, Sections and View Start</li>
      <li>MVC Pattern</li>
      <li>MVC vs. Tier</li>
      <li>Action Methods and Result Types</li>
      <b>ASP.NET MVC Fundamentals</b>
      <li>Razor View Engine</li>
      <li>Razor View Engine vs. WebForms Engine</li>
      <li>Razor Syntax</li>
      <li>Creating Custom View Engine</li>
      <li>Routing : Routes and Constraints</li>
      <li>HTML Helpers</li>
      <li>Validation Summary</li>
      <li>AJAX Helpers</li>
      <li>Data Passing Techniques: ViewData, ViewBag, TempData, Session, QueryString</li>
      <li>Partial Views</li>
      <b>ASP.NET MVC Forms and Validation</b>
          <li>ASP.NET MVC Forms</li>
          <li>Model Binding</li>
          <li>Custom Model Binding</li>
          <li>Synchronous Forms</li>
          <li>Asynchronous Forms</li>
          <li>Forms Validations : Server Side and Client Side</li>
          <li>Custom Validation</li>
          <br/>
          <b>Entity Framework</b> <br/> <br/>
          <b>Introduction to Entity Framework: Getting Started</b>
            <li>Introduction to ORM Tools</li>
            <li>Entity Framework Architecture</li>
            <li>Data Modeling Approaches</li>
            <li>Getting Started With EF</li>

            <b>Entity Framework Database First Approach</b>
            <li>Database First Approach</li>
            <li>DbContext in EF 6</li>
            <li>EF CRUD Operations Using ASP.NET MVC</li>
            <li>Mapping Stored Procedures and Functions</li> 
            <li>Calling Stored Procedures and Functions
</li> <li>Performing CUD Operations
</li>
          <b>Entity Framework Code First Approach</b>
            <li>EF Code First Modeling</li>
            <li>EF Conventions</li>
            <li>Database Annotation</li>
            <li>EF Fluent API</li>
            <li>CRUD Operations Using ASP.NET MVC</li>
            <li>Calling Stored Procedure and Functions</li>
            <li>Handling Input and Output Parameters
</li>
<li>Handling Multiple Result sets
</li>
<b>EF Code First Migrations and Relationships</b>
<li>Code First Migrations</li>
            <li>Script Migrations</li>
            <li>Migrations with Existing Database</li>
            <li>Reverse Engineering</li>
            <li>Database Initializers</li>
            <li>Database Relationships – one-to-one, one-to-many, many-to-many</li>
            <li>EF Inheritance
</li>
<b>Entity Framework Advanced Concepts
</b>
<li>Queries</li>
            <li>Entity and States</li>
            <li>Data Loading</li>
            <li>Transactions and Async Query</li>
            <li>Working with Entity States</li>
            <li>Eager Loading vs Explicit Loading</li>
            <li>Handling Concurrency Conflicts</li>
            <li>Working with Transactions in EF</li> <br/>
            <b> ASP.NET Web API
</b>
<br/> <br/>
<b>Introduction to Web API: Getting Started
</b>
<li>Introduction to SOA</li>
            <li>Introduction to REST</li>
            <li>Introduction to ASP.NET Web API</li>
            <li>WCF vs. Web API</li>
            <li>Building Web API
</li>
<li>Testing API Using Postman
</li>
<b>ASP.NET Web API Fundamentals
</b>
<li>Routing – Convention and Attribute Routing</li>
          <li>Route Constraints</li>
          <li>Action Result</li>
          <li>Content Negotiation</li>
          <li>Media Type Formatters</li>
          <li>Model Binding</li>
          <li>Model Validation</li>
          <li>Handling Validation Errors</li>
          <b>Building RESTful Services with ASP.NET Web API
</b>
<li>Testing API Using Postman</li>
            <li>ASP.NET Web API Fundamentals</li>
            <li>Routing – Convention and Attribute Routing</li>
            <li>Route Constraints</li>
            <li>Action Result</li>
            <li>Content Negotiation</li>
            <li>Media Type Formatters</li>
            <li>Model Binding</li>
            <li>Model Validation</li>
            <li>Handling Validation Errors</li>

            <b>Building RESTful Services with ASP.NET Web API
</b>
<li>Introduction to ASP.NET Web API</li>
          <li>Building ASP.NET Web API</li>
          <li>ASP.NET Web API CRUD Operations</li>
          <li>Testing Web API Using Postman</li>
          <li>Consuming Web API in ASP.NET MVC</li>
          <li>Performing CRUD Operations using ASP.NET MVC</li>
          <b>ASP.NET Web API Advanced Concepts
</b>
<li>ASP.NET Web API Pipeline</li>
          <li>Web API Filters</li>
          <li>Creating Custom Filters</li>
          <li>Exception Handling</li>
          <li>Dependency Injection</li>
          <li>Web API Versioning</li>
          <li>Web API Hosting</li>
                 
                  <p /> 
                  </div>
                  </div>
                  </div>
                  </div>
          {/* <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style="font-weight: 800;font-size: 18px;">2. AWS (Amazon Web Services)</button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div class="card-body">
              <p></p>
          </div>
      </div>
  </div>
  <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style="font-weight: 800;font-size: 18px;">3. DevOps</button>                     
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div class="card-body">
              <p></p>
          </div>
      </div>
  </div>*/}
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
