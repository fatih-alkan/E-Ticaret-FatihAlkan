import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AboutBanner from "../components/AboutBanner";
import AboutContent from "../components/AboutContent";
import AboutVideo from "../components/AboutVideo";
import TeamPage from "../components/Team";
import AboutCompanies from "../components/AboutCompanies";
import Brands from "../components/Brands";
import AboutGrow from "../components/AboutGrow";
export default function AboutPage() {
    return (
        <>
            <Header />
            <AboutBanner/>
            <AboutContent/>
            <AboutVideo/>
            <TeamPage limit={3} />
            <AboutCompanies/>
            <Brands/>
            <AboutGrow/>
            <Footer />
        </>
    )
}