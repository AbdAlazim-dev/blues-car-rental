import PagesHero from "../components/PagesHero";
import TestSlider from "../components/TestSlider";
import Git from "../components/Git";
import Footer from "../components/Footer";
function TestimonialsPage() {
  return (
    <>
      <PagesHero section="آراء العملاء" sectionDiscription="تجارب العملاء" />
      <TestSlider />
      <Git />
      <Footer />
    </>
  );
}
export default TestimonialsPage;
