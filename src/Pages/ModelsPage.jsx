import PagesHero from "../components/PagesHero";
import VehiclesSection from "../components/VehiclesSection";
import Git from "../components/Git";
import Footer from "../components/Footer";
function ModelsPage() {
  return (
    <>
      <PagesHero
        section="إسطولنا"
        sectionDiscription="السيارات المتاحة في الاسطول"
      />
      <VehiclesSection />
      <Git />
      <Footer />
    </>
  );
}
export default ModelsPage;
