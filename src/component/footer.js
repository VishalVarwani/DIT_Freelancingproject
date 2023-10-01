import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      

  <section className="bg_default small_pt small_pb" style={{backgroundColor: 'rgba(7, 41, 77, 0.90)'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="text_white cta_section">
            <div className="medium_divider d-block d-md-none" />
            <div className="heading_s1 heading_light">
              <h2>Let's Start The Training Today!</h2>
            </div>
            <p>For more information for contact us</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-right">
            <Link to="tel:+91 8976758080" className="btn-outline-white" style={{color: 'white'}}>+91 8976758080</Link>
          </div>
          <div className="medium_divider d-block d-md-none" />
        </div>
      </div>
    </div>
    </section>
{/* footer area start */}
<footer >
  <div className="footer__area grey-bg">
    <div className="container">
      <div className style={{paddingTop: 50, paddingBottom: 0}}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-4 mb-4 mb-lg-0">
            <div className="footer__widget mb-50 footer-col-1">
              <div className="footer__widget-logo mb-30">
                <Link to="index.php"><img src="assets/img/logo/ditilogo4.png" alt /></Link>
              </div>
              <div className="footer__widget-content">
                <p style={{paddingTop:"20px"}}>DITI provides the entire essential computer (basic and advanced course) and IT training also which helpful for the beginner and the experienced professional person having a better togetherness in this competitive world. DITI’s maxim is to give out quality education to students and professionals both.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8 mb-4 mb-lg-0">
            <h5 style={{fontSize: 19}}><u>Head Office</u></h5>
            <ul className="contact_info contact_info_light list_none">
              <li>
                <i className="ti-map-alt" />
                <address>Deepak Commercial Center, 102  2nd Floor Vallpeer Road, Kalyan west, near Railway Station, Kalyan, Maharashtra 421301 </address>
              </li>
              <li style={{display: '-webkit-inline-box', fontSize: 16}}>
                <i className="fa fa-envelope" /> &nbsp;
                <address>
                  <Link style={{color:"black"}} to="mailto:info.ditinstitute@gmail.com">info.ditinstitute@gmail.com</Link></address>
              </li>
              <li style={{display: '-webkit-inline-box', fontSize: 27}}>
                <i className="fa fa-mobile" /> &nbsp;
                <address style={{fontSize: 15, marginTop:"9px", marginLeft:"-8px"}}>
                  <Link style={{color:"black"}} to="tel:+91 8976758080">+91 8976758080</Link> / 
                  <Link style={{color:"black"}} to="tel:+91 8976758070">+91 8976758070</Link><br />
                </address></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-4 mb-4 mb-lg-0">
            <h5 style={{fontSize: 19}}><u>Useful Links</u></h5>
            <ul  className="list_none widget_links links_style1">
              <li ><i className="fa fa-angle-right" style={{paddingRight: 5}} /><Link style={{color:"black"}} to="/about">About Us</Link></li>
              <li><i className="fa fa-angle-right" style={{paddingRight: 5}} /><Link style={{color:"black"}} to="/courses">Our Courses</Link></li>
              <li><i className="fa fa-angle-right" style={{paddingRight: 5}} /><Link style={{color:"black"}} to="/placement">Placements</Link></li>
              <li><i className="fa fa-angle-right" style={{paddingRight: 5}} /><Link style={{color:"black"}} to="/gallery">Gallery</Link></li>
              <li><i className="fa fa-angle-right" style={{paddingRight: 5}} /><Link style={{color:"black"}} to="/contact">Contact Us</Link></li>
            </ul>
          </div>
     
  <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
    <h5 style={{fontSize: 19}}><span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star" style={{color: '#ffd400'}} />
      <span className="fa fa-star" style={{color: '#ffd400'}} /></h5>
    <Link to="https://g.page/r/Catr7azph4vvEB0/review" target="_blank">
      <img className="logo_light" src="assets/img/reviewImage.png" style={{width: '100%'}} alt="Review Us On Google" />
    </Link>
    <br /><br />
    <h5 style={{fontSize: 19}}><u>Connect Us</u></h5>
    <div className="footer__social">
      <span><Link to="https://www.facebook.com/Ditiinstitute"><i className="fab fa-facebook-f" /></Link></span>
      <span><Link to="#" className="yt"><i className="fab fa-youtube" /></Link></span>
      <span><Link to="https://instagram.com/diti_institute" className="tw"><i className="fab fa-instagram" /></Link></span>
    </div>
  </div>
  <div className="footer__bottom">
    <div className="row">
      <div className="col-12">
        <div className="footer__copyright text-center">
          <p> © 2023, All Rights Reserved.
          </p>
        </div>
      </div>
  
  </div>
  {/* footer area end */}
</div>

</div>
</div>
          
          </div>
          </div>
          </footer>





</div>
  )
}
