// can you help me to convert sweeper v7 code to v10
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Gallery = () => {
    useEffect(() => {
      const galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true
      });
  
      const gallerySlider = new Swiper('.gallery-slider', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 6,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
  
      gallerySlider.controller.control = galleryThumbs;
      galleryThumbs.controller.control = gallerySlider;
    }, []);
  
    return (
      <div className="gallery">
        <div className="swiper-container gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557060416-1418aefb165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1677108581323-7050fbfd528f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557060416-1418aefb165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1677108581323-7050fbfd528f?ixlib=rb-4.0.3&ixid=Mnwx.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <a href="#" className="more">
            see more
          </a>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  
  