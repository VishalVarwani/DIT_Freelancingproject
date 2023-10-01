import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dz1ssbn', 'template_y0kfldb', form.current, 'GO2LeZejiuj9Jshpd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
<div>
      <Header/>
      <div>
        <div className="body-overlay" />
        {/* offcanvas area end */}
        <main>
        
          {/* 1 single slider */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
        
      <img className="d-block w-100 imgsrc" src="assets/img/slider/slider-2.1.jpg" alt="First slide" />
  
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
                  <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s" style={{    marginBottom: "170px"
}}>Digital Infotech  <br />Training Institute
</h1>
                  </div>
      
                <div className="witr_btn_style">

                  <div className="witr_btn_sinner">
                 
                  </div>
                </div>
       
              </section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img className="d-block w-100 imgsrc" src="assets/img/slider/slider-2.2.jpg" alt="Second slide" />
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s"  style={{    marginBottom: "170px"
}}>Get Industrial training <br /> from the experts.
</h1>

                  </div>
    
<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img className="d-block w-100 imgsrc" src="assets/img/slider/slider-2.3.jpg" alt="Third slide" />
      <a  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span  class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
  <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s"  style={{    marginBottom: "170px"
}}>Grow your career with<br /> From best platform.
</h1>

                  </div>

<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
  </div>
  
    <span className="sr-only">Previous</span>
    	</div>
          {/* feature start  */}
          <div className="tp-feature-2__section">
            <div className="container">
              <div className="row gx-0">
                <div className="col-md-4">
                  <div className="tp-feature-2__item tp-feature-2__color-1 d-lg-flex">
                    <div className="tp-feature-2__icon mr-20">
                      <span><i class="fa fa-laptop" aria-hidden="true"></i>
</span>
                    </div>
                    <div className="tp-feature-2__content">
                      <h3 className="tp-feature-2__title">IT Courses</h3>
                      <p>Boost your skills in IT courses with IT professional teacher</p>
                      {/*  <div class="tp-feature-2__wrapper">
                           <span><Link to="contact.html"><i class="fa-regular fa-arrow-right"></i></Link></span>
                        </div>*/}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tp-feature-2__item tp-feature-2__color-2 d-lg-flex">
                    <div className="tp-feature-2__icon mr-20">
                      <span><i class="fa-solid fa-cloud-arrow-down"></i></span>
                    </div>
                    <div className="tp-feature-2__content">
                      <h3 className="tp-feature-2__title">Placement</h3>
                      <p>Job placement offers with our tie-up companies help to get job quickly.</p>
                      {/* <div class="tp-feature-2__wrapper">
                           <span><Link to="contact.html"><i class="fa-regular fa-arrow-right"></i></Link></span>
                        </div>*/}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tp-feature-2__item tp-feature-2__color-3 d-lg-flex">
                    <div className="tp-feature-2__icon mr-20">
                      <span><i class="fa fa-certificate" aria-hidden="true"></i>
