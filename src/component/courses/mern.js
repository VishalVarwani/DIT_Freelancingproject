import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Mern() {
  return (
    <div>
        <Header/>
      <main>
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50, backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Mern Stack Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>The MERN stack refers to a set of tools used to build powerful web applications from end to end. It includes MongoDB, Express, React, and Node. js, and is useful in many development roles.
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Merns Stack Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Mern Stack Training</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                    <b>Node JS</b>
                  </p><li>Getting started with Node js</li>
                  <li>Node Packages Manager</li>
                  <li>Modules</li>
                  <li>Asynchronous Programming</li>
                  <li>Callbacks</li>
                  <li>Events and Event Loop</li>
                  <li>Stream and Buffers</li>
                  <li>Connecting Node.js Database</li>
                  <li>Web Socket React JS</li>
                  <li>React Home</li>
                  <li>React Setup</li>
                  <li>React Getting Started</li>
                  <li>React ES6</li>
                  <li>React Render HTML</li>
                  <li>React JSX</li>
                  <li>React Components</li>
                  <li>React Class</li>
                  <li>React Props</li>
                  <li>React Events</li>
                  <li>React Conditional</li>
                  <li>React Lists</li>
                  <li>React Forms</li>
                  <li>React Router</li>
                  <li>React Memo</li>
                  <li>React CSS Styling</li>
                  <li>React Hooks</li>
                  <b>What is a Hook?</b>
                  <li>React useState Hook</li>
                  <li>React useEffect Hook</li>
                  <li>React useContext</li>
                  <li>React useRef</li>
                  <li>React useReducer</li>
                  <li>React useCallback</li>
                  <li>React useMemo</li>
                  <b>Express. Js</b>
                  <li>Mvc Pattern</li>
                  <li>Introduction to Express</li>
                  <li>Routings</li>
                  <li>HTTP Interaction</li>
                  <li>Handlings From Data</li>
                  <li>Handling Query parameters</li>
                  <li>Cookies and Sessions</li>
                  <li>User Authentication</li>
                  <li>Error Handling</li>
                  <li>Creating and Consuming Restful Services</li>
                  <li>Using Templates</li>
                  <b>Mango DB</b>
                  <li>Concepts</li>
                  <li>Scaling</li>
                  <li>Sql and complex Transaction</li>
                  <li>Documents Overview</li>
                  <li>Installing Mango DB(Windows)</li>
                  <li>JSON</li>
                  <li>Dynamic Schema</li>
                  <li>Cursor introduction</li>
                  <li>Query Languages-Basic Concepts</li>
                  <li>Query Languages-Projections</li>
                  <li>Query Languages-Advantages of a Dynamic Schema</li>
                  <li>Shell: Queries</li>
                  <li>Sorting</li>
                  <li>Query Languages-cursor</li>
                  <li>User Authentication</li>
                  <li>Error Handlings</li>
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
