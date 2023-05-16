import React from 'react';
import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex items-center w-1/2 h-full rounded-xl text-white pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div>
        <p className='font-bold text-5xl'>Affordable Price For Car Servicing</p>
        <p className='my-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className="btn btn-accent mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
        </div>
 
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide2" className="btn btn-circle mr-4">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle mr-4">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle mr-4">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle mr-4">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;