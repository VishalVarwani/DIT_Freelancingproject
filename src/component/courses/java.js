import React from 'react'
import Header from '../header'
import Footer from '../footer'

export default function Java() {
  const topics = [
    <b> Introduction to Java</b>,
    "History of Java",
    "What is Java?",
    "What is JVM?",
    "Java Keywords",
    "Difference between JDK, JRE & JVM",
    "Technologies based on Java",
    "Features of Java",
    <b> Data types in Java </b>,
    "Primitive Data Types",
    "Non-Primitive Data Types",
    <b>Operators In Java </b>,
    "Arithmetic Operators",
    "Unary Operators",
    "Increment Operator (++)",
    "Decrement Operator (--)",
    "Assignment Operator (=)",
    "Relational Operators",
    "Boolean Operators",
    "Bitwise Operators",
    "Ternary Operator / Conditional Operator (? :)",
    "new Operator",
    "Cast Operator",
    <b>Control Statements in java</b>,
    "Control Statement",
    "if Statements",
    "If-else statements",
    "switch-case Statements",
    "Iteration Statements",
    "for Statements",
    "while Statements",
    "do-while Statements",
    "Transfer Statements break and continue",
<b>Arrays in Java
</b>,    "What is array",
    "Types of array",
    "arrayname.length Property",
    "Command Line arguments",
    "Creating Strings",
    "String Class methods",
    "Immutability of String",
<b>StringBuffer and StringBuilder</b>,    "String Buffer class",
    "String Buffer class methods",
    "String Builder class",
    "String Builder class methods",
<b>Introduction to OOP
</b>,    "Class / Object",
    "Encapsulation",
    "Abstraction",
    "Inheritance",
    "Polymorphism",
<b>Classes & Object</b>,    "Understanding Methods",
    "Static Variables, Methods, and Block",
    "'this' Keyword",
    "Instance Methods",
    "Passing Primitive data types, Objects & Arrays to Methods",
<b>Inheritance</b>,    "'super' Keyword",
    "Types of Inheritance",
    "Access Specifiers",
<b>Polymorphism</b>,    "Polymorphism with Variables",
    "Polymorphism using Methods",
    "Static Polymorphism",
    "Dynamic Polymorphism",
    "Polymorphism with Static Methods",
    "Polymorphism with Private Methods",
    "Polymorphism with final Methods",
    "'final' class",
<b>Type Casting</b>,    "Casting with Primitive Data Types",
    "Casting with User Defined Data Types",
    "Generalization and Specialization",
    "Object Class",
    "Cloning the class Objects",
<b>Abstract Classes & Interfaces</b>,    "Abstract Method & Abstract Classes",
    "Multiple Inheritance using Interfaces",
    "Interface within Interface",
    "Abstract classes V/s Interfaces",
<b>Packages</b>,    "Types of Packages",
    "Interfaces in Package",
    "Creating Sub Package In Package",
<b>Exception Handling</b>,    "What are Exceptions?",
    "Types of Exceptions",
    "Handling Exception",
    "'try', 'catch'",
    "Handling Multiple Exception",
    "'finally', 'throw', 'throws'",
  ];
  return (
    <div>
        <Header/>
    <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n    \n    .demo {\n  opacity: 0.6;\n}\n\n.active,\n.demo:hover {\n  opacity: 1;\n}\n\nimg.hover-shadow {\n  transition: 0.3s;\n}\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.imageWidth\n{\n\twidth:100%;\n\t\n}\n@media screen and (max-width: 600px) {\n  .imageWidth {\n    \n\twidth: 167%;\n    margin-left: -65px;\n  }\n}\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50,backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Java Courses</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Java is a multi-programming language created in 1995 by Janes Gosling at Sun Microsystems (now Oracle). Since its first version, Java has evolved to become one of the most popular programming languages in the computer and AI industry. Java developers are in high demand and are one of the highest-paying jobs in the industry.</div>
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Java Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Core Java</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">

                  <p>
                  <ul>
        {topics.map((topic, index) => (
          <li style={{listStyle:"inside"}}key={index}>{topic}</li>
        ))}
      </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>Advance Java</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p><b>Java Collections and Generics</b>
                  </p><li>The Collections Framework and its API</li>
                  <li>Collections and Java Generics</li>
                  <li>Collection, Set, List, Map, Iterator</li>
                  <li>Auto boxing</li>
                  <li>Collections of Object (non-generic)</li>
                  <li>Using Array List, Hash Set, and Hash Map</li>
                  <li>for-each Loop</li>
                  <li>Processing Items With an Iterator</li>
                  <li>More About Generics</li>
                  <b>The Java Streams Model</b>
                  <li>Delegation-Based Stream Model</li>
                  <li>Input Stream and Output Stream</li>
                  <li>Media-Based Streams</li>
                  <li>Filtering Streams</li>
                  <li>Readers and Writers</li>
                  <b>Working with Files</b>
                  <li>File Class</li>
                  <li>Modeling Files and Directories</li>
                  <li>File Streams</li>
                  <li>Random-Access Files</li>
                  <b>Java Serialization</b>
                  <li>The Challenge of Object Serialization</li>
                  <li>Serialization API</li>
                  <li>Serializable Interface</li>
                  <li>Object Input Stream and Object Output Stream</li>
                  <li>The Serialization Engine</li>
                  <li>Transient Fields</li>
                  <li>readObject and writeObject</li>
                  <li>Externalizable Interface</li>
                  <b>Conclusion</b>
                  <b>MySQL</b>
                  <li>MySQL Data types and Database Languages</li>
                  <li>Important SQL command</li>
                  <li>SQL Joins</li>
                  <li>SQL Constraints</li>
                  <b>Java Database Connectivity</b>
                  <li>JDBC Product</li>
                  <li>Types of Drivers</li>
                  <li>Two-Tier Client/Server Model</li>
                  <li>Three-Tier Client/Sever Model</li>
                  <li>Basic Steps of JDBC</li>
                  <li>Creating and Executing SQL Statement</li>
                  <li>The Result Set Object</li>
                  <li>Working with Database MetaData Interface</li>
                  <b>Servlets</b>
                  <li>Servlet Interaction &amp; Advanced Servlets</li>
                  <li>Life cycle of Servlet</li>
                  <li>Java Servlet Development Kit</li>
                  <li>Javax.servlet package</li>
                  <li>Reading Servlet Parameters</li>
                  <li>Reading Initialization Parameters</li>
                  <li>The javax.servlet.http Package</li>
                  <li>Handling HTTP</li>
                  <b>JavaServer Pages</b>
                  <li>JSP Technologies</li>
                  <li>Understanding the Client-Server Model</li>
                  <li>Understanding Web server software</li>
                  <li>Configuring the JSP Server</li>
                  <li>Handling JSP Errors</li>
                  <li>JSP Translation Time Errors</li>
                  <li>JSP Request Time Errors</li>
                  <li>Creating a JSP Error Page</li>
                  <b>EJB</b>
                  <li>Types of EnterpriseJava beans</li>
                  <li>Session Bean &amp; Entity Bean</li>
                  <li>Features of Session Bean</li>
                  <li>Life-cycle of Stateful Seession Bean</li>
                  <li>Features of Entity Bean</li>
                  <li>Life-cycle of Entity Bean</li>
                  <li>Container-managed Transactions &amp;</li>
                  <li>Bean-managed Transactions</li>
                  <li>Implementing a container-manged Entity Bean</li>
                  <b>XML</b>
                  <li>What is XML?</li>
                  <li>XML Syntax Rules</li><p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{fontWeight: 800, fontSize: 18}}>Java Framework</button>                     
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p><b>Spring Framework</b>
                  </p><li>Introduction to Spring 3.0</li>
                  <li>Steps to use Spring Framework in applications</li>
                  <li>Understanding IOC and Dependency Injection</li>
                  <li>Understanding the bean life-cycle – Auto wiring and bean scopes</li>
                  <li>Annotation-based dependency injection</li>
                  <li>Adding Behavior to an application using Aspect</li>
                  <li>Creating and applying aspects</li>
                  <li>Introduction data access with spring and JDBC through Spring</li>
                  <li>Transaction in a Spring environment</li>
                  <li>Getting started with Hibernate in a Spring environment</li>
                  <li>Working with Spring MVC</li>
                  <li>Spring MVC Form Handling</li>
                  <li>Creating Views in Spring MVC</li>
                  <b>Spring Boot:</b>
                  <li>Introduction to Spring Boot</li>
                  <li>Exploring Starters</li>
                  <li>Exploring Auto configuration</li>
                  <li>Exploring Embedded Containers</li>
                  <li>Exploring Actuators</li>
                  <li>Using YAML with Spring Boot Application</li>
                  <li>Using Spring Boot with JDBC</li>
                  <li>Using Spring Boot with Data Sources</li>
                  <li>Using Spring Boot with Hibernate</li>
                  <li>Using Spring Boot with JPA</li>
                  <li>Using Spring Data JPA</li>
                  <li>Spring Boot with Web MVC</li>
                  <li>Spring Boot with REST Services</li>
                  <li>Spring Boot with Swagger</li>
                  <li>Spring Boot with Messaging-RabbitMQ</li>
                  <li>Spring Boot with Messaging-Kafka</li>
                  <li>Spring Boot with Java Mail</li>
                  <li>Using Maven to Build Boot Applications</li>
                  <li>Using Gradle to Build Boot Applications</li>
                  <li>Spring Boot with Security</li>
                  <b>Micro services with Spring Cloud:</b>
                  <li>Introduction to Microservices</li>
                  <li>Exploring Microservices with Book Store -A Case-Study</li>
                  <li>Using Actuators in Book Store.</li>
                  <li>Spring Boot Admin Server</li>
                  <li>Spring Boot Admin Client in Book Store</li>
                  <li>Feign as a declarative REST client</li>
                  <li>ASYNC Calls with RabbitMQ</li>
                  <li>ASYNC Calls with Kafka</li>
                  <li>Service Discovery with Netflix Eureka</li>
                  <li>Load-Balancing with Netflix Ribbon</li>
                  <li>Distributed Tracing with Sleuth and Zipkin</li>
                  <li>Fault Tolerance with Netflix Hystrix</li>
                  <li>Edge Components with Netflix Zuul</li>
                  <li>Using All the Skills in Book Store</li>
                  <li>Spring Cloud Config Server</li>
                  <li>Spring Cloud Config Cleint in Book Store</li>
                  <li>Spring Cloud Bus</li>
                  <li>Handling Errors in MicroService Applications</li>
                  <li>Unit Testing MicroServices</li>
                  <li>Securing MicroService Applications.</li>
                  <li>Using OAUTH2 Security</li>
                  <b>Struts</b>
                  <li>Introduction to the Apache Struts</li>
                  <li>MVC Architecture</li>
                  <li>Struts Architecture</li>
                  <li>How Struts Works?</li>
                  <li>Introduction to the Struts Controller</li>
                  <li>Introduction to the Struts Action Class</li>
                  <li>Using Struts ActionFrom Class</li>
                  <li>Using Struts HTML Tags</li>
                  <li>Introduction to Struts Validator Framework</li>
                  <li>Client Side Address Validation in Struts</li>
                  <li>Custom Validators Example</li>
                  <li>Developing Application with Struts Tiles</li>
                  <b>Hibernate</b>
                  <li>Introduction to Hibernate 3.0</li>
                  <li>Hibernate Architecture</li>
                  <li>First Hibernate Application</li>
                  <li>Hibernate 3</li>
                  <li>What is the problem with JDBC - paradigm mismatch</li>
                  <li>What is ORM?</li>
                  <li>Understanding different components of Hibernate</li>
                  <li>How to persist objects using Hibernate</li>
                  <li>How to use mapping files, configuration files and Session object</li>
                  <li>Instance states</li>
                  <li>How to generate ID</li>
                  <li>How to implement Inheritance in Hibernate</li>
                  <li>Working with relationship between entities</li>
                  <li>Transactions in Hibernate</li>
                  <li>Querying with HQL (Hibernate Query Language)</li>
                  <li>Named and native queries</li>
                  <li>Working with Criteria Interface</li>
                  <li>Query by example - QBE</li>
                  <li>Caching and fetching</li>
                  <li>Using Hibernate in different types of applicatio </li><p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" style={{fontWeight: 800, fontSize: 18}}>Android</button>                     
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>

                  <li>Java Concepts</li>
    <li>SQL</li>
    <li>Mobile Application Development Platform</li>
    <li>Android Development History</li>
    <li>Android Installation with Studio</li>
    <li>Android SDK and Generation of APK Files</li>
    <li>Android Features, Versions, and Market Scenario</li>
    <li>Android Architecture</li>
    <li>Android Basic Building Blocks</li>
    <li>Activities and Basic UI Designing</li>
    <li>Material Design UI</li>
    <li>Adapters in Android</li>
    <li>Working With Fragments</li>
    <li>Notifications and its Types</li>
    <li>Intent (Explicit and Implicit), Intent Filters</li>
    <li>Services and Broadcast Receiver</li>
    <li>Multithreading in Android</li>
    <li>Camera, Bluetooth, Sensors, and Wi-Fi Implementation in Android</li>
    <li>Telephony Services</li>
    <li>Location Based Services with Google Maps</li>
    <li>Web Services and Web View</li>
    <li>SQLite Database</li>
    <li>Shared Preferences</li>
    <li>Firebase</li>
    <li>File I/O</li>
    <li>Content Provider in Android</li>


                  </p>
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
  </div></main>
<Footer/>
    </div>
  )
}
