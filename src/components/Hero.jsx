import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import CarImg from "../images/HeroImages/car-hero.png";
import BgImg from "../images/HeroImages/Bg-Image.png";

function Hero() {
  const [scrollTop, setScrollTop] = useState(false);

  // Scroll to top button
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //scroll to booking section
  const handleScrollToBooking = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  // Scroll to top button appear
  useEffect(() => {
    const showScorllToTop = () => {
      if (window.scrollY > 500) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    window.addEventListener("scroll", showScorllToTop);
    return () => {
      window.removeEventListener("scroll", showScorllToTop);
    };
  });
  return (
    <section className="hero">
      <img className="bgImg" src={BgImg} alt="Background image" />

      <div className="container">
        <div className="hero-content">
          {scrollTop && (
            <div className="scroll-to-top" onClick={handleScrollToTop}>
              <FaAngleUp />
            </div>
          )}

          <h3>لا تأجل واحجز الآن</h3>
          <h1>
            استأجر <span>سيارتك</span> الآن واستمتع بأفضل العروض
          </h1>
          <p>
            احجز الآن واستمتع بتجربة استئجار لا مثيل لها! نحن نقدم مجموعة واسعة
            من السيارات الفاخرة والمريحة بأسعار مناسبة, سواء كنت تبحث عن سيارة
            للسفر أو للتنقل في المدينة, فإننا نضمن لك تجربة ممتعة ومريحة, تصفح
            إسطولنا واحجز الآن بسهولة, نحن هنا لتلبية احتياجاتك وجعل رحلتك
            مثالية.
          </p>
          <div className="hero-btns">
            <button className="btn __primary" onClick={handleScrollToBooking}>
              إحجز الآن
              <FaCalendarCheck />
            </button>
            <button className="btn __secondary">اعرف المزيد</button>
          </div>
        </div>
        <img className="carImg" src={CarImg} alt="Car image" />
      </div>
    </section>
  );
}
export default Hero;
