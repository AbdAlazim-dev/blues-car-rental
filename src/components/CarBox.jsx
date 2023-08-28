import { useState } from "react";
function CarBox({ data, id }) {
  const [onLoad, setOnLoad] = useState(true);

  return (
    <div>
      {data[id].map((car, index) => {
        return (
          <div className="selectedCar" key={index}>
            <img
              style={{ display: onLoad ? "none" : "block" }}
              src={car.img}
              alt=""
              onLoad={() => {
                setOnLoad(false);
              }}
            />
            {onLoad && <span className="loading"></span>}
            <div key={index} className="car-details">
              <div className="car-details__header">
                <h5>
                  {car.price}
                  <span>/ لليوم الواحد</span>
                </h5>
              </div>
              <div className="car-details__rest">
                <div className="car-details__rest__box">
                  <span>الموديل</span>
                  <span>{car.model}</span>
                </div>
                <div className="car-details__rest__box">
                  <span>الشركة</span>
                  <span>{car.name}</span>
                </div>
                <div className="car-details__rest__box">
                  <span>عدد الركاب</span>
                  <span>{car.passengers}</span>
                </div>
                <div className="car-details__rest__box">
                  <span>نوع الوقود</span>
                  <span>{car.fuel}</span>
                </div>
                <div className="car-details__rest__box">
                  <span>نوع القير</span>
                  <span>{car.gear}</span>
                </div>
              </div>
              <button
                className="book-now"
                onClick={() => {
                  window.scrollTo(0, 500);
                }}
              >
                احجز الآن
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CarBox;
