import React from 'react'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <div>
      <Header/>
<div>
  <div className="body-overlay" />
  <main>
    <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay" data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{backgroundImage: 'url("assets/img/breadcrumb/breadcrumb-bg.jpg")'}}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">Our Courses</h3>
              <div className="breadcrumb__list">
                <span><Link style={{color:"white"}} to="/">Home</Link></span>
                <span className="dvdr"><i className="fa-regular fa-angle-right" /></span>
                <span>Our Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contact area start */}
    <section className="contact__area">
      <div className="container">
        <div className="section__title-wrapper" style={{textAlign: 'center', paddingTop: 28, paddingBottom: 20}}>
          <p className style={{fontSize: 24, fontWeight: 700, textDecoration: 'underline'}}>DITI Provides list of professional courses with quality training</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/sqlserver.png" alt loading="lazy"/>
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Database</span>
                </div>
                <p className="tp-courses-2__title">Every Businesses use data stored in databases to make informed business decisions.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/database" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/java.jpg" alt loading="lazy"/>
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Java / Advanced Java</span>
                </div>
                <p className="tp-courses-2__title">The Java programming language, which is widely used with corporate applications and Android mobile operating systems.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/java" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/website.jpg" alt loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Website Development</span>
                </div>
                <p className="tp-courses-2__title">Website is an integral parts of every business and DITI is helping in learning this concept to build your own website.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/website" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/dotnet1.jpg" alt loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}> Asp.Net, C#</span>
                </div>
                <p className="tp-courses-2__title">ASP.NET is a free framework for building great websites &amp; web applications using HTML, CSS, and JavaScript.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/dotnet" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/angular.png" alt loading="lazy"/>
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Angular</span>
                </div>
                <p className="tp-courses-2__title">Angular is a development platform. Angular includes component-based framework for building web applications.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/angular" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/cloud.jpg" alt loading="lazy"/>
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Cloud Computing</span>
                </div>
                <p className="tp-courses-2__title">Industrial cloud computing is a broad term for cloud technology used in asset-intensive.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/cloudcomputing" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
         
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/basiccomputer.jpg"  loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Basic Courses</span>
                </div>
                <p className="tp-courses-2__title">Computers allow the application of different types of software that can help to keep track of files, documents.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/basiccourses" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/networking.png" alt loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Harware &amp; Networking</span>
                </div>
                <p className="tp-courses-2__title">computer hardware is to support functions such as processing, communication,input and output.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/hardware" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/testing.png" alt loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}> Software Testing</span>
                </div>
                <p className="tp-courses-2__title">It is a process of evaluating &amp; verifying that a software product or application does what it is supposed to do.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/testing" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{paddingBottom: 20}}>
            <div className="tp-courses-2__item">
              <div className="tp-courses-2__thumb w-img fix p-relative">
                <img src="assets/img/courses/dataanalytics.jpg" alt loading="lazy" />
              </div>
              <div className="white-bg" style={{border: '3px solid'}}>
                <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                  <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, paddingTop: 10, fontWeight: 700, textDecoration: 'underline'}}>Data Analytics</span>
                </div>
                <p className="tp-courses-2__title">Data analytics is important because it helps businesses optimize their performances.</p>
                <div style={{textAlign: 'center'}}>
                  <div className="tp-hero__btn-wrappper">
                    <Link to="/analytics" className="tp-btn">
                      <span>View More <i className="fa-regular fa-arrow-right" /></span>
                      <div className="transition" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6" style="padding-bottom:20px;">
               <div class="tp-courses-2__item">
                  <div class="tp-courses-2__thumb w-img fix p-relative">
                      <img src="assets/img/courses/networking.png" alt="">
                  </div>
                  <div class="white-bg" style="border: 3px solid;">
                     <div class="tp-courses-2__meta d-flex justify-content-between align-items-center">
                        <span class="tp-courses-2__cat cat-color-1" style="font-size: 19px; padding-top:10px;
    font-weight: 700;
    text-decoration: underline;">Harware & Networking</span>
                        
                     </div>
                     <p class="tp-courses-2__title"></Link>computer hardware is to support functions such as processing, communication, secondary storage and input and output.</p>
                     
						   <div style="text-align:center;">
						 <div class="tp-hero__btn-wrappper">
                     <Link to="#" class="tp-btn">
                        <span>View More <i class="fa-regular fa-arrow-right"></i></span>
                        <div class="transition"></div>
                     </Link>
                  </div>
                     </div>
                  </div>
               </div>
            </div>*/}
        </div>
      </div>
    </section>
    {/* contact area end */}
  </main>
</div>
<Footer/>

    </div>
  )
}
