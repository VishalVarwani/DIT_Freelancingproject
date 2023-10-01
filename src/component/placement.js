import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Placement() {
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
              <h3 className="breadcrumb__title">Placement</h3>
              <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span className="dvdr"><i className="fa-regular fa-angle-right" /></span>
                <span>Placement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contact area start */}
    <div className="tp-about__section " style={{paddingTop: 50, paddingBottom: 30}}>
      <div className="container">
        <div className="row align-items-center">
          <h3 className="tp-section__title mb-15" style={{textAlign: 'center', textDecoration: 'underline'}}>Our Top Placement Companies</h3>
          <div className="col-lg-7">
            <div className="tp-about__img-wrapper d-md-flex p-relative" style={{border: '1px solid', borderRadius: 3}}>
              <div className="tp-about__img-large w-img mb-30">
                <img src="assets/img/about/placement.png" alt loading='lazy'/>
              </div>
              {/*<div class="tp-about__img-sm w-img mb-30">
                  <img src="assets/img/about/about-2.jpg" alt="">
               </div>*/}
              <div className="tp-about-shapes">
                <div className="tp-about__shapes-1">
                  <img src="assets/img/icons/about-shapes.png" alt />
                  {/* <div class="tp-about__shapes-2 ">
                        <img src="assets/img/icons/ring-shape.png" alt="">
                     </div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tp-section__title-wrapper">
              <p className="mb-40">
                DITI collabs with many IT companies which will help to placed the student to get dream job. DITI focuses on training as well as placement. Our placement team is also helping student to setup their mock interview session. We prepare student with every round of interview like technical round, HR round, etc.
              </p>
              <p>We offer job placement assistance to students by connecting them with IT companies seeking talent.We maintain a database of job openings and actively recommend suitable candidates based on their skills, qualifications, and career goals.</p>
              <p>We conduct mock interviews to prepare students for the interview process. Provide constructive feedback on their performance, suggest areas for improvement, and help them build a compelling resume tailored to the IT industry.</p>
              <p>We are recently tie-up with Infocare Technologies, Bharati Software, Web Vision, Aurion Pro, Kumarinfotech, VibrantIdeas, Xysterdubai,Pulsarcoating,Dark Bears</p>
              {/*<div class="tp-hero__btn-wrappper">
                  <a href="about-us.html" class="tp-border-btn br-0">
                     <span>Get Started</span>
                     <div class="transition"></div>
                  </a>
               </div>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <marquee>
          <div className="row">
            <div className="col-lg-3">
              <center>
               
              
              
                
               
                <div style={{display: 'inline-block'}}>
                  <img src="assets/img/placement/bharatisoftware.png" alt height="198px" width="221px" /><div style={{paddingTop: 5, paddingBottom: 5, fontSize: 25, fontWeight: 700}}>Bharati Software</div>
                </div>
                <div style={{display: 'inline-block'}}>
                  <img src="assets/img/placement/webvision.png" alt height="198px" width="221px" /><div style={{paddingTop: 5, paddingBottom: 5, fontSize: 25, fontWeight: 700}}>Web Vision</div>
                </div>
                <div style={{display: 'inline-block'}}>
                  <img src="assets/img/placement/aurionpro.png" alt height="198px" width="221px" /><div style={{paddingTop: 5, paddingBottom: 5, fontSize: 25, fontWeight: 700}}>Aurion Pro</div>
                </div>
                <div style={{display: 'inline-block'}}>
                  <img src="assets/img/placement/darkbears.png" alt height="198px" width="221px" /><div style={{paddingTop: 5, paddingBottom: 5, fontSize: 25, fontWeight: 700}}>Dark Bears</div>
                </div>
                <div style={{display: 'inline-block'}}>
                  <img src="assets/img/placement/infocare.png" alt height="198px" width="221px" /><div style={{paddingTop: 5, paddingBottom: 5, fontSize: 25, fontWeight: 700}}>Infocare Technologies</div>
                </div>
              </center>
            </div>
          </div>
        </marquee>
      </div>
    </div>
    {/* contact area end */}
  </main>
</div>
<Footer/>
    </div>
  )
}
