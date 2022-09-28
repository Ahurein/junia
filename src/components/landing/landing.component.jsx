import React, { useContext, useState } from "react";
import "./landing.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CategoriesContext } from "../../contexts/categories.context";
import { useEffect } from "react";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Landing = () => {
  //   const { categoriesMap } = useContext(CategoriesContext);
  //   const [products, setProducts] = useState(null);

  //   useEffect(() => {
  //     setProducts(categoriesMap["new arrivals"]);
  //   }, [categoriesMap]);
  //   console.log("products", products);

  return (
    <div id="landing">
      <p className="title">
        Get your affordable cases from let's case. We are here for you
      </p>
      <div id="slider">
        <h2>Our Latest Additions</h2>
        <Slider {...settings}>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/zRMb89x/am-pm.jpg" />
              <p className="overlay">
                <h2>AM and PM color block case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/y4MTKh3/b-and-w-striped.jpg" />
              <p className="overlay">
                <h2>Black city night case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/fY2SFtr/blue-beach.jpg" />
              <p className="overlay">
                <h2>Blue beach girl case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/LRg35jB/dollar.jpg" />
              <p className="overlay">
                <h2>Dollar case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/PDvhLnZ/girl-boss-trans.jpg" />
              <p className="overlay">
                <h2>Girl boss transparent case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/0sSv0Hp/nasa.jpg" />
              <p className="overlay">
                <h2>NASA and rocket case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/fnvFKSM/intense.jpg" />
              <p className="overlay">
                <h2>Dollar case available for iPhone</h2>
              </p>
            </a>
          </div>
          <div>
            <a href="" className="card">
              <img src="https://i.ibb.co/LRg35jB/dollar.jpg" />
              <p className="overlay">
                <h2>Intense feelings case available for iPhone</h2>
              </p>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
