import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./QuickAccess.css"


export default class Responsive extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-full px-[25%] bg-[#f8f8f2] h-[180px] mt-[20px] mx-auto">
            <p className="text-[30px] w-full text-center mb-5">
                <span className="font-bold">Quick</span> Access
            </p>
            <Slider {...settings} className="text-center">
                <div className="button">
                    <i className="fas fa-mouse text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-keyboard text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-headset text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-headphones text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-hdd text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-memory text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-desktop text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
                <div className="button">
                    <i className="fas fa-laptop text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                </div>
            </Slider>
      </div>
    );
  }
}