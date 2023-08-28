import Vehicles from "./Vehicle";
import { FaCarSide } from "react-icons/fa6";
function VehiclesSection() {
  return (
    <section id="vehicles">
      <div className="container">
        <div className="vehicles-header">
          <h2>السيارات المتوفرة اليوم</h2>
        </div>
        <div className="vehicles-content">
          {Vehicles.map((vehicle, index) => {
            return (
              <div className="vehicles-content__box" key={index}>
                <div className="img-container" key={vehicle.index}>
                  <img src={vehicle.image} alt="car Image" />
                </div>
                <div className="vehicle-info">
                  <div className="mark-price">
                    <span>{vehicle.name}</span>
                    <span>{vehicle.price}SR/ لليوم الواحد</span>
                  </div>
                  <div className="details">
                    <span>
                      {" "}
                      <FaCarSide />
                      {vehicle.gear}
                    </span>
                    <span>
                      {vehicle.mark}
                      <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide />
                      {vehicle.passengers} ركاب
                    </span>
                    <span style={{ color: "green" }}>
                      {vehicle.fuel}
                      <FaCarSide />
                    </span>
                  </div>
                  <a href="/">احجز</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default VehiclesSection;
