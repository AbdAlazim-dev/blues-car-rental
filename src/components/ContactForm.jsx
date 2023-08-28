import { FaPhoneFlip } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
function ContactForm() {
  return (
    <section id="contact-form">
      <div className="container">
        <div className="contact-content">
          <div className="contact-content__info">
            <h4>الشكاوى والاقتراحات</h4>
            <p>
              إذا كان لديكم أي شكوى بخصوص تجربتكم مع شركتنا، فنحن نعدكم بأننا
              سنعمل جاهدين لحلها بأسرع وقت ممكن. يرجى توضيح التفاصيل الخاصة
              بالشكوى وإرسالها إلى قسم الشكاوى والاقتراحات الخاص بنا. سنقوم
              بدراستها والتعامل معها بشكل جدي وفعال. بالإضافة إلى ذلك، إذا كان
              لديكم أي اقتراحات لتحسين خدماتنا، فنحن نرحب بأفكاركم ونقترحاتكم.
              نحن نؤمن بأن الابتكار والتطوير المستمر هما الطريقة الأفضل لتلبية
              احتياجات عملائنا الكرام. لذا، يرجى عدم التردد في مشاركة أفكاركم
              واقتراحاتكم معنا. سنقوم بدراسة كل شكوى أو اقتراح بعناية وسنعمل على
              تطبيق التحسينات اللازمة لضمان رضاكم التام. نحن نسعى جاهدين لتقديم
              خدمة استثنائية وتجربة مرضية لكل عميل يختار شركتنا لتأجير السيارات.
              شكرًا لثقتكم بنا ولتعاونكم في تحسين خدماتنا. نحن نتطلع إلى
              الاستماع إلى ملاحظاتكم والعمل معًا لتحقيق رضاكم التام.
            </p>
            <div className="contact-details">
              <div>
                <FaPhoneFlip /> <a href="/">+96655555551</a>
              </div>
              <div>
                <GoMail /> <a href="/">blues51@gmail.com</a>
              </div>
              <div>
                <FaLocationDot />{" "}
                <a href="/">الرياض - المملكة العربية السعودية</a>
              </div>
            </div>
          </div>

          <form className="contact-content__form">
            <label htmlFor="name">الاسم الرباعي</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="مثال : عبدالعظيم عطية كمال"
            />
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="content" placeholder="اكتب محتوى رسالتك هنا">
              الشكوى أو الإقتراح
            </label>
            <textarea
              name="content"
              id="content"
              placeholder="اكتب محتوى رسالتك هنا"
            ></textarea>
            <button type="submit">إرسال</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
