import { useEffect, useState } from "react";
//icons
import { FaRegTimesCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
// car images import ////////////////////////////////////////////
import Camry2023 from "../images/CarImgages/Camry2023.png";
import Corola2024 from "../images/CarImgages/Corola2024.png";
import Spark from "../images/CarImgages/Spark.jpeg";
import Elntra from "../images/CarImgages/Elntra2024.png";

import Yares2023 from "../images/CarImgages/Yares2023.jpg";
/////////////////////////////////////////////////////////////////
function BookCar() {
  const [errMsg, seterrMsg] = useState(false);
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [carImg, setCarImg] = useState("");
  const [model, setModel] = useState(false);
  //handle change for all inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "carType") {
      setCarType(value);
      setCarImg(value);
    } else if (name === "pickUp") {
      setPickUp(value);
    } else if (name === "dropOff") {
      setDropOff(value);
    } else if (name === "pickUpDate") {
      setPickUpDate(value);
    } else if (name === "dropOffDate") {
      setDropOffDate(value);
    }
  };
  //stop the document scrolling when the model is open
  useEffect(() => {
    if (model) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    //listen to the click outside the model to close it
    const handleUserClick = (e) => {
      if (e.target.classList.contains("overley")) {
        setModel(false);
      }
    };
    document.addEventListener("click", handleUserClick);
    //listen to the esc key to close the model
    const handleUserKeyPress = (e) => {
      if (e.keyCode === 27) {
        setModel(false);
      }
    };
    document.addEventListener("keydown", handleUserKeyPress);

    return () => {
      document.removeEventListener("click", handleUserClick);
      document.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [model]);

  //check if one of the inputs is empty and show error message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickUpDate === "" ||
      dropOffDate === ""
    ) {
      seterrMsg(true);
    } else {
      seterrMsg(false);
      setModel(true);
    }
  };
  const handleModel = (e) => {
    const doneMessage = document.querySelector(".done-message");

    if (e) {
      e.preventDefault();
      if (e.target.id === "close") {
        setModel(!model);
        return;
      }
    }

    //close the model

    setModel(!model);
    //show the done message
    return (doneMessage.style.display = "flex");
  };
  const handleDoneMsg = () => {
    const doneMessage = document.querySelector(".done-message");
    doneMessage.style.display = "none";
  };

  let selectedCar;
  switch (carImg) {
    case "كامري 2023":
      selectedCar = Camry2023;
      break;
    case "كورولا 2024":
      selectedCar = Corola2024;
      break;
    case "سبارك 2017":
      selectedCar = Spark;
      break;
    case "النترا 2023":
      selectedCar = Elntra;
      break;
    case "يارس 2023":
      selectedCar = Yares2023;
      break;
    default:
      selectedCar = "";
  }
  return (
    <section className={`bookCar ${model ? "overley" : null}`}>
      <div className="container">
        <div className="bookCar-content">
          <h3>إحجز الآن</h3>
          {errMsg && (
            <p className="error-message">
              كل الخانات مطلوبة *
              <FaRegTimesCircle />
            </p>
          )}
          <p className="done-message" onClick={handleDoneMsg}>
            تم إرسال طلبك بنجاح سوف يتم ارسال رسالة بتفاصيل الحجز على الرقم الذي
            ادخلته
            <FaRegTimesCircle />
          </p>
          {/* Location and Date form */}
          <form className="pickUp-form" id="pickUp-form">
            <div className="quistion">
              <label htmlFor="carType">اختر نوع السيارة</label>
              <select
                name="carType"
                id="carType"
                value={carType}
                onChange={handleChange}
              >
                <option>أختر سيارتك</option>
                <option value="كامري 2023">كامري 2023</option>
                <option value="كورولا 2024">كورولا 2024</option>
                <option value="سبارك 2017">سبارك 2017</option>
                <option value="النترا 2023">النترا 2023</option>
                <option value="يارس 2023">يارس 2023</option>
              </select>
            </div>
            <div className="quistion">
              <label htmlFor="pickUp">مكان الإستلام</label>
              <select
                id="pickUp"
                name="pickUp"
                onChange={handleChange}
                value={pickUp}
              >
                <option>حدد مكان الاستلام</option>
                <option value="Riyadh">الرياض</option>
                <option value="Albaha">الباحة</option>
                <option value="Qassim">القصيم</option>
                <option value="Jeddah">جدة</option>
                <option value="Dammam">الدمام</option>
                <option value="Abha">أبها</option>
                <option value="Hail">حائل</option>
                <option value="Tabuk">تبوك</option>
                <option value="Jazan">جازان</option>
                <option value="Makkah">مكة</option>
                <option value="Madinah">المدينة</option>
                <option value="Najran">نجران</option>
                <option value="Aljouf">الجوف</option>
                <option value="Alahsa">الأحساء</option>
                <option value="Alqatif">القطيف</option>
                <option value="Alkharj">الخرج</option>
                <option value="Altaif">الطائف</option>
                <option value="Aljubail">الجبيل</option>
                <option value="dubai">دبي</option>
                <option value="abudhabi">أبو ظبي</option>
                <option value="sharjah">الشارقة</option>
                <option value="ajman">عجمان</option>
                <option value="rasalkhaimah">رأس الخيمة</option>
                <option value="Alain">العين</option>
              </select>
            </div>
            <div className="quistion">
              <label htmlFor="dropOff">مكان التسليم</label>
              <select
                id="dropOff"
                name="dropOff"
                value={dropOff}
                onChange={handleChange}
              >
                <option>حدد مكان التسليم</option>
                <option value="Riyadh">الرياض</option>
                <option value="Albaha">الباحة</option>
                <option value="Qassim">القصيم</option>
                <option value="Jeddah">جدة</option>
                <option value="Dammam">الدمام</option>
                <option value="Abha">أبها</option>
                <option value="Hail">حائل</option>
                <option value="Tabuk">تبوك</option>
                <option value="Jazan">جازان</option>
                <option value="Makkah">مكة</option>
                <option value="Madinah">المدينة</option>
                <option value="Najran">نجران</option>
                <option value="Aljouf">الجوف</option>
                <option value="Alahsa">الأحساء</option>
                <option value="Alqatif">القطيف</option>
                <option value="Alkharj">الخرج</option>
                <option value="Altaif">الطائف</option>
                <option value="Aljubail">الجبيل</option>
                <option value="dubai">دبي</option>
                <option value="abudhabi">أبو ظبي</option>
                <option value="sharjah">الشارقة</option>
                <option value="ajman">عجمان</option>
                <option value="rasalkhaimah">رأس الخيمة</option>
                <option value="Alain">العين</option>
              </select>
            </div>
            <div className="quistion" value={pickUpDate}>
              <label htmlFor="pickUpDate">تاريخ الإستلام</label>
              <input
                id="pickUpDate"
                type="date"
                name="pickUpDate"
                onChange={handleChange}
              />
            </div>
            <div className="quistion">
              <label htmlFor="dropOffDate" value={dropOffDate}>
                تاريخ الإرجاع
              </label>
              <input
                id="dropOffDate"
                type="date"
                name="dropOffDate"
                onChange={handleChange}
              />
            </div>
            <input
              className="submit-btn"
              type="submit"
              onClick={handleSubmit}
              value="إحجز الآن"
            />
          </form>
        </div>
      </div>
      {/* Start booking from */}
      <div className={`booking-last ${!model ? "hide" : null}`}>
        <div className="booking-last__header">
          <h2>اكمل تفاصيل الحجز</h2>
          <FaXmark id="close" onClick={handleModel} />
        </div>
        <div className="booking-last__subheading">
          <h3>
            <FaCircleExclamation /> عند اكمالك الحجز سوف تتلقى
          </h3>
          <ul>
            <li>رسالة تأكيد حجزك من خدمة العملاء</li>
            <li>سوف يصلك رسالة بريد على البريد الذي ادخلته بتفاصيل الحجز</li>
          </ul>
        </div>
        <div className="booking-last__car-info">
          <div className="booking-last__car-info__dates">
            <h5>الموقع و التاريخ</h5>
            <div>
              <FaCalendarCheck />
              <span>
                <h6>تاريخ الاستلام ووقت الاستلام</h6>
                {pickUpDate} <input type="time" />
              </span>
            </div>
            <div>
              <FaCalendarCheck />
              <span>
                <h6>تاريخ التسليم ووقت التسليم</h6>
                {dropOffDate} <input type="time" />
              </span>
            </div>
            <div className="pick-up-location">
              <FaLocationDot />
              <span>
                <h6>موقع الإستلام</h6>
                <p>{pickUp}</p>
              </span>
            </div>
            <div className="pick-up-location">
              <FaLocationDot />
              <span>
                <h6>موقع التسليم</h6>
                <p>{dropOff}</p>
              </span>
            </div>
          </div>
          <div className="booking-last__car-info__model">
            <h5>{carType}</h5>
            <img src={selectedCar} alt="the car user choiced" />
          </div>
        </div>
        <div className="booking-last__customer-info">
          <form className="personal-info" id="personal-info">
            <div className="personal-info__col2">
              <span>
                <label htmlFor="fullName">الإسم الرباعي</label>
                <input id="fullName" type="text" name="full-name" />
              </span>
              <span>
                <label htmlFor="idNumber">رقم الهوية</label>
                <input id="idNumber" type="text" name="id-number" />
              </span>
              <span>
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="+9665......."
                />
              </span>
              <span>
                <label htmlFor="age">العمر</label>
                <input id="age" type="text" name="age" />
              </span>
            </div>
            <div className="personal-info__col1">
              <span>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input id="email" type="text" name="email" />
              </span>
              <span>
                <label htmlFor="address">العنوان</label>
                <input id="address" type="text" name="address" />
              </span>
            </div>
            <div className="personal-info__col2">
              <span>
                <label htmlFor="city">المدينة</label>
                <input id="city" type="text" name="city" />
              </span>
              <span>
                <label htmlFor="zip">الرمز البريدي</label>
                <input id="zip" type="text" name="zip" />
              </span>
            </div>
            <span className="email-sub">
              <div>
                <input type="checkbox" />
                <p>إرسال آخر العروض والتحديثات على البريد الإلكتروني</p>
              </div>
              <input type="submit" onClick={handleModel} />
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
export default BookCar;
