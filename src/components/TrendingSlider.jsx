import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrendingSlider = () => {
  const [data, setData] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      const data = await api.json();
      // console.log(data.meals);
      setData(data.meals);
    }
    fetchData();
  }, [])
  var settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };
  return (
    <>
      <div style={{height:'30vh', width:'99%', margin:'auto', overflowX:'hidden'}}>
        <Slider {...settings}
          style={{marginTop:'1rem'}}
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div className='slider2'>
                <img src={d.strMealThumb} alt="" style={{ width: '10rem', height: '6rem'}} />
              </div>
              </Link>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default TrendingSlider