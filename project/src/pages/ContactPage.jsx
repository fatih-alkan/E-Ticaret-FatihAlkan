import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactBanner from "../components/ContactBanner";
import ContactOffice from "../components/ContactOffice";
import ContactMeet from "../components/ContactMeet";


export default function ContactPage() {

  return (
    <>
    <Header/>
    <ContactBanner/>
    <ContactOffice/>
    <ContactMeet/>
    <Footer/>
    </>
    
  );
}
