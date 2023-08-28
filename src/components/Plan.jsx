import Easy from "../images/PlanImages/easy.png";
import Price from "../images/PlanImages/price.png";
import Redom from "../images/PlanImages/redom.png";

function Plan() {
  return (
    <section id="plan">
      <div className="container">
        <div className="plan-header">
          <h4>خطط لرحلتك الآن</h4>
          <h2>اسهل موقع لتأجير السيارات</h2>
        </div>
        <div className="plan-content">
          <div className="plan-content__box">
            <img src={Price} alt="svg img" />
            <h4>أفضل الأسعار</h4>
            <p>موقعنا يوفر لك أفضل الأسعار والعروض المميزة على جميع السيارات</p>
          </div>
          <div className="plan-content__box">
            <img src={Redom} alt="svg img" />
            <h4>نضمن لك حقك</h4>
            <p>
              ٍ نضمن لك حقك في الحصول على سيارة مطابقة لما تم حجزها, اسطولنا
              يحصل على صيانة دورية ومنتظمة لضمان حصولك على سيارة بحالة ممتازة
              وجاهزة للاستخدام
            </p>
          </div>
          <div className="plan-content__box">
            <img src={Easy} alt="svg img" />
            <h4>عملية الحجز سهلة ومريحة</h4>
            <p>
              ما عليك الا إنك تختار سيارتك ووقت الاستلام والتسليم والمكان وخلي
              الباقي علينا, نقدم لك واجهة سهلة الاستخدام تسمح لك بالبحث والحجز
              بضع نقرات فقط، مع تأكيد فوري لحجزك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Plan;
