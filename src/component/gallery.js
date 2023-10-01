import React from 'react'
import "../css/gallery.css"
import Header from './header'
import Footer from './footer'
import "../css/lightbox.css"

export default function Gallery() {
    
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
              <h3 className="breadcrumb__title">Gallery</h3>
              <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="index.php">Home</a></span>
                <span className="dvdr"><i className="fa-regular fa-angle-right" /></span>
                <span>Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contact area start */}
    <div className="tp-about__section " style={{paddingTop: 50, paddingBottom: 30}}>         <div className="container">
        <div className="row">
          <h3 className="tp-section__title mb-15" style={{textAlign: 'center', textDecoration: 'underline'}}>Our Gallery </h3>
          <div className="row">
          <div className='containerr'>
<div className='gallery'>
  <a href='assets/img/gallery/ditinstitute1.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute1.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute2.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute2.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute3.jpg'className='anchor' data-lightbox="models">
  <img src='assets/img/gallery/ditinstitute3.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute4.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute4.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute5.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute5.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute6.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute6.jpg' />

  </a>
  <a href='assets/img/gallery/ditinstitute7.jpg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute7.jpg' />

  </a>
  
  <a href='assets/img/gallery/ditinstitute11.jpeg'className='anchor' data-lightbox="models" >
  <img src='assets/img/gallery/ditinstitute11.jpeg' />

  </a>


</div>

      </div>
      
           
          
         </div></div>
         </div>
      {/* contact area end */}
    </div></main></div>

<Footer/>
    </div>
  )
}
