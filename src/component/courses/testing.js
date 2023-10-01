import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Testing() {
  const topics =[
    <b>Introduction to Performance Testing
    </b>,
    "Overview of Performance Testing",
    "Performance Testing Concepts",
    "Why Use Performance Testing Tools?",
    "What is JMeter?",
    <b>Introduction to JMeter</b>,
    "JMeter Overview and Features",
    "Load Runner Vs JMeter",
    "Installing and Running JMeter in Windows OS, Mac",
    "Introducing the JMeter GUI",
    "Configuring JMeter",
    "How Does JMeter Perform Load Testing",
    <b>JMeter Test Plan</b>,
    "JMeter Test Plan",
    "What is a Test Plan?",
    "Elements of a Test Plan",
    "Thread Group",
    "Controllers",
    "Samplers",
    "Logic Controllers",
    "Listeners",
    "Timers",
    "Assertions",
    "Configuration Elements",
    "Pre-Processor Elements",
    "Post-Processor Elements",
    "Building a Test Plan",
    "Adding and Removing Elements",
    "Loading and Saving Elements",
    "Configuring Tree Elements",
    "Running a Test Plan",
    "Database Test Plan",
    "Adding Default HTTP Request Properties",
    "Adding Cookie Support",
    "Adding HTTP Requests",
    "Adding Post-Processor for Correlation",
    "Adding a Listener to View/Store the Test Results",
    "Saving the Test Plan",
    "Running the Test Plan",
    "FTP Test Plan",
    "Webservice Test Plan",
    "Monitor Test Plan",
    "Setup Tomcat Server",
    "Write JMeter Test Plan",
    "Add Thread Group",
    "HTTP Authorization Manager",
    "Add Sampler - HTTP Request",
    "Add Constant Timer",
    "Add Listener",
    "Run the Test Plan",
    "View Output",
<b>Listeners</b> ,   "What Are Listeners",
    "Different Types of Listeners",
    "Default Configuration",
    "CSV Log Format",
    "Saving Response Data",
    "Loading (Reading) Response Data",
    "Saving Listener GUI Data",
<b>JMeter Functions and User Variables</b>,    "Where Can Functions and Variables Be Used?",
    "Reference Variables and Functions",
    "Creating User Variables",
    "Using JMeter Functions",
    "Sharing Variables Between Threads and Thread Groups",
    <b>JMeter Test Executions</b>,
    "Create JMeter Test Plan",
    "Error Handling in JMeter",
    "JMeter Distributed Testing - Master Slave Setup",
    "JMeter API Testing"
  ]
  return (
    <div>
        <Header/>
   <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50,backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Software Testing Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance.
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
      <div style={{color: '#ffffff', fontSize: 20, fontWeight: 900}}><span>Call Trainer</span><br /><a  style={{color:"white"}}href="tel:+91 8976758080"><i className="fa-regular fa-phone" />
          +91 8976758080</a></div>
    </div>
  </div>
  <div className="tp-about__section" style={{paddingTop: 50, paddingBottom: 30}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div style={{background: '#f3f1ee', padding: 29}}>
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Software Testing</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Manual Testing</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p> 
                  </p><h3>Manual Testing Syllabus</h3>
                  <li>What is Software Testing?</li>
                  <li>Why is Software Testing Important?</li>
                  <li>Manual vs. Automated testing</li>
                  <li>What are the benefits of Software Testing?</li>
                  <li>Testing in Software Engineering</li>
                  <li>Types of Software Testing</li>
                  <li>Software Testing Life Cycle - STLC</li>
                  <li>Software Development Life Cycle - SDLC</li>
                  <br />
                  <b>Types of Testing</b>
                  <li>Manual Testing</li>
                  <li>Automation Testing</li>
                  <li>White Box Testing</li>
                  <li>Black Box Testing</li>
                  &nbsp;&nbsp;1.	Functional Test&nbsp;ing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1.	Unit Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.	Integration Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.3.	System Testin<br />
                  &nbsp;&nbsp;2.	Non-function Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.	Performance Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.	Load Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.	Stress Testing<br />&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.	Scalability Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d.	Stability Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2.	Usability Testing<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.3	Compatibility Testing<br />
                  <li>Grey Box Testing</li>
                  <li>Unit Testing</li>
                  <li>Integration Testing</li>
                  <li>System Testing</li>
                  <li>Smoke and Sanity Testing</li>
                  <li>What is Regression Testing?</li>
                  <br />
                  <b>TestCase Development</b>
                  <li>First Steps Test Case Development</li>
                  <li>Test Scenario</li>
                  <li>Test Case Specifications</li>
                  <li>Traceability Matrix</li>
                  <b>Testing Techniques</b>
                  <li>Equivalence Partitioning</li>
                  <li>Boundary Value Analysis</li>
                  <li>Use Case Testing</li>
                  <li>Testing Review</li>
                  <li>Error Guessing</li>
                  <br />
                  <b>Test Management &amp; Control</b>
                  <li>Test Estimation</li>
                  <li>Test Plan</li>
                  <br />
                  <b>Defects/ Bug</b>
                  <li>What is Defects or Bug</li>
                  <li>Defect/Bug Life Cycle</li>
                  <li>Defect Testing Tools</li>
                  <li>How to report Defect/ Bugs</li>
                  <br />
                  <b>Types of Testing</b>
                  <li>Positive Vs Negative Testing</li>
                  <li>Static Vs Dynamic Testing</li>
                  <li>GUI Testing</li>
                  <li>Top-down Testing</li>
                  <li>Bottom-up Testing</li>
                  <li>API Testing</li>
                  <li>User Acceptance Testing</li>
                  <li>Alpha and Beta Testing</li>
                  <li>Positive and Negative Testing</li>
                  <li>Static and Dynamic Testing</li>
                  <li>Usability Testing</li>
                  <li>Functional Testing</li>
                  <li>End to End Testing</li>
                  <li>Positive Vs Negative Testing</li>
                  <li>Static Vs Dynamic Testing</li>
                  <li>Adhoc Testing</li>
                  <li>Exploratory Testing</li>
                  <li>Compatibility Testing</li>
                  <li>Security Testing</li>
                  <li>Model Based Testing</li>
                  <li>Mutation Testing</li>
                  <li>Accessibility Testing</li>
                  <li>Stress Testing</li>
                  <li>Performance Testing</li>
                  <li>Load Testing</li>
                  <li>Penetration Testing</li>
                  <li>Web Application Testing</li>
                  <li>Complete Web Application Testing Checklist</li>
                  <li>Practical Tips and Tricks How to Create Test Data</li>
                  <br />
                  <b>Back End Testing ( SQL Command)</b>
                  <li>SQL Select</li>
                  <li>SQL Select Distinct</li>
                  <li>SQL Aliases</li>
                  <li>SQL Where</li>
                  <li>SQL And, Or, Not</li>
                  <li>SQL Order By</li>
                  <li>SQL Insert Into</li>
                  <li>SQL Update</li>
                  <li>SQL Delete</li>
                  <li>SQL Select Top</li>
                  <li>SQL Min and Max</li>
                  <li>SQL Count, Avg, Sum</li>
                  <li>SQL Like</li>
                  <li>SQL Wildcards</li>
                  <li>SQL Between</li>
                  <br />
                  <b>Joins</b>
                  <li>SQL Inner Join</li>
                  <li>SQL Left Join</li>
                  <li>SQL Right Join</li>
                  <li>SQL Full Join</li>
                  <br />
                  <b>Linux O/S</b>
                  <li>Linux Directory Commands Linux File Commands</li>
                  <li>Linux File Content Commands Linux User Commands</li>
                  <li>Linux Filter Commands Linux Utility Commands</li>
                  <p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}> Selenium Automation Testing</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p><b>Module-1: Overview on Automation &amp; Selenium</b>
                  </p><li>What is Software Testing?</li>
                  <li>Manual Testing &amp; its challenges</li>
                  <li>Challenges in Manual testing</li>
                  <li>Automation Testing beats Manual testing</li>
                  <li>Selenium as an automation testing tool</li>
                  <li>Advantages and Disadvantages in Selenium</li>
                  <li>Selenium V/s Other Tools</li>
                  <li>Selenium Suite of Tools</li>
                  <b>Module-2: Java Essentials for Selenium</b>
                  <li>Download and install Java</li>
                  <li>Setup Java Environment</li>
                  <li>Download and install Eclipse</li>
                  <li>How to use Eclipse</li>
                  <li>Basic Java Program</li>
                  <li>Compile and run a Java program</li>
                  <li>Understanding console output</li>
                  <li>Java Variables and Data Types</li>
                  <li>Java Operators</li>
                  <li>Conditional statements</li>
                  <li>Loops</li>
                  <li>Break and continue</li>
                  <li>Arrays</li>
                  <li>Single Dimensional array</li>
                  <li>Double Dimensional array</li>
                  <li>String Class</li>
                  <li>String methods</li>
                  <b>Module-3: Java OOPS Concepts</b>
                  <li>Classes and Objects</li>
                  <li>Java methods</li>
                  <li>Passing parameters to the methods</li>
                  <li>Call by value and call by reference</li>
                  <li>Java Constructor</li>
                  <li>Method Overloading</li>
                  <li>Constructor Overloading</li>
                  <li>this keyword</li>
                  <li>Static variables and methods</li>
                  <li>Java Inheritance</li>
                  <li>Method Overriding</li>
                  <li>Exception Handling</li>
                  <b>Module-4: Selenium WebDriver</b>
                  <li>Introduction to WebDriver and architecture</li>
                  <li>WebDriver features and drawbacks</li>
                  <li>Selenium Webdriver Jars download and configure</li>
                  <li>Create WebDriver Project in Eclipse</li>
                  <li>Create WebDriver test case</li>
                  <li>Execute test case on multiple browsers</li>
                  <li>Locators in Selenium</li>
                  <li>Types of Locators - name, id,cssSelector,class,link &amp; Xpath</li>
                  <li>Capturing Xpath</li>
                  <li>Difference Between Absolute And Relative Xpath</li>
                  <li>Writing Xpath</li>
                  <li>Built-in functions in XPath</li>
                  <li>Handling Dynamic elements using Xpath</li>
                  <b>WebDriver commands</b>
                  <b>Browser commands</b>
                  <li>Close and Quit</li>
                  <b>Get commands</b>
                  <li>get</li>
                  <li>getTitle</li>
                  <li>PageSource</li>
                  <li>getCurrentURL</li>
                  <b>Navigation commands</b>
                  <li>navigate.to</li>
                  <li>navigate.back()</li>
                  <li>navigate.forward</li>
                  <li>navigate.refresh</li>
                  <b>Conditional commands</b>
                  <li>isDisplayed</li>
                  <li>isEnabled</li>
                  <li>isSelected</li>
                  <b>Waits</b>
                  <li>Implicit, Explicit Waits</li>
                  <b>Handling Web Elements -Part1</b>
                  <li>Textbox/Input box</li>
                  <li>Web Button</li>
                  <li>Radio Button</li>
                  <li>Checkbox</li>
                  <li>Dropdown box/Combo box</li>
                  <li>Links</li>
                  <b>Handling Web Elements -Part2</b>
                  <li>Alerts/Popups</li>
                  <li>Frames/Iframes</li>
                  <li>Browser windows</li>
                  <li>Web Tables</li>
                  <b>Handling Web Elements -Part3 (Actions class)</b>
                  <li>Mouse Hover</li>
                  <li>Mouse double click</li>
                  <li>Mouse right click</li>
                  <li>Drag and Drop</li>
                  <li>Upload Files</li>
                  <b>Handling cookies</b>
                  <b>Module-5: Data Driven Testing using Excel</b>
                  <li>What is data driven testing?</li>
                  <li>Data Driven testing with Excel File</li>
                  <b>Module-6: TestNG Framework</b>
                  <li>TestNg Introduction and Advantages</li>
                  <li>Configuring TestNg in Project/Eclipse</li>
                  <li>How to write TestNG Test case</li>
                  <li>TestNg annotations</li>
                  <li>Understanding testng.xml</li>
                  <li>TestNG Report</li>
                  <li>Prioritizing tests</li>
                  <li>Skipping tests</li>
                  <li>Capturing screenshots</li>
                  <b>Module-7: Advanced Concepts</b>
                  <li>Page Object Model - Page Factory</li>
                  <b>Module-8: Maven integration with Selenium</b>
                  <li>What is Maven and Why Maven?</li>
                  <li>Installing/Configuring Maven</li>
                  <li>Creating Maven Project</li>
                  <li>What is POM.xml?</li>
                  <li>Adding Dependencies to POM.xml</li>
                  <b>Module-9: Hybrid Driven Framework implementation</b>
                  <li>What is Framework?</li>
                  <li>Types of Frameworks</li>
                  <li>Prerequisites for designing frameworks</li>
                  <li>Implementation of Hybrid Driven Framework</li>
                  <li>Creating Maven Project</li>
                  <li>Update pom.xml with dependencies</li>
                  <li>Creating page objects and Object repository</li>
                  <li>Setting up configuration files</li>
                  <li>Creating automation test scripts</li>
                  <li>Creating data driven test scripts</li>
                  <li>Execute test scripts using TestNG XML File</li>
                  <b>Module-10: Continuous Integration (CI) Maven, Jenkins &amp; GIT</b>
                  <li>What is Continues Integration?</li>
                  <li>Continuous Integration Tools</li>
                  <li>Download and install Jenkins</li>
                  <li>Maven integration with Jenkins</li>
                  <li>Run selenium test scripts through Jenkins</li>
                  <li>Working with GITHUB</li>
                  <li>Upload project to GITHUB</li><p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{fontWeight: 800, fontSize: 18}}>UFT</button>                     
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" style={{fontWeight: 800, fontSize: 18}}>Appium</button>                     
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                 
        <b>Introduction to Mobile Automation</b>
        
          <li>Mobile Application Architecture</li>
          <li>Mobile Native Apps, WebApps, and Hybrid Apps</li>
          <li>Mobile Application Test Tools</li>
          <li>Why to choose Appium over other tools</li>
          <li>What all can be tested with Appium?</li>
          <li>Web Driver Wire protocol</li>
          <li>UI Automaton & iOS-driver</li>
          <li>Drawbacks and Limitations</li>
        
        <b>Mobile Applications Test Types</b>
        
          <li>Emulators & Simulators</li>
          <li>Mobile Testing Types</li>
          <li>UI Testing</li>
          <li>Functional Testing</li>
          <li>Regression Testing</li>
          <li>Interruption Testing</li>
          <li>Installation/ Upgrade Testing</li>
          <li>Compatibility Testing</li>
          <li>Network Testing</li>
          <li>Usability Testing</li>
          <li>Localization Testing</li>
          <li>Performance Testing</li>
        
        <b>Appium Installation On Android And iOS</b>
        
          <li>Android Platform</li>
          <li>iOS Platform</li>
        
        <b>Web Application and Mobile Application Automation</b>
        
          <li>Selenium Web Driver Introduction</li>
          <li>Selenium Web Driver Architecture</li>
          <li>Selenium Web Driver Configuration</li>
          <li>Element Locators – ID, Name, Xpath, CSS, etc</li>
          <li>Different Mobile Platforms (iOS, Android, Windows Phone)</li>
          <li>Real Mobile Device/ Emulators and Simulators</li>
          <li>Introduction to Appium Tool, Features, Advantages, and Limitations</li>
        
        <b>Appium Architecture</b>
        
          <li>Appium Javadocs and Important Classes/Interfaces Defining Architecture</li>
          <li>WebDriver, AppiumDriver, AndroidDriver, IOSDriver</li>
          <li>MobileElement, AndroidElement, IOSElement Classes</li>
          <li>Can One Appium script work on Both IOS and Android Apps</li>
          <li>UiAutomator2 and Espresso Driver</li>
        
      
        <b>Appium Inspector</b>
        
          <li>What is the Appium Inspector?</li>
          <li>Record and Play using Appium Inspector</li>
          <li>Locating elements with the help of Appium Inspector</li>
          <li>Locating elements with the help of UIAutomatorViewer</li>
          <li>Testing Touch Actions for Android & iOS</li>
          <li>Build scripts to simulate events like home, backspace, delete</li>
          <li>Implement handlers for Drag and drop elements</li>
          <li>Multi-Touch Actions</li>
          <li>Multiple gestures</li>
          <li>Long press and delete elements</li>
          <li>Pinch, Tap, Hold events</li>
        
      
        <b>Mobile Native App Test</b>
        
          <li>Find Activity and package name</li>
          <li>Define Test App path to test</li>
          <li>Run Test on Real Device</li>
          <li>Run test on Emulator</li>
          <li>Run test on Cloud</li>
          <li>Check test result report</li>
          <li>Save .APK file and Decompile for source code</li>
        
     
        <b>Mobile Hybrid App Test</b>
        
          <li>Find Activity and package name</li>
          <li>Define Test App path to test</li>
          <li>Test on application Native view</li>
          <li>Test on Web view</li>
          <li>Write End to End test</li>
          <li>Check test result report</li>
        
      
        <b>Mobile Web App Test</b>
        
          <li>Setup Appium dependencies for Chrome browser</li>
          <li>Setting chrome port</li>
          <li>Write Test script and run</li>
          <li>Check execution result report</li>
        
    
        <b>Design Mobile Automation Framework</b>
        
          <li>Overview and implementation of page object model framework</li>
          <li>Overview and implementation of PageFactory</li>
          <li>Overview and implementation of Fluent interface design pattern</li>
          <li>Methods Chaining</li>
          <li>Test data design</li>
          <li>Reporting</li>
        
    
    
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" style={{fontWeight: 800, fontSize: 18}}>J-METER</button>                     
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                  
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix" style={{fontWeight: 800, fontSize: 18}}>Postman</button>                     
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p />
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
  </div>
</main>

      <Footer/>
    </div>
  )
}
