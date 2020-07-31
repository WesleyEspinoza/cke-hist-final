import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../common/styles/carousel.css';


export default function CarouselComponent() {
      
    return (
        
        <div class="carousel-wrapper">
            <Carousel infiniteLoop={true} autoPlay={true} stopOnHover={false} interval={7000} showThumbs={false}>
                <div>
                    <img width='1000' height='500' src="./banner4.jpg"/>
                </div>
                <div>
                    <img width='1000' height='500' src="./banner1.png" />
                </div>
                <div>
                    <img width='1000' height='500' src="./banner9.jpg" />
                </div>
                <div>
                    <img width='1000' height='500' src="./banner2.png" />
                </div>
                <div>
                    <img width='1000' height='500' src="./banner3.png" />
                </div>
            </Carousel>
        </div>
    );
}