import React from 'react'
import Header from '../header'
import Footer from '../footer'

export default function Cloud() {
  return (
    <div>
        <Header/>
    <main>
  {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
*/}
  <style dangerouslySetInnerHTML={{__html: "\n.txtwidth\n{\n\twidth:50%;\n}\n@media screen and (min-width: 680px) {\n  .txtwidth {\n    width:100%;\n  }\n}\n.service-sidebar-area .service-card {\n    margin-bottom: 30px;\n    background-color: #ffffff;\n    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);\n}\n.service-sidebar-area .service-details-title {\n    background-color: #2c79ff;\n    color: #ffffff;\n    padding: 15px 20px;\n    margin-bottom: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.service-sidebar-area .service-list ul li {\n    border-bottom: 1px dashed #eeeeee;\n    padding: 15px 20px;\n    font-weight: 500;\n    \n    transition: all 0.5s;\n}\n.service-sidebar-area .service-list ul li i {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    background-color: #2c79ff;\n    border-radius: 50%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: center;\n    transition: all 0.5s;\n    position: relative;\n    top: -3px;\n}\n.bx {\n    font-family: boxicons!important;\n    font-weight: 400;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    display: inline-block;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n}\n\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n" }} />
  <div className="breadcrumb__area include-bg pt-200 pb-150" style={{paddingTop: 50, paddingBottom: 50, backgroundImage:"url(assets/img/breadcrumb/computer1.jpg)"}} data-background="assets/img/breadcrumb/computer1.jpg">
    <div className="container">
      <div className="row">
        <div className="txtwidth" style={{fontSize: 27, fontWeight: 800, color: 'white', paddingBottom: 33, textDecoration: 'underline'}}>Cloud Computing Training</div>
        <div style={{fontSize: 18, color: 'white', paddingBottom: 33}}>Industrial cloud computing is a broad term for cloud technology used in asset-intensive industries such as manufacturing, telecommunications, mining, construction, waste and water management, and energy generation/distribution.
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
            <p style={{borderBottom: '2px solid red', fontSize: 30, fontWeight: 700, paddingBottom: 25}}>Cloud Computing Training</p>
          </div>
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontWeight: 800, fontSize: 18}}>1. DevOps Cloud Computing</button>									
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                    <b>Linux Basics</b>
                  </p><li>Introduction</li>
                  <li>Linux Directory Commands</li>
                  <li>Linux File Commands</li>
                  <li>Linux File Content Commands</li>
                  <li>Linux User Commands</li>
                  <li>Linux Filter Commands</li>
                  <li>Linux Utility Commands</li>
                  <li>Unix/Linux Essentials</li>
                  <li>Handling files</li>
                  <li>Handling errors</li>
                  <li>Log management</li>
                  <li>Package management</li>
                  <b>Bash Scripting</b>
                  <li>Introduction</li>
                  <li>Definition of Bash scripting</li>
                  <li>Advantages of Bash scripting</li>
                  <li>Overview of Bash shell and command line interface</li>
                  <li>How to Get Started with Bash Scripting</li>
                  <li>Bash Files - .bash_profile</li>
                  <li>Bash Files - .bashrc</li>
                  <li>Bash Files - .bash_history</li>
                  <li>Bash Files - .bash_logout</li>
                  <li>How to Run Bash Commands from the Command Line?</li>
                  <li>How to Create and Execute Bash Scripts</li>
                  <li>Bash Scripting Basics</li>
                  <li>Comments in bash scripting</li>
                  <li>Variables and data types in Bash</li>
                  <li>Global and Local Environment Variables</li>
                  <li>Input and output in Bash scripts</li>
                  <li>Basic Bash commands (echo, read, etc.)</li>
                  <li>Conditional statements (if/else)</li>
                  <li>Looping and Branching in Bash</li>
                  <li>While loop</li>
                  <li>For loop</li>
                  <li>Case statements</li>
                  <li>Functions</li>
                  <li>Simple Functions</li>
                  <li>Structure of Functions in a Script</li>
                  <li>Variable Scope in Functions</li>
                  <li>Functions with Parameters</li>
                  <li>Nested Functions</li>
                  <li>How to Debug and Troubleshoot Bash Scripts</li>
                  <b>Maven</b>
                  <li>Introduction to Maven</li>
                  <li>Install Maven</li>
                  <li>Running Maven</li>
                  <li>Maven Repository</li>
                  <ol>
                    <li> Local Repository</li>
                    <li>Central Repository</li>
                    <li> Remote Repository</li>
                  </ol>
                  <li>Eclipse IDE Integration</li>
                  <li>Understanding Archetypes </li>
                  <li>Maven Pom.xml</li>
                  <li>Maven Dependencies, </li>
                  <li>Finding Dependencies</li>
                  <li>Maven Build Lifecycle</li>
                  <li>Maven Repositories</li>
                  <li>Maven configuration files</li>
                  <li>Maven Plugins and Goals</li>
                  <li>Creating Java projects using Maven</li>
                  <li>Build and Deployment Automation</li>
                  <b>Jenkins</b>
                  <li>Introduction to Jenkins</li>
                  <li>Jenkins – Overview</li>
                  <li>Jenkins - Installation </li>
                  <li>Configuring Jenkins</li>
                  <li>CI/CD pipeline</li>
                  <ol>
                    <li>Stages of a CI/CD pipeline</li>
                    <li>CI/CD pipeline Best Practices</li>
                    <li>Advantages of CI/CD pipelines</li>
                  </ol>
                  <li>The Dashboard</li>
                  <li>User Management and Security</li>
                  <li>Adding a Jenkins Slave</li>
                  <li>Setting Up Github</li>
                  <li>Plugin Manager</li>
                  <li>Freestyle Project Configuration</li>
                  <li>Source Code Management and the Git Plugin</li>
                  <li>Workspace Environment Variables</li>
                  <li>Views</li>
                  <li>Pipelines</li>
                  <li>The Jenkins file</li>
                  <li>Configuring and Running a Pipeline</li>
                  <b>Git</b>
                  <li>Introduction about Git</li>
                  <li>Install and Configure Git</li>
                  <li>Introduction to Repository </li>
                  <li>Git Commands</li>
                  <li>version</li>
                  <li>git remote</li>
                  <li>git push</li>
                  <li>git branch</li>
                  <li>git add</li>
                  <li>git checkout</li>
                  <li>git clean</li>
                  <li>git commit</li>
                  <li>Getting and Creating Projects</li>
                  <li>git init</li>
                  <li>git clone</li>
                  <li>Basic Snapshotting</li>
                  <li>git add</li>
                  <li>git status</li>
                  <li>git commit</li>
                  <li>diff</li>
                  <li>commit</li>
                  <li>restore</li>
                  <li>reset</li>
                  <li>rm</li>
                  <li>mv</li>
                  <li>Branching and Merging</li>
                  <li>Merging, handling conflicts</li>
                  <li>Working with Eclipse IDE</li>
                  <li>Working with projects</li>
                  <li>Best Practices</li>
                  <b>Docker</b>
                  <li>Introduction to Docker</li>
                  <li>Docker Command </li>
                  <li>Docker version</li>
                  <li>Docker search </li>
                  <li>Docker pull</li>
                  <li>Docker run </li>
                  <li>Docker ps</li>
                  <li>Docker stop </li>
                  <li>Docker restart </li>
                  <li>Docker kill</li>
                  <li>Docker exec </li>
                  <li>Docker login</li>
                  <li>Docker commit </li>
                  <li>Docker push </li>
                  <li>Docker network </li>
                  <li>Docker history </li>
                  <li>Docker rmi </li>
                  <li>Docker ps -a</li>
                  <li>Docker copy</li>
                  <li>Docker logs </li>
                  <li>Docker volume </li>
                  <li>Docker logout</li>
                  <li>The Docker Hub</li>
                  <li>Docker Installation</li>
                  <li>Creating Our First Image</li>
                  <li>Working With Multiple Images</li>
                  <li>Packaging A Customized Container</li>
                  <li>Running Container Commands with Docker</li>
                  <li>The Dockerfile, Builds and Network Configuration</li>
                  <li>Dockerfile Directives</li>
                  <li>Container Volume Management</li>
                  <li>Docker Network: List and Inspect</li>
                  <li>Docker Network: Create and Remove</li>
                  <li>Docker Network: Assign to Containers</li>
                  <li>Inspect Container Processes</li>
                  <li>Previous Container Management</li>
                  <li>Controlling Port Exposure on Containers</li>
                  <li>Naming Our Containers</li>
                  <li>Docker Events</li>
                  <li>Image History</li>
                  <li>Managing and Removing Base Images</li>
                  <li>Saving and Loading Docker Images</li>
                  <li>Pushing to Docker Hub</li>
                  <b>Ansible</b>
                  <li>Introduction to Ansible</li>
                  <li>Setup and Configuration</li>
                  <li>Test Environment Setup</li>
                  <li>Download and Installation</li>
                  <li>Ansible Configuration File</li>
                  <li>Ansible Python Dependencies</li>
                  <li>The HOSTS File</li>
                  <li>Overriding the Default HOSTS File</li>
                  <li>Overriding the Default System Ansible.Cfg File</li>
                  <li>Overriding the Default Roles Path</li>
                  <li>Ansible Command Line</li>
                  <li>System Facts</li>
                  <li>System Facts: Common Values for Playbooks</li>
                  <li>Our First Playbook</li>
                  <li>Variables: Inclusion Types</li>
                  <li>Target Section</li>
                  <li>Variable Section</li>
                  <li>Task Section</li>
                  <li>Handler Section</li>
                  <li>Outlining Your Playbook</li>
                  <li>Create a Playbook from Our Outline</li>
                  <li>Optimizing Your Playbook</li>
                  <li>Taking Our Playbook for a Dry Run</li>
                  <li>Basic Error Handling</li>
                  <li>Includes - Breaking Your Playbook into Discrete Plays</li>
                  <li>Starting at Task or Stepping Through All Tasks</li>
                  <li>Passing Variables into Playbooks at the Command Line</li>
                  <li>Local Action</li>
                  <li>Delegate To</li>
                  <li>Roles - The Directory Structure</li>
                  <li>Role Based Tasks</li>
                  <li>Task Order - Pre and Post Tasks</li>
                  <li>Roles - Conditional Execution</li>
                  <li>Roles - Variable Substitution</li>
                  <li>Roles - Handlers</li>
                  <li>Roles - Using Notification</li>
                  <li>Roles - Configuring Alternate Roles Paths</li>
                  <li>Roles - Conditional Include Statements</li>
                  <li>Roles - Waiting for Events</li>
                  <li>Roles - Executing a Task Until</li>
                  <li>Roles - Using Tags</li>
                  <li>Roles - Breaking a Playbook Into a Role</li>
                  <p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontWeight: 800, fontSize: 18}}>2. AWS (Amazon Web Services)</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p><b>AWS Overview</b>
                  </p><li>Description of AWS</li>
                  <li>History and Evolution of AWS</li>
                  <li>Overview of AWS Products and Services</li>
                  <b>Identity and Access Management (IAM)</b>
                  <li>IAM Overview</li>
                  <li>IAM Policies</li>
                  <li>IAM Users</li>
                  <li>IAM Groups</li>
                  <li>IAM Roles</li>
                  <li>IAM best practices</li>
                  <li>Practice Assignment: Configuring IAM Access</li>
                  <li>Demos Included</li>
                  <ol><li> Creating an IAM Policy</li>
                    <li>Creating an IAM User</li>
                    <li>Creating an IAM Group</li>
                    <li>Creating an IAM Role</li></ol>
                  <b>Amazon Virtual Private Cloud (VPC)</b>
                  <li>Amazon VPC Overview</li>
                  <li>Amazon VPC</li>
                  <li>IP Addresses</li>
                  <li>Subnets</li>
                  <li>Internet Gateway</li>
                  <li>Route Tables</li>
                  <li>NAT Devices</li>
                  <li>Security Groups</li>
                  <li>Network ACL’s</li>
                  <li>VPC Best Practices</li>
                  <li>Practice Assignment: Designing a Custom VPC</li>
                  <li>Demos Included:</li>
                  <ol><li>Creating a custom VPC</li>
                    <li>Creating an Elastic IP Address</li>
                    <li>Creating Subnets</li>
                    <li>Creating Internet Gateways</li>
                    <li>Creating Route Tables</li>
                    <li>Creating a NAT Gateway</li>
                    <li>Creating a Security Group</li></ol>
                  <b>Elastic Cloud Compute- EC2</b>
                  <li>Cloud Computing with AWS</li>
                  <li>Amazon EC2 Overview</li>
                  <li>Amazon Machine Images(AMI)</li>
                  <li>EC2 Instance Types</li>
                  <li>Amazon Elastic Block Store (EBS)</li>
                  <li>EC2 Pricing</li>
                  <li>Elastic Load Balancing (ELB)</li>
                  <li>Auto Scaling</li>
                  <li>AWS Services</li>
                  <li>Amazon Elastic Container Service</li>
                  <li>EC2 Best Practices and Costs</li>
                  <li>Demos Included:</li>
                  <ol><li>Launch and connect to an EC2 Linux instance</li>
                    <li>Launch and connect to an EC2 Windows instance</li>
                    <li>Create an AMI</li>
                    <li>EC2 Instance Types</li>
                    <li>Attaching EBS Volumes</li>
                    <li>Elastic Load Balancing</li>
                    <li>Auto Scaling</li></ol>
                  <b>Amazon Simple Storage Service (S3)</b>
                  <li>S3 Buckets</li>
                  <li>Version Control</li>
                  <li>Amazon S3 Lifecycle Management</li>
                  <li>CloudFront and CDNs</li>
                  <li>Security and Encryption</li>
                  <li>Import/Export &amp; Snowball</li>
                  <li>Amazon S3 Best Practices</li>
                  <li>Demos Included:</li>
                  <ol><li>Create and access an Amazon S3 Bucket</li>
                    <li>Amazon S3 Version Control</li>
                    <li>Amazon S3 Lifecycle Management</li>
                    <li>Amazon CloudFront</li>
                    <li>Security and Encryption</li></ol>
                  <b>Databases</b>
                  <li>Amazon Relational Database Service (RDS)</li>
                  <li>AMI Databases</li>
                  <li>Amazon DynamoDB</li>
                  <li>Amazon Redshift</li>
                  <li>Amazon Aurora</li>
                  <li>AWS Database Migration Services (DMS)</li>
                  <li>Databases best practices</li>
                  <li>Databases costs</li>
                  <li>Practice Assignment: Amazon RDS</li>
                  <li>Demos Included:</li>
                  <ol> Amazon RDS
                    Launching databases 
                    Amazon DynamoDB</ol>
                  <b>Route53 (Amazon DNS service)</b>
                  <li>Amazon Route 53 Overview</li>
                  <li>Amazon Route 53 and DNS</li>
                  <li>Route 53 Routing Policies</li>
                  <li>Route 53 best practices</li>
                  <li>Route 53 costs and prices</li>
                  <li>Demo Included:</li>
                  <ol><li>Route 53 Hosted Zones Demo</li></ol>
                  <b>Application Services</b>
                  <li>Simple Notification Service-SNS</li>
                  <li>AWS CloudTrail</li>
                  <li>AWS CloudWatch</li><p />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{fontWeight: 800, fontSize: 18}}>3. Azure Cloud Computing</button>                     
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="card-body">
                  <p>
                    <b>Introduction to Microsoft Azure </b>
                  </p><li>Azure Subscriptions</li>
                  <li>Azure Resources</li>
                  <li>Azure Free Tier Account</li>
                  <li>Azure Resource Manager</li>
                  <li>Azure Resource Manager Template</li>
                  <li>Azure Storage</li>
                  <li>Types of Azure Storage</li>
                  <b>Hands-On:</b>
                  <li>Create a free tier Azure account</li>
                  <li>Create a web app service using Azure Portal</li>
                  <li>Manage Azure Cost and Billing Service</li>
                  <b>Azure Virtual Machines and Networking</b>
                  <li>Azure Resource Manager Virtual Machine</li>
                  <li>Virtual Machines in ARM Template</li>
                  <li>Overview of Azure Virtual Machine</li>
                  <li>Azure Managed Disks</li>
                  <li>Azure Blob Storage</li>
                  <li>Networking in Azure</li>
                  <li>Subnets, NIC, IP Addresses, DNS</li>
                  <b>Hands-On:</b>
                  <li>Create Windows /LINUX Virtual Machines</li>
                  <li>Create BLOB Storage using Azure Portal</li>
                  <li>Create VM with Storage Account and Managed Disks</li>
                  <li>Configure Azure Virtual Network</li>
                  <b>Azure VMSS (Virtual Machine Scale Sets) and Availability Zones</b>
                  <li>Azure Availability Sets</li>
                  <li>Azure Availability Zone</li>
                  <li>Auto scaling</li>
                  <li>Fault Domain</li>
                  <li>Update Domain</li>
                  <li>Load Balancer</li>
                  <li>Application Gateway</li>
                  <li>Azure Disk Encryption</li>
                  <b>Hands-On:</b>
                  <li>Create a Virtual Machine Scale Set</li>
                  <li>Configure VMSS and add custom usage alerts</li>
                  <li>Configure VM for Redundancy</li>
                  <li>Create Application Gateway</li>
                  <b>Azure Storage Solution and Design Patterns</b>
                  <li>Azure Architecture Center</li>
                  <li>Cloud design patterns</li>
                  <li>Cache-aside pattern</li>
                  <li>Sharding Pattern</li>
                  <li>Azure SQL DB</li>
                  <li>Azure Elastic Pool</li>
                  <li>Azure Data Lakes</li>
                  <li>Azure Data Factory</li>
                  <li>Azure Cosmos DB</li>
                  <b>Hands-On:</b>
                  <li>Create and Deploy Azure Data Lake</li>
                  <li>Create and Deploy Azure Cosmos DB</li>
                  <b>Advanced Azure Hybrid Connectivity and Site Recovery</b>
                  <li>Hybrid Connectivity</li>
                  <li>VNet S2S VPN</li>
                  <li>VNet Peering</li>
                  <li>Service Chaining</li>
                  <li>Azure VPN Gateway</li>
                  <li>Policy Based Gateway</li>
                  <li>Route Based Gateway</li>
                  <li>Gateway Connections</li>
                  <li>Express Route</li>
                  <li>VNet Routing</li>
                  <li>User Defined Rout</li>
                  <b>Hands-On:</b>
                  <li>Create a Virtual Network Gateway</li>
                  <li>Network Security Group</li>
                  <li>Design User Defined Routes</li>
                  <b>Azure Kubernetes Service</b>
                  <li>Application Environment Components</li>
                  <li>Docker</li>
                  <li>Docker File</li>
                  <li>Docker Image</li>
                  <li>Azure Container Registry</li>
                  <li>Azure Container Instance</li>
                  <li>Azure Kubernetes Service</li>
                  <li>Diagnostics Logs</li>
                  <b>Hands-On:</b>
                  <li>Docker Container </li>
                  <li>Docker Installation and Container Creation </li>
                  <li>How to create container in azure?</li>
                  <b>Other Topics Hands-On:</b>
                  <li>Azure Load Balancer Basic and Std</li>
                  <li>App Service Deployment from Deployment center</li>
                  <li>Azure Traffic Manager and Routing Methods</li>
                  <li>How to configure access restriction on Azure application?</li>
                  <li>Azure Service end point </li>
                  <li>Azure VNet Peering Regional and Global level</li>
                  <li>How to manage Azure policy</li>
                  <li>Azure Backup and Site Recovery</li>
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
