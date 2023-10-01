import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Database() {
  return (
    <div>
        <Header/>
  <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50,backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Database Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Training Databases are storage systems comprised of information regarding training, certifications, and licensures for companies as a way to stay up-to-date on training information.</div>
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Database Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>SQL Server Syllabus</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                  </p><h3>Introducing SQL Server</h3>
                  <li>What's is SQL Server?</li>
                  <li>SQL Server Editions</li>
                  <li>Installing SQL Server</li>
                  <br />
                  <b>Basics of Database Design</b>
                  <li>Introducing SQL Server Management Studio</li>
                  <li>Creating a Database</li>
                  <li>Adding Tables</li>
                  <li>Building Relations</li>
                  <li>Primary key and Foreign key</li>
                  <li>Creating Indexes</li>
                  <li>Concept of Normalization</li>
                  <li>Concept of Denormalization</li>
                  <br />
                  <b>T-SQL Basics</b>
                  <li>What is T-SQL?</li>
                  <li>Syntax Conventions</li>
                  <li>Introducing AdventureWorks</li>
                  <li>Executing SQL Statements</li>
                  <li>Identifiers</li>
                  <li>Creating Data Types</li>
                  <li>Operators</li>
                  <li>Variables</li>
                  <li>Functions</li>
                  <br />
                  <b>SQL Queries</b>
                  <li>SQL Syntax</li>
                  <li>SELECT Clause</li>
                  <li>FROM Clause</li>
                  <li>SQL Aliases</li>
                  <li>Select Distinct</li>
                  <li>WHERE Clause</li>
                  <li>ORDER BY Clause</li>
                  <li>SQL Like and Text Search</li>
                  <li>SQL In and NOT In</li>
                  <li>SQL Between</li>
                  <li>SQL AND, OR , NOT</li>
                  <li>Using GROUP BY and HAVING</li>
                  <li>Using TOP N</li>
                  <li>UNION Queries</li>
                  <br />
                  <b>Action Queries</b>
                  <li>SELECT INTO queries</li>
                  <li>DELETE queries</li>
                  <li>TRUNCATE TABLE queries</li>
                  <li>INSERT queries</li>
                  <li>UPDATE queries</li>
                  <li>JOINS</li>
                  <li>Inner Join</li>
                  <li>Right Join</li>
                  <li>Left Join</li>
                  <li>Full Join</li>
                  <br />
                  <b>Functions</b>
                  <li>What is Functions</li>
                  <li>Type of Functions</li>
                  <li>Syntax of Functions</li>
                  <li>How to create Functions</li>
                  <li>Execute Functions</li>
                  <li>Rowset  Functions</li>
                  <li>Rank function</li>
                  <li>Dense_rank</li>
                  <br />
                  <b>Triggers</b>
                  <li>Creating Triggers</li>
                  <li>Altering Triggers</li>
                  <li>Using the Inserted and Deleted Tables</li>
                  <li>Checking Updated Columns</li>
                  <br />
                  <b>XML and SQL Server</b>
                  <li>What is XML</li>
                  <li>Convert normal table data into XML data</li>
                  <li>XML Columns and Indexes</li>
                  <li>Querying and Modifying XML Data</li>
                  <li>Using OPENXML</li>
                  <br />
                  <b>Advanced SQL</b>
                  <li>Stored Procedures</li>
                  <li>Views</li>
                  <li>Transactions</li>
                  <li>Profiler</li>
                  <li>Sub Query</li>
                  <li>Cursors</li>
                  <li>Error handling</li>
                  <li>Indexes</li>
                  <li>Execution Plans</li>
                  <br />
                  <b>DataBase Backup</b>
                  <li>How to take DB backup</li>
                  <li>How to restore BD</li>
                  <li>How to import data from Excel</li>
                  <br />
                  <b>SMO and RMO Programming</b>
                  <li>Retrieving Server Information</li>
                  <li>Working With Database Objects</li>
                  <li>Generating Scripts</li>
                  <li>Viewing and Modifying Server Configuration</li>
                  <p />
                </div>
              </div>
            </div>
            <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>My Sql</button>									
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                <p>
                  <b>What is my sql</b>
                  <li>Client/Server Concept</li>
                  <li>Database and Database Objects</li> <br/>
<b>Data Definition Using Sql</b>
<li>Database</li>
<li>Data Types</li>
<li>Tables</li>
<li>Constraints and Indexes</li>
<li>Index</li>
<br/>
<b>Basic Data Manipulation using SQL</b>
<li>Recurring Sql Constructs</li>
<li>Adding Data</li>
<li>Modifying Data</li>
<li>Removing Data</li>
<li>Searching Data</li>
<br/>
<b>Advance Data Manipulation using SQL</b>
<li>Expressions</li>
<li>Grouping and Aggregate Functions</li>
<li>Joining Tables</li>
<br/>
<b>Transaction</b>
<li>Transaction Concepts</li>
<li>Sql for Working with Transaction</li> <br/>
<b>Import & Export</b>
<li>Tools for import/Exports</li>
<li>Sql for import/Exports</li>

                </p>
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
  </div>
</main>

      <Footer/>
    </div>
  )
}
