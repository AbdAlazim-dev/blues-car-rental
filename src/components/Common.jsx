import React, { useState } from "react";

function Common() {
  const [active, setActive] = useState("");

  const handleClick = (id) => {
    setActive(id === active ? "" : id);
  };
  const handleAnswerClass = (id) => {
    return id === active ? "active" : null;
  };
  const handleQuistionClass = (id) => {
    return id === active ? "active-quistion" : null;
  };

  return (
    <section id="common-quis">
      <div className="container">
        <div className="common-content">
          <div className="common-content__header">
            <h2>أسئلة شائعة</h2>
            <p>
              بعض الاسئلة المتكررة حول كيفية الحجز والدفع والتأمين والإلغاء
              والتغييرات
            </p>
          </div>
          <div className="common-content__quistions">
            <div className="quistion-box">
              <h5
                className={`quistion ${handleQuistionClass("q1")}`}
                onClick={() => {
                  handleClick("q1");
                }}
              >
                1. كيف يمكنني حجز سيارة عبر موقعك؟
              </h5>
              <p className={`answer ${handleAnswerClass("q1")}`}>
                يمكنك حجز سيارة عبر موقعنا بسهولة وسرعة. قم بتصفح صفحتنا
                الرئيسية واختر المدينة وتاريخ الإستلام والتسليم. ستظهر لك قائمة
                بالسيارات المتاحة، حدد السيارة التي ترغب في استئجارها وقم بتعبئة
                نموذج الحجز بالمعلومات المطلوبة. بعد ذلك، قم بتأكيد الحجز وسيتم
                إرسال تأكيد الحجز إلى رقمك
              </p>
            </div>
            <div className="quistion-box">
              <h5
                className={`quistion ${handleQuistionClass("q2")}`}
                onClick={() => {
                  handleClick("q2");
                }}
              >
                2. هل يجب علي أن أدفع رسوم إضافية للتأمين
              </h5>
              <p className={`answer ${handleAnswerClass("q2")}`}>
                نحن نقدم خدمة التأمين الشامل لجميع السيارات التي نؤجرها. يتم
                تضمين تكلفة التأمين في السعر الإجمالي المعروض عند عملية الحجز.
                وبالتالي، لن تدفع أي رسوم إضافية للتأمين.
              </p>
            </div>
            <div className="quistion-box">
              <h5
                className={`quistion ${handleQuistionClass("q3")}`}
                onClick={() => {
                  handleClick("q3");
                }}
              >
                .3هل يمكنني إلغاء حجزي؟ وهل سأحصل على استرداد للمبلغ المدفوع؟
              </h5>
              <p className={`answer ${handleAnswerClass("q3")}`}>
                يمكنك إلغاء حجزك في أي وقت قبل موعد بدء الإيجار. ومع ذلك، يتم
                تطبيق سياسة إلغاء تعتمد على فترة الإشعار المسبق. في حالة إلغاء
                الحجز في غضون 48 ساعة من موعد بدء الإيجار، قد يتم خصم رسوم إلغاء
                معينة. يُرجى الاطلاع على شروط وأحكام الحجز لدينا للحصول على مزيد
                من التفاصيل حول سياسة الإلغاء واسترداد المبالغ المدفوعة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Common;
