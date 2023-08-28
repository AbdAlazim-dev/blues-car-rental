import image from "../images/AboutImages/About1.png";
import image2 from "../images/AboutImages/About2.png";
import image3 from "../images/AboutImages/About3.png";
import bigImage from "../images/AboutImages/About-big.png";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-content__img">
            <img src={bigImage} alt="Riyadh city" />
          </div>
          <div className="about-content__info">
            <h4>تعرف أكثر عن الشركة وخدماتها</h4>
            <h2>تفاصيل أكثر عن بلوز لتأجير السيارات</h2>
            <p>
              شركتنا هي شركة رائدة في مجال تأجير السيارات، حيث نقدم خدماتنا
              لعملائنا كحلقة وصل بينهم وبين شركات الإيجار المختلفة. نحن نعتبر
              أنفسنا شركاء لعملائنا، حيث نسعى جاهدين لتلبية احتياجاتهم وتوفير
              أفضل تجربة تأجير سيارات. نحن نفهم أهمية الثقة والموثوقية في عملية
              تأجير السيارات، ولذا فإننا نضع هذه القيم في صميم أعمالنا. قبل
              تأجير أي سيارة، نقوم بفحصها بدقة وشمولية للتأكد من حالتها الجيدة
              وأنها تلبي المعايير العالية التي نحددها. نحن نستخدم أحدث التقنيات
              والأجهزة لضمان أن جميع السيارات في أسطولنا تعمل بشكل مثالي وتتوافق
              مع معايير السلامة والجودة. بالإضافة إلى ذلك، نحن نقدم خدمة عملاء
              استثنائية لضمان رضا عملائنا. فريقنا المتفاني والمؤهل يعمل بجد
              لتوفير المشورة والدعم اللازم لعملائنا في اختيار السيارة المناسبة
              وتلبية احتياجاتهم الخاصة. نحن نسعى جاهدين لتقديم تجربة سهلة ومريحة
              لعملائنا، حيث نقدم خدمات التسليم والاستلام في الموقع المطلوب وفي
              الوقت المحدد.
            </p>
            <div className="stat">
              <div>
                <img src={image} alt="number cars" />
                <span>
                  <h4>34</h4>
                  <p>نوع سيارة</p>
                </span>
              </div>
              <div>
                <img src={image3} alt="how many office" />
                <span>
                  <h4>28</h4>
                  <p>مكتب ايجار</p>
                </span>
              </div>
              <div>
                <img src={image2} alt="how many office" />
                <span>
                  <h4>20</h4>
                  <p>محطة صيانة</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
