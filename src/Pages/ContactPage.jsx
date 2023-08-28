import PagesHero from "../components/PagesHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Git from "../components/Git";

function ContactPage() {
  return (
    <>
      <PagesHero section="تواصل معنا" />
      <ContactForm />
      <Git />
      <Footer />
    </>
  );
}
export default ContactPage;
