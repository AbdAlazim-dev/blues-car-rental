import { useState } from "react";
import CarBox from "./CarBox";
import CarData from "./CarsData";

function PickCar() {
  const [id, setId] = useState("btn1");
  const [colorBtn, setColorBtn] = useState("btn1");
  //create a function that will change the id and the color of the button
  const handleBtnClick = (e) => {
    setId(e.target.id);
    setColorBtn(e.target.id);
  };
  const handleBtnColor = (id) => {
    return id === colorBtn ? "coloredBtn" : "";
  };

  //create a funcion will change the color of the button when clicked

  return (
    <section id="pick-car">
      <div className="container">
        <div className="pick-car-content">
          <div className="pick-car-content__header">
            <h4>الموديلات المتوفرة</h4>
            <h2>سيارات مميزة في إسطولنا</h2>
            <p>اختر سيارة من اسطولنا الواسع واستمتع برحلتك القادمة</p>
          </div>
          <div className="pick-car-content__car-info">
            <div className="pick-car-content__car-info__carbtns">
              <button
                className={`${handleBtnColor("btn1")}`}
                onClick={handleBtnClick}
                id="btn1"
              >
                Yares 2023
              </button>
              <button
                className={`${handleBtnColor("btn2")}`}
                onClick={handleBtnClick}
                id="btn2"
              >
                Corolla 2024
              </button>
              <button
                className={`${handleBtnColor("btn3")}`}
                onClick={handleBtnClick}
                id="btn3"
              >
                Elentra 2023
              </button>
              <button
                className={`${handleBtnColor("btn4")}`}
                onClick={handleBtnClick}
                id="btn4"
              >
                Spark 2017
              </button>
              <button
                className={`${handleBtnColor("btn5")}`}
                onClick={handleBtnClick}
                id="btn5"
              >
                Camry 2023
              </button>
            </div>
            <div>
              {id === "btn1" && <CarBox data={CarData} id={0} />}
              {id === "btn2" && <CarBox data={CarData} id={1} />}
              {id === "btn3" && <CarBox data={CarData} id={2} />}
              {id === "btn4" && <CarBox data={CarData} id={3} />}
              {id === "btn5" && <CarBox data={CarData} id={4} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PickCar;
