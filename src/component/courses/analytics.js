import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function Analytics() {
  return (
    <div>
        <Header/>
      <main>
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50, backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Data Analytics Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33, width: '50%'}}>Data analytics is important because it helps businesses optimize their performances. Implementing it into the business model means companies can help reduce costs by identifying more efficient ways of doing business and by storing large amounts of data.
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Data Analytics Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>Power Bi</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                    <b>POWER BI</b>
                  </p><li>Introduction to Data warehouse</li>
                  <li>Data warehouse Tools</li>
                  <li>What is Power BI?</li>
                  <li>Power BI – Flow of Activity</li>
                  <li>Building Blocks of Power BI</li>
                  <li>Power BI – Primary Tools: Power Pivot, Power Query,</li>
                  <li>Power View, Power Map, Power Q&amp;A, Power BI Desktop</li>
                  <b>Power BI Desktop</b>
                  <li>Power BI Desktop Install</li>
                  <li>Data Sources and Connections</li>
                  <li>Connect to Data in Power BI Desktop</li>
                  <li>How to use Query Editor in Power BI</li>
                  <li>Advanced Data Changes and Transformation</li>
                  <li>Views in Power BI Desktop</li>
                  <li>Modeling Data - Manage Data Relationship</li>
                  <li>Create Calculated Columns, Optimize Data Models</li>
                  <b>Data Analysis Expression (DAX)</b>
                  <li>What is DAX</li>
                  <li>Data Types in DAX</li>
                  <li>Calculation Types</li>
                  <li>DAX Functions : Date and Time, Time IIntelligence</li>
                  <li>Information, Logical, Mathematical, Statistical, Text</li>
                  <li>Aggregate Measures in DAX</li>
                  <li>Table Relationships and DA</li>
                  <b>Data Visualization</b>
                  <li>Why Data Visualization</li>
                  <li>Practices for Data Visualization</li>
                  <li>Create Simple Visualization</li>
                  <li>Combination Charts</li>
                  <li>Create and Apply Format Slicers</li>
                  <li>Use funnel and Waterfall Charts</li>
                  <li>Create Basic Reports And Explorer on Reports</li>
                  <li>Interaction Between Visualization</li>
                  <li>Z-order of Report Elements</li>
                  <li>Create Table And Matrices</li>
                  <li>Build Bar, pie, Line And Scatter Charts from Loaded Data</li>
                  <b>Power Bi and Excel</b>
                  <li>Overview of Bi And Excel</li>
                  <li>Import data in Excel files</li>
                  <li>Explorer on Table Analysis Tools in Excel</li>
                  <li>Identifying Data Groups</li>
                  <b>Working with Power query and Power Map</b>
                  <li>Introduction to power query and power Map</li>
                  <li>Explorer on Discover and import Data</li>
                  <li>How to Transform, Merge and Filter Data</li>
                  <li>Grouping and Aggregating Data</li>
                  <li>Analysis with Power Map</li>
                  <li>How to create map Based Graph</li>
                  <li>Create Heat and Region Maps</li>
                  <li>Analyzing changes over Time</li>
                  <b>Custom Visualizations</b>
                  <li>What Are Custom Visuals</li>
                  <li>Downloading Custom Visuals</li>
                  <li>Importing Custom Visuals in Power BI Report</li>
                  <li>KPI Visuals</li>
                  <li>Data Binding in Power BI</li>
                  <b>Power Bi integrations page And Administration</b>
                  <li>Data Gateways</li>
                  <li>Content packs</li>
                  <li>Power BI Report Server</li>
                  <b>Power BI Q&amp;A</b>
                  <li>Power BI Q&amp;A</li>
                  <li>Dashboard</li>
                  <li>Dashboard vs Reports</li>
                  <li>Creating a Dashboard</li>
                  <li>Dashboard Tiles Pinning Tiles</li>
                  <li>Quick Insights with Power BI</li>
                  <p />
                </div>
              </div>
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
