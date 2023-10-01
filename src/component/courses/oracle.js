import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Oracle() {
  return (
    <div>
        <Header/>
    <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50, backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Oracle Courses</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Oracle courses are designed to teach individuals how to manage and use Oracle's database management system. These courses cover a range of topics such as database administration, data warehousing, business intelligence, and application development.</div>
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Oracle Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>PL SQL Course Syllabus</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p> 
                    <b>Introduction</b>
                  </p><li>Introduction to PL/SQL</li>
                  <li>PL/SQL Execution Environment</li><li>PL/SQL Development Environment</li><li> Introduction to PL/SQL Procedures</li><li> Introduction to PL/SQL Functions</li><li> Introduction to PL/SQL Packages</li><li> Introduction to PL/SQL Triggers</li><li> Coding PL/SQL</li>
                  <li>The correct structure of a PL/SQL program block</li><li> Declare and initialize a variable</li>
                  <li>Declare and initialize data types and Boolean variables Summary</li>
                  <b>Decision Making</b>
                  <li>IF Statement</li>
                  <li>IF-ELSIF Statements</li><li> Summary</li>
                  <b>Loops</b>
                  <li>Implement suitable control structures in PL/SQL</li>
                  <li>Implement a suitable loop construct in PL/SQL for a given scenario</li><li> Characteristics of FOR and nested loops in PL/SQL</li><li> Implementation of WHILE LOOP</li>
                  <li>Implementation of DO WHILE LOOP</li><li> EXIT Keyword</li>
                  <li>GOTO Statement</li><li> Summary</li>
                  <b>Sub Blocks</b>
                  <li>What is Sub Block?</li>
                  <li>Sub Blocks implementation</li><li> Modular Programming</li>
                  <li>Create and populate a user-defined record in PL/SQL</li>
                  <li>Create a record using the %ROWTYPE attribute and use it to insert and update a row</li><li> Create a record and use it to update a table</li>
                  <li>Summary</li>
                  <b>Cursors</b>
                  <li>What is Cursor?</li><li> Cursor Types</li><li> Implicit Cursor</li>
                  <li>Use explicit cursors to retrieve data </li><li>Cursor attributes</li>
                  <li>For Loop Cursors</li>
                  <li>Advantages of For Loop Cursors</li><li> Default values in cursors</li>
                  <li>Use parameters to make cursors reusable in a given scenario</li><li> Use an explicit cursor to retrieve and update data</li>
                  <li>Summary</li>
                  <b>Exceptions</b>
                  <li>What is Exception? </li><li>Exception Section</li>
                  <li>About The Exception Section</li><li> Isolating the Specific Exception</li>
                  <li>Outline how each of the PL/SQL exception types are raised and handled </li><li>Trap predefined and non-predefined exceptions in PL/SQL</li>
                  <li>Trap user-defined exceptions and identify error codes and messages</li>
                  <li>Use nested blocks and the RAISE_APPLICATION_ERROR procedure when handling</li><li> Exceptions in PL/SQL</li>
                  <li>Handle exceptions in PL/SQL</li><li> Pragma Exception_Init</li><li> SQLcode &amp; SQL Learn</li><li> Example SQL%Rowcount</li>
                  <li>Summary</li>
                  <b>Stored Procedures</b>
                  <li>Create, remove, and view PL/SQL stored procedures</li>
                  <li>Use IN, OUT, and IN OUT parameter modes to pass values to and from stored</li><li> procedures and programs</li>
                  <li>Outline how to view values returned by OUT parameters</li><li> Create stored procedures with suitable parameters</li><li> Assign values to multiple parameters</li>
                  <li>Handle exceptions in stored procedures </li><li>Summary</li>
                  <b>Stored Functions</b>
                  <li>Create a stored function</li><li> Execute a stored function</li>
                  <li>Call, remove, and view stored functions in PL/SQL</li><li> Summary</li>
                  <b>Managing Subprograms</b>
                  <li>Definer Rights</li><li> Invoker rights</li>
                  <li>List all Procedures and Functions</li><li> Summary</li>
                  <b>Packages</b>
                  <li>Identify features of PL/SQL packages</li>
                  <li>Sequence steps for developing PL/SQL packages</li><li> Identify the syntax for creating a PL/SQL package</li><li> Identify tasks involved in managing PL/SQL packages</li>
                  <li>Identify features of the overloaded subprograms contained in PL/SQL packages</li><li> Identify features of forward referencing in PL/SQL packages</li>
                  <li>Summary</li>
                  <b>Managing LOBs</b>
                  <li>Identify features of the DBMS_LOB package</li>
                  <li>Identify the code to work with Large Object (LOB) values</li>
                  <li>Identify methods of selecting Character Large Object (CLOB) values</li><li> Identify features of temporary Large Objects (LOBs)</li>
                  <li>Summary</li>
                  <b>Triggers</b>
                  <li>Identify features of triggers</li>
                  <li>Identify the code to create a Data Manipulation Language (DML) trigger</li><li> Identify the code to create a Data Manipulation Language (DML) row</li><li> Trigger Match the options for managing triggers with their descriptions</li>
                  <li>Identify guidelines for testing triggers</li>
                  <li>Identify the benefits of triggers in different business application scenarios</li><li> Identify the syntax for creating triggers for DDL and system events</li><li> Summary</li>
                  <b>Advanced Triggers</b>
                  <li>Creating Trigger on DDL Statements</li><li> LOGON &amp; LOGOFF Trigger example</li><li> CALL Statement in Trigger </li><li>Advantages of trigger</li>
                  <li>Conditional Security </li><li>Summary</li>
                  <p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>Oracle SQL Content Syllabus</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p><b>Introduction</b>
                  </p><li>Relational and Object Relational Database Management System</li><li> Relational Database Concept</li>
                  <li>Definition of a Relational Database</li><li> Entity Relationship Model</li>
                  <li>Entity Relationship Modeling Conventions </li><li>Relational Database Terminology </li><li>Relational Database Properties </li><li>Communicating with a RDBMS Using SQL </li><li>SQL Statements</li><li>Writing Basic SQL SELECT Statements </li><li>Capabilities of SQL SELECT Statements</li><li> Basic SELECT Statement</li>
                  <li>Selecting All Columns</li><li> Selecting Specific Columns </li><li>Writing SQL Statements </li><li>Column Heading Defaults</li><li> Arithmetic Expressions </li><li>Using Arithmetic Operators</li><li> Operator Precedence</li><li> Using Parentheses</li><li> Defining a Null Value</li>
                  <li>Null Values in Arithmetic Expressions</li><li> Defining a Column Alias</li>
                  <li>Duplicate rows</li>
                  <li>Displaying Table Structure </li><li>Summary</li>
                  <b>Restricting and Sorting Data</b><li> Limiting Rows Using a Selection</li><li> Using the WHERE Clause</li><li> Comparison Conditions</li>
                  <li>Using the BETWEEN Condition </li><li>Using the IN Condition</li>
                  <li>Using the LIKE Condition </li><li>Using the NULL Conditions</li><li> Logical Conditions</li>
                  <li>Using the AND Operator</li><li> Using the OR Operator</li><li> Using the NOT Operator </li><li>Rules of Precedence </li><li>ORDER BY Clause</li>
                  <li>Sorting in Descending Order</li><li> Sorting by Multiple Columns</li><li> Summary</li>
                  <b>Single-Row Functions</b>
                  <li>SQL Functions</li>
                  <li>Two Types of SQL Functions</li><li> Single-Row Functions </li><li>Character Functions</li>
                  <li>Case Manipulation Functions</li><li> Character-Manipulation Functions</li><li> Number Functions</li>
                  <li>Using the ROUND Function</li><li> Using the TRUNC Function </li><li>Using the MOD Function Working with Dates</li>
                  <li>Arithmetic Operators with Dates Date Functions</li>
                  <li>General Functions</li><li> NVL Function</li>
                  <li>Using the NVL2 Function</li>
                  <li>Using the COALESCE Function </li><li>The CASE Expression</li>
                  <li>Using the CASE Expression </li><li>The DECODE Function </li><li>Summary</li>
                  <b>Aggregating Data Using Group Functions</b>
                  <li>What Are Group Functions? Types of Group Functions Group Functions Syntax</li>
                  <li>Using the AVG and SUM Functions Using the MIN and MAX Functions Using the COUNT Function</li>
                  <li>Using the DISTINCT Keyword Group Functions and Null Values</li>
                  <li>Using the NVL Function with Group Functions</li>
                  <li>Creating Groups of Data: The GROUP BY Clause Syntax Using the GROUP BY Clause on Multiple Columns Excluding Group Results: The HAVING Clause</li>
                  <li>Nesting Group Functions Summary</li>
                  <b>Displaying Data from Multiple Tables (Joins)</b>
                  <li>Obtaining Data from Multiple Tables Cartesian Products</li>
                  <li>Generating a Cartesian Product Types of Joins</li>
                  <li>Joining Tables Using Oracle Syntax What is Equi Join?</li>
                  <li>Retrieving Records with Equijoins</li>
                  <li>Additional Search Conditions Using the AND Operator Qualifying Ambiguous Column Names</li>
                  <b>Using Table Aliases</b>
                  <li>Joining More than Two Tables Non-Equijoins</li>
                  <li>Retrieving Records with Non-Equijoins Outer Joins</li>
                  <li>Outer Joins Syntax Using Outer Joins Self Joins</li>
                  <li>Creating Joins with the USING Clause Retrieving Records with the USING Clause Creating Joins with the ON Clause Retrieving Records with the ON Clause INNER Vs OUTER JOIN</li>
                  <li>Summary</li>
                  <b>Subqueries</b>
                  <li>Using a Subquery to Solve a Problem Subquery Syntax</li>
                  <li>Guidelines for Using Subqueries Types of Subqueries</li>
                  <li>Single-Row Subqueries Executing Single-Row Subqueries</li>
                  <li>Using Group Functions in a Subquery Multiple-Row Subqueries</li>
                  <li>Using the ANY Operator in Multiple-Row Subqueries Using the ALL Operator in Multiple-Row Subqueries Null Values in a Subquery</li>
                  <li>Summary</li>
                  <b>Manipulating Data</b>
                  <li>Data Manipulation Language Adding a New Row to a Table The INSERT Statement Syntax Inserting New Rows</li>
                  <li>Inserting Rows with Null Values Copying Rows from Another Table Changing Data in a Table</li>
                  <li>The UPDATE Statement Syntax Updating Rows in a Table</li>
                  <li>Updating Two Columns with a Subquery DELETE statement</li>
                  <li>Deleting Rows from a Table</li>
                  <li>Deleting Rows Based on another Table Using a Subquery in an INSERT Statement The MERGE Statement</li>
                  <li>The MERGE Statement Syntax Database Transactions</li>
                  <li>Advantages of COMMIT and ROLLBACK Statements</li>
                  <li>Controlling Transactions Rolling Back Changes</li>
                  <li>Implicit Transaction Processing</li>
                  <li>State of the Data Before COMMIT or ROLLBACK State of the Data after COMMIT</li>
                  <li>Committing Data</li>
                  <li>State of the Data after ROLLBACK Locking</li>
                  <li>Implicit Locking Summary</li>
                  <b>Creating and Managing Tables</b>
                  <li>Database Objects Naming Rules</li>
                  <li>The CREATE TABLE Statement Referencing Another User's Tables The DEFAULT Option</li>
                  <li>Creating Tables</li>
                  <li>Tables in the Oracle Database Querying the Data Dictionary</li>
                  <li>Creating a Table by Using a Subquery The ALTER TABLE Statement</li>
                  <li>Adding a Column Modifying a Column Dropping a Column</li>
                  <li>The SET UNUSED Option Dropping a Table</li>
                  <li>Changing the Name of an Object Truncating a Table</li>
                  <li>Summary</li>
                  <b>Oracle Date Time Functions	Date Time Data Types TIMESTAMP Data Type</b>
                  <li>TIMESTAMP WITH TIME ZONE Data Type TIMESTAMP WITH LOCAL TIME Data Type</li>
                  <li>Summary</li>
                  <b>Pseudocolumns</b>
                  <li>What is Pseudocolumns ? Rownum</li>
                  <li>Rownum in camparison Summery</li>
                  <b>Including Constraints</b>
                  <li>Objectives</li>
                  <li>What are Constraints? Constraint Guidelines Defining Constraints</li>
                  <li>The NOT NULL Constraint The UNIQUE Constraint</li>
                  <li>The PRIMARY KEY Constraint The FOREIGN KEY Constraint</li>
                  <li>FOREIGN KEY Constraint Keywords The CHECK Constraint</li>
                  <li>Adding a Constraint Syntax Dropping a Constraint Disabling Constraints Enabling Constraints Viewing Constraints Summary</li>
                  <b>Sequence</b>
                  <li>What is a Sequence?</li>
                  <li>The CREATE SEQUENCE Statement Syntax Creating a Sequence</li>
                  <li>Confirming Sequences</li>
                  <li>NEXTVAL and CURRVAL Pseudocolumns Using a Sequence</li>
                  <li>Modifying a Sequence</li>
                  <li>Guidelines for Modifying a Sequence Removing a Sequence</li>
                  <li>Summary</li>
                  <b>Creating Views Database Objects What is a View? Why to use Views?</b>
                  <li>Simple Views and Complex Views Creating a View</li>
                  <li>Retrieving Data from a View Querying a View</li>
                  <li>Modifying a View Creating a Complex View</li>
                  <li>Rules for Performing DML Operations on a View Using the WITH CHECK OPTION Clause Denying DML Operations (With read only Option) Removing a View</li>
                  <li>Inline Views Summary</li>
                  <b>Index</b>
                  <li>What is an Index?</li>
                  <li>How Are Indexes Created? Creating an Index</li>
                  <li>When to Create an Index When Not to Create an Index Confirming Indexes Removing an Index Summary</li>
                  <b>Controlling User Access</b>
                  <li>Objectives</li>
                  <li>Controlling User Access Privileges</li>
                  <li>System Privileges Creating Users</li>
                  <li>User System Privileges Granting System Privileges What is a Role?</li>
                  <li>Creating and Granting Privileges to a Role Changing Your Password</li>
                  <li>Object Privileges Granting Object Privileges</li>
                  <li>Using the WITH GRANT OPTION and PUBLIC Keywords How to Revoke Object Privileges</li>
                  <li>Revoking Object Privileges Summary</li>
                  <b>Synonyms</b>
                  <li>What is Synonyms?</li>
                  <li>How Are Synonyms Created? Removing Synonyms Summery</li><p />
                </div>
              </div>
            </div>
            {/* <div class="accordion-item">
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
  </div>
</main>

      <Footer/>
    </div>
  )
}
