import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import Plan from "../components/Plan";
import PickCar from "../components/PickCar";
import Save from "../components/Save";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/testimonials";
import Common from "../components/Common";
import Mobile from "../components/Mobile";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Hero />
      <BookCar />
      <Plan />
      <PickCar />
      <Save />
      <ChooseUs />
      <Testimonials />
      <Common />
      <Mobile />
      <Footer />
    </div>
  );
}
export default Home;