</span>
                    </div>
                    <div className="tp-feature-2__content">
                      <h3 className="tp-feature-2__title">Experience Staff</h3>
                      <p>Learn from experience staff which help to achieve dream jobs.</p>
                      {/*<div class="tp-feature-2__wrapper">
                           <span><Link to="contact.html"><i class="fa-regular fa-arrow-right"></i></Link></span>
                        </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* feature end  */}
          {/* about section  start */}
          <div style={{paddingTop: 20, paddingBottom: 20}} className="tp-about-2__section  p-relative fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tp-about-2__img-wrapper p-relative">
                    <div className="tp-about-2__img w-img mb-30">
                      <img src="assets/img/about/about-2.1.png" alt />
                    </div>
                    <div className="tp-about-2-shapes">
                      <div className="tp-about-2__shapes-1">
                        <img src="assets/img/icons/dots-shapes-2.png" alt />
                      </div>
                      <div className="tp-about-2__shapes-2 ">
                        <img src="assets/img/icons/theme-circle.png" alt />
                      </div>
                      {/*<div class="tp-about-2__shapes-7 ">
                           <img src="assets/img/icons/about-tag.png" alt="">
                        </div>*/}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-about-2__right ml-110">
                    <div className="tp-section__title-wrapper">
                      <h3 className="tp-section__title mb-15">Digital Infotech Training Institute</h3>
                      <p className="mb-40">As an Industry leader in Mumbai, DITI software Training Institute in kalyan. DITI offer a wide range of software training programs that are designed to provide students/working professional with the technical skills <b>(Software Testing, Java, .Net, DevOps, AWS, Database (MS SQL, MY SQL), Data Science, RPA, Hardware &amp; Networking)</b> everyone need to succeed in today’s information technology(IT) industries.</p>
                      <p>Best part of our institute is we provide <b>Classroom training, Online training and Corporate training</b> on weekends and weekdays. DITI offers both on-site and online training programs for working and non-working students and professionals also</p>
                      <div className="tp-about-2__feature-list mb-10">
                        <ul>
                          <li><span><i className="fa-light fa-user-group" /></span>Highly Skilled Teachers</li>
                          <li><span><i className="fa-light fa-file-pen" /></span>Efficient &amp; Flexible Timing</li>
                          <li><span><i className="fa-light fa-chart-pie-simple" /></span>Corporate Training</li>
                          <li><span><i className="fa-light fa-bars-progress" /></span>Affordable Courses</li>
                        </ul>
                      </div>
                      <div className="tp-hero__btn-wrappper">
                        <Link to="/about" className="tp-btn">
                          <span>View More <i className="fa-regular fa-arrow-right" /></span>
                          <div className="transition" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-about-2__shapes">
              <div className="tp-about-2__shapes-8">
                <img src="assets/img/icons/lines-shape.png" alt />
              </div>
              <div className="tp-about-2__shapes-3">
                <img src="assets/img/icons/role-shape-2.png" alt />
              </div>
              <div className="tp-about-2__shapes-4 ">
                <img src="assets/img/icons/book-blue.png" alt />
              </div>
            </div>
          </div>
          {/* about section end  */}
          {/* course start  */}
          <div className="tp-courses-2__section grey-bg-2" style={{paddingTop: 40, paddingBottom: 40}}>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="tp-section__title-wrapper mb-40">
                    <h3 className="tp-section__title mb-15">Our Popular Courses.</h3>
                    <p>DITI provides best IT industrial courses for future development.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                </div>
              </div>
              <div className="tp-courses-2__tab-content">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-courses-2__item mb-30">
                      <div className="tp-courses-2__thumb w-img fix p-relative">
                        <img src="assets/img/courses/sqlserver.png" alt />
                      </div>
                      <div className="tp-courses-2__content white-bg">
                        <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                          <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, fontWeight: 700, textDecoration: 'underline'}}>Database</span>
                        </div>
                        <p className="tp-courses-2__title">Every Businesses use data stored in databases to make informed business decisions.</p>
                        <div style={{textAlign: 'center'}}>
                          <div className="tp-courses-2__bottom">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-courses-2__item mb-30">
                      <div className="tp-courses-2__thumb w-img fix p-relative">
                        <img src="assets/img/courses/java.jpg" alt />
                      </div>
                      <div className="tp-courses-2__content white-bg">
                        <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                          <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, fontWeight: 700, textDecoration: 'underline'}}>Java / Advanced Java</span>
                        </div>
                        <p className="tp-courses-2__title">The Java programming language, which is widely used with corporate applications and Android mobile operating systems.</p>
                        <div style={{textAlign: 'center'}}>
                          <div className="tp-courses-2__bottom">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-courses-2__item mb-30">
                      <div className="tp-courses-2__thumb w-img fix p-relative">
                        <img src="assets/img/courses/website.jpg" alt />
                      </div>
                      <div className="tp-courses-2__content white-bg">
                        <div className="tp-courses-2__meta d-flex justify-content-between align-items-center">
                          <span className="tp-courses-2__cat cat-color-1" style={{fontSize: 19, fontWeight: 700, textDecoration: 'underline'}}>Website Development</span>
                        </div>
                        <p className="tp-courses-2__title">Website is an integral parts of every business and DITI is helping in learning this concept to build your own website.</p>
                        <div style={{textAlign: 'center'}}>
                          <div className="tp-courses-2__bottom">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12" style={{paddingTop: 15}}>
                    <div className="justify-content-lg-end mb-45 p-relative z-index-1" style={{textAlign: 'center'}}>
                      <Link to="/courses" className="tp-white-btn">
                        <span>See All course<i className="fa-regular fa-arrow-right" /></span>
                        <div className="transition" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* course end  */}
          {/* counter start  */}
          <div className="tp-counter__section" style={{paddingTop: 40, paddingBottom: 40, backgroundImage:"url(assets/img/bg/counter-bg-1.jpg)"}} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tp-section__title-wrapper mb-70 text-center">
                        <h3 className="tp-section__title text-white">Why Choose us</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-6">
                      <div className="tp-counter__item mb-30 has-border">
                        <span><b className="counter">60</b>Courses</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="tp-counter__item has-border mb-30">
                        <span><b className="counter">50</b>Professional Faculty</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="tp-counter__item  has-border mb-30">
                        <span><b className="counter">550</b>Students Enrolled</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="tp-counter__item mb-30">
                        <span><b className="counter">200</b>Students Job</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* counter end  */}
          {/* join form start  */}
          <div className="tp-form__seaction grey-bg-2 pt-100 pb-70 p-relative fix z-index-1">
            <div className="tp-form-shapes">
              <div className="tp-form-shape-1">
                <img src="assets/img/icons/book-blue.png" alt />
              </div>
              <div className="tp-form-shape-2">
                <img src="assets/img/icons/ring-cta-1.png" alt />
              </div>
              <div className="tp-form-shape-3">
                <img src="assets/img/icons/ring-cta-2.png" alt />
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tp-form__text pl-100 pr-100 mb-30">
                    <div className="tp-section__title-wrapper mb-40">
                      <h3 className="tp-section__title mb-15">100% Job Oriented Courses
                        <span>50+</span> Courses
                        Placement Assistant
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-form__main mr-100 white-bg mb-30 p-relative">
                    <form ref={form} onSubmit={sendEmail} className="pt-md-2">
                      <div className="tp-form__field">
                        <label htmlFor="name">Full Name *</label><br />
                        <input required="required" placeholder="Enter Your Name *" id="nameEnquiry" className="form-control alpha-only" name="to_name" type="text" />
                      </div>
                      <div className="tp-form__field">
                        <label htmlFor="phone">Mobile Number *</label><br />
                        <input required="required" placeholder="Enter Mobile No. *" id="phoneEnquiry" className="form-control number-only" name="mobile_no" type="text" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                      </div>
                      <div className="tp-form__field">
                        <label htmlFor="email">E-mail</label><br />
                        <input type="text" id="email" placeholder="Enter Your Email Id"  name="from_name" />
                      </div>
                      <div className="tp-form__field">
                        <label htmlFor="phone">Enter Course Name</label><br />
                        <input required="required" placeholder="Enter Course Name" id="course" className="form-control" name="course_name" type="text" />
                      </div>
                      <div className="tp-form__btn">
                        <button className="tp-btn" onClick={() => alert('Thankyou we will call you shortly!')} style={{cursor: 'pointer'}}>
                          <span>Submit <i className="fa-regular fa-arrow-right" /> </span>
                        </button>
                      </div>
                    </form>
                    <div className="tp-form__main-shape">
                      <img src="assets/img/icons/dots-shapes.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* join form end  */}
          
        </main></div>
      <Footer/>
          </div>
  )
}
