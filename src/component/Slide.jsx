import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Slide extends Component {
  render() {
    const { customClass } = this.props;
    const { customClassImg } = this.props;
    const { customClassImgMobile } = this.props;

    const imgs = [
      { desktop: 'slide1.png', mobile: 'slide1_mobile.png' },
      { desktop: 'slide2.png', mobile: 'slide2_mobile.png' },
      { desktop: 'slide3.png', mobile: 'slide3_mobile.png' },
      { desktop: 'slide4.png', mobile: 'slide4_mobile.png' },
    ];

    const isMobile = window.innerWidth < 720;
    var settings = {};
    
    if(isMobile){
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            arrows: false, // Removendo as setas de navegação
          }   
    }else{
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            arrows: true, // Removendo as setas de navegação
        }
    }


    return (
      <div className={`${customClass}`}>
        <Slider {...settings}>
          {imgs.map((img, index) => (
            <div className="w-full" key={index}>
              <img
                src={isMobile ? img.mobile : img.desktop}
                alt=""
                className={`${isMobile ? customClassImgMobile : customClassImg}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
