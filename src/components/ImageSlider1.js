import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider1() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/18.jpg" />
                    </div>
                   
                    <div className="details">
                        <h2>Mahurtham Sarees<span className="job-title">Starts from 89000/-</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/19.webp" />
                    </div>
                   
                    <div className="details">
                        <h2>Haldhi Ceremony Sarees<span className="job-title">Starts from 59789/-</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/20.webp" />
                    </div>
                  
                    <div className="details">
                    <h2>Reception Sarees<span className="job-title">Starts from 65897/-</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/21.webp" />
                    </div>
                   
                    <div className="details">
                        <h2>Kids wear <span className="job-title">Starts from 2450/-</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default ImageSlider1

//... is called spread operator

//thanks for watching
//pleae subscribe my channel