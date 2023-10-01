import React from 'react'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
  <Header/>
  <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay" data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{backgroundImage: 'url("assets/img/breadcrumb/breadcrumb-bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">About Us</h3>
            <div className="breadcrumb__list">
              <span><Link style={{color:"white"}} to="/">Home</Link></span>
              <span className="dvdr"><i className="fa-regular fa-angle-right" /></span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tp-about__section " style={{paddingTop: 50, paddingBottom: 30}}>
    <div className="container">
      <div className="row align-items-center">
        <h3 className="tp-section__title mb-15" style={{textAlign: 'center', textDecoration: 'underline'}}>Digital Infotech Training Institute</h3>
        <div className="col-lg-7">
          <div className="tp-about__img-wrapper d-md-flex p-relative" style={{border: '1px solid', borderRadius: 3}}>
            <div className="tp-about__img-large w-img mb-30">
              <img src="assets/img/courses/course-page.jpg" alt />
            </div>
            {/*<div class="tp-about__img-sm w-img mb-30">
                  <img src="assets/img/about/about-2.jpg" alt="">
               </div>*/}
            <div className="tp-about-shapes">
              <div className="tp-about__shapes-1">
                <img src="assets/img/icons/about-shapes.png" alt='' loading="lazy" />
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
              <b>A completely Industry oriented Training Institute in all IT related course</b>. DIT Institute has a group of highly experienced and qualified faculties. They are always dedicated towards improving the students, and make them learn more, with their experiences. <b>We are best IT training Institutes in Mumbai</b> has a dedicated placement assistance team.</p>
            <p className="mb-40">
              We offer IT course training with affordable fees on various trending and top IT courses like <b>Software Testing, Java, .Net, DevOps, AWS, Database (MS SQL, MY SQL), Data Science, RPA, Hardware &amp; Networking</b> and several other courses with Projects and Assignment. Special attention is given to each students to get benefited from the training.
            </p>
            <p className="mb-40">Best part of our institute is we provide <b>Classroom training, Online training</b> and <b>Corporate training</b> on weekends and weekdays.<b> Best Software training institute in Kalyan -Mumbai</b> our team is qualified trainers, who are professionals in their particular fields. DITI also provides flexible batch timings as per the student’s requirements. We schedule special batches for <b>working professionals</b>. Guidance and Support after the course until the candidate find the job.</p>
            <p className="mb-40">Resume Preparation, <b>Mock interviews and Placement assistance</b> that helps student place in the industry. </p>
            <div className="tp-about__feature-list mb-40">
              <ul>
                <li><span><i className="icon_check" /></span>Upskill your organization.</li>
                <li><span><i className="icon_check" /></span>Personalize classes</li>
                <li><span><i className="icon_check" /></span>Placement oriented courses</li>
              </ul>
            </div>
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
  </div>
<Footer/>
    </div>
  )
}
