import React from 'react'
import Carousel from 'react-multi-carousel';
import img1 from "../images/prajwal photos.jpg";
import img2 from "../images/WhatsApp Image 2024-04-26 at 12.06.51 PM.jpeg";
import img3 from "../images/IMG_20240220_080641_821.jpg";
import 'react-multi-carousel/lib/styles.css'
import "../page/CSS/ABout.css";

const About = () => {
  const resOptions = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    
  };
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="main-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="main-item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={resOptions}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        <div>
          <img src={img1} />
          <h1>Prajwal</h1>
          <p><h4>Feedback</h4></p>
        </div>
        <div>
          <img src={img2} />
          <h1>Harshal</h1>
        </div>
        <div>
          <img src={img3} />
          <h1>Vishal</h1>
        </div>
      </Carousel>
    </div>

  )
}

export default About