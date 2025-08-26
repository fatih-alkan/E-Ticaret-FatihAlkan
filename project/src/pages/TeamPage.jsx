import TeamBanner from "../components/TeamBanner";
import TeamHeader from "../components/TeamHeader";
import Team from "../components/Team";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import TeamTry from "../components/TeamTry";

export default function TeamPage(){
    return (
        <>
        <Header/>
        <TeamHeader/>
        <TeamBanner/>
        <Team/>
        <TeamTry/>
        <Footer/>
        </>
    )
}