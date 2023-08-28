import Salih from "../images/TestiImages/salih.jpg";
import adel from "../images/TestiImages/M-adel.png";
import Opinion from "./Opinion";
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="test-content">
          <div className="test-header">
            <h1>كلمات شركاؤنا</h1>
          </div>
          <div className="testimonials-flex">
            <Opinion
              name="محمد عادل"
              job="مدير مكتب هندسي"
              opinion="
              دائمًا استأجر لموظفي شركتي من الموقع لسهولة الحجز وسرعة تنفيذ
              الطلب والتعامل الراقي من قبل موظفي الشركة"
              image={adel}
            />
            <Opinion
              name="صالح سعد"
              job="مدير مشاريع"
              opinion="استأجرت من الموقع في رحلة عمل من السعودية الى البحرين وكانت
                تجربة ممتازة جدًا السيارة كانت في حالية جيدة ونظيفة جدًا"
              image={Salih}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
