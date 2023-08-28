import AppStore from "../images/MobileImages/appstore.png";
import GooglePlay from "../images/MobileImages/googleplay.png";

function Mobile() {
  return (
    <section id="mobile-app">
      <div className="container">
        <div className="mobile-app-content">
          <h2>حمل التطبيق وسهل عملية الحجز أكثر</h2>
          <p>
            سهلنا عليك عملية الحجز أكثر وضفنا تطبيق فيه كل المميزات التي في
            الموقع وزيادة
          </p>
          <div className="app-butons">
            <img src={AppStore} alt="downloadn the app in appstore" />
            <img src={GooglePlay} alt="downloadn the app in GooglePlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mobile;
