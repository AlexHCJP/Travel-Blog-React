import React from 'react'
import Slider from 'react-slick'
import CityBlock from './CityBlock'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    arrows: false,
}
const HomeSliderCity = ({cities}) => {
    return (
        <Slider {...settings}>
            {cities.map((city, ind) => {
                return <CityBlock {...city} key={ind}/>
            })}
        </Slider>
    )
}

export default HomeSliderCity