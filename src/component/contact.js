import React, {useRef} from 'react'
import Header from './header'
import Footer from './footer'
import emailjs from '@emailjs/browser';
export default function Contact() {
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
  <main>
    <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay" data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{backgroundImage: 'url("assets/img/breadcrumb/breadcrumb-bg.jpg")'}}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">Contact Us</h3>
              <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span className="dvdr"><i className="fa-regular fa-angle-right" /></span>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contact area start */}
    <section className="contact__area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="contact__wrapper">
              <div className="section__title-wrapper mb-40">
                <h2 className="section__title">Get in<span className="yellow-bg yellow-bg-big">touch</span></h2>
                <p>Have a question or just want to say hi? We'd love to hear from you.</p>
              </div>
              <div className="contact__form mb-30">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <div className="contact__form-input">
                        <input type="text" required="required" className="alpha-only" placeholder="Enter Your Name" name="to_name" />
                      </div>
                    </div>
                 <div className="col-xxl-6 col-xl-6 col-md-6">
  <div className="contact__form-input">
    <input type="text" className="number-only" placeholder="Enter Mobile Number" required="required" name="mobile_no" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
  </div>
</div>

                    <div className="col-xxl-12">
                      <div className="contact__form-input">
                        <input type="text" placeholder="Enter Email Id" name="from_name" />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__form-input">
                        <textarea placeholder="Enter Your Message" name="message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__btn">
                    <button className="tp-btn" onClick={() => alert('Thankyou we will call you shortly!')} style={{cursor: 'pointer'}}>
  <span>Send your message <i className="fa-regular fa-arrow-right" /> </span>
</button>
                      
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-response">
                <p className="ajax-response" />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
            <div className="contact__info white-bg p-relative z-index-1">
              <div className="contact__shape">
                
              </div>
              <div className="contact__info-inner white-bg">
                <ul>
                  <li>
                    <div className="contact__info-item d-flex align-items-start mb-35">
                      <div className="contact__info-icon mr-15">
                        <svg className="map" viewBox="0 0 24 24">
                          <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z" />
                          <circle className="st0" cx={12} cy={10} r={3} />
                        </svg>
                      </div>
                      <div className="contact__info-text">
                        <h4>Head Office</h4>
                        <p>Deepak Commercial Center, 102 2nd Floor Vallpeer Road, Kalyan west, near Railway Station, Kalyan, Maharashtra 421301</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact__info-item d-flex align-items-start mb-35">
                      <div className="contact__info-icon mr-15">
                        <svg className="mail" viewBox="0 0 24 24">
                          <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z" />
                          <polyline className="st0" points="22,6 12,13 2,6 " />
                        </svg>
                      </div>
                      <div className="contact__info-text">
                        <h4>Email us directly</h4>
                        <p>info.ditinstitute@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact__info-item d-flex align-items-start mb-35">
                      <div className="contact__info-icon mr-15">
                        <svg className="call" viewBox="0 0 24 24">
                          <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z" />
                        </svg>
                      </div>
                      <div className="contact__info-text">
                        <h4>Phone</h4>
                        <p><a style={{color:"black"}} href="tel:+91 8976758080">+91 8976758080</a></p>
                        <p><a style={{color:"black"}}  href="tel:+91 8976758070">+91 8976758070</a></p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <div class="contact__social pl-30">
                     <h4>Follow Us</h4>
                     <ul>
                        <li><a href="#" class="fb"><i class="social_facebook"></i></a></li>
                        <li><a href="#" class="tw"><i class="social_twitter"></i></a></li>
                        <li><a href="#" class="pin"><i class="social_pinterest"></i></a></li>
                     </ul>
                  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact area end */}
    <div className="tp-contact-map">
      <div className="container-fluid p-0">
        <div className="tp-map-height">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0647110907175!2d73.12509507411897!3d19.23601134693188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bd5234a3349ac87%3A0xef8b87e9aced6bab!2sDigital%20Infotech%20Training%20Institute!5e0!3m2!1sen!2sin!4v1685803070582!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</div>

  )
}
