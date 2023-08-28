import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__box">
            <h4>تواصل معنا عبر حساباتنا في مواقع التواصل</h4>
            <div className="social-media-icons">
              <FaSquareTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaSquareFacebook className="icon" />
            </div>
          </div>
          <div className="footer-content__box">
            <h4>رقم خدمة العملاء</h4>
            <p className="phone-number">
              <FaPhoneFlip />
              +00966555555551
            </p>
            <h4>ساعات العمل</h4>
            <p className="work-time">9:00 صباحًا - 7:00 مساءً</p>
          </div>
          <div className="footer-content__box">
            <h4>وظائف ؟</h4>

            <button className="job-btn">اضغط هنا</button>
          </div>
          <div className="footer-content__box">
            <h4>الاشتراك بالبريد الالكتروني</h4>
            <p>
              اشترك معنا في خدمة البريد الالكتروني عشان توصل العروض اول بأول
            </p>
            <div className="sub">
              <input type="email" placeholder="ادخل بريد الإلكتروني" />
              <button className="sub-btn">اشترك</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
