import HeaderImage from "../images/ChooseImages/chooseUs.png";
import background from "../images/ChooseImages/wheel.png";
import Feature1 from "../images/FeaturesImages/feature2.png";
import Feature2 from "../images/FeaturesImages/feature1.png";
import Feature3 from "../images/FeaturesImages/feature3.png";
function ChooseUs() {
  return (
    <section id="choose-us">
      <div className="container">
        <div className="choose-content"></div>

        <img
          className="choose-content__cars-images"
          src={HeaderImage}
          alt="Three cars"
        />

        <div className="features">
          <div className="features__box">
            <h4>ايش المختلف في بلوز ؟</h4>
            <h2>أفضل العروض والخدمات بأسعار لا تقبل المنافسة</h2>
            <p>
              نحن نقدم أفضل العروض والخدمات بأسعار لا تقبل المنافسة. سواء كنت
              تبحث عن سيارة صغيرة للتنقل في المدينة أو سيارة فاخرة لرحلة طويلة،
              الموثوق لخدمة تأجير السيارات يوفر لك مجموعة واسعة من الخيارات
              بأسعار تنافسية. تعاونا مع أفضل شركات تأجير السيارات في السوق لضمان
              جودة الخدمة وموثوقيتها. نحن نهتم بتجربتك وراحتك،
            </p>
          </div>
          <div className="features__box2">
            <div className="features__box2__box">
              <img src={Feature1} alt="an svg icon" />
              <div className="feature-text">
                <h4>نسلمك ونستلم منك في كل دول الخليج</h4>
                <p>
                  مكاتبنا موجودة في كل المطارات الدولية في دول الخليج كل اللي
                  عليك تأكد حجزك وموعد وصولك وبتلاقي سيارتك في باب المطار.
                </p>
              </div>
            </div>
            <div className="features__box2__box">
              <img src={Feature2} alt="an svg icon" />
              <div className="feature-text">
                <h4>اسعار ممتازة</h4>
                <p>
                  احصل على كل ما تحتاجه بسعر واحد مناسب وشفاف من خلال سياسة
                  التسعير الشاملة لدينا.
                </p>
              </div>
            </div>
            <div className="features__box2__box">
              <img src={Feature3} alt="an svg icon" />
              <div className="feature-text">
                <h4>تأمين على كل المركبات المستأجرة</h4>
                <p>
                  نحن نقدم تأمينًا شاملاً على جميع المركبات المستأجرة لدينا مع
                  خيار التأمين الإضافي للمسافرين والممتلكات الشخصية. يمكنك
                  الاختيار من بين خيارات التأمين الإضافية لدينا للحصول على
                  الحماية الأمثل أثناء القيادة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ChooseUs;
