import { useState, UseEffect, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Opinion from "./Opinion";
import avatar1 from "../images/TestiImages/avatar1.png";
import avatar2 from "../images/TestiImages/avatar2.png";
import avatar3 from "../images/TestiImages/avatar3.png";
import avatar4 from "../images/TestiImages/avatar4.png";

const opinionsArray = [
  {
    name: "إسماعيل محمد",
    opinion: "تجربة ممتازة جدًا الحجز كان في غاية السهولة",
    img: avatar1,
  },
  {
    name: "أحمد",
    opinion:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. ",
    img: avatar2,
  },
  {
    name: "Michael Smith",
    opinion:
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
    img: avatar3,
  },
  {
    name: "خالد الزهراني",
    opinion:
      "السيارة كانت في جودة ممتازة عندما استلمتها وانصح بشدة بالتعامل مع هذا الموقع",
    img: avatar4,
  },
];
const renderedOpinions = opinionsArray.map((opinion, index) => {
  return (
    <motion.div key={index} className="item">
      <Opinion
        name={opinion.name}
        job={opinion.job}
        opinion={opinion.opinion}
        image={opinion.img}
      />
    </motion.div>
  );
});

function TestSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section className="Testimonials-slider">
      <div className="container">
        <div className="testi-header">
          <h2>آراء العملاء</h2>
          <p>
            اكتشف التأثير الإيجابي الذي أحدثناه على عملائنا من خلال قراءة
            شهاداتهم. لقد استفاد عملاؤنا من خدمتنا والنتائج التي حققناها، وهم
            متشوقون لمشاركة تجاربهم الإيجابية معك.
          </p>
        </div>
        <div className="testimonials-slider-content">
          <motion.div
            className="carousel"
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              dragConstraints={{ left: 0, right: width }}
              drag="x"
              className="carousel-inner"
            >
              {renderedOpinions}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default TestSlider;
