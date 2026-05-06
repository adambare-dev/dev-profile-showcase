import Parent from "./assets/Parent";
import Compo1 from "./assets/Compo1";
//
import Header from "./Header";
import Navigations from "./Navs";
import Footer from "./Footer";
import Content from "./Content";
import Contact from "./Contact";
//
import Profile_card from "./Profile-card";

function App() {


    return (
        <>
            <Navigations />
            <Header />
            <div className="container">
                <h1>Profiles</h1>
                <p>meet some of our amaizing stafs</p>
                <div className="profile-container">
                    <Profile_card
                        name={"Sara"}
                        image="./pexels-divinetechygirl-1181354.jpg"
                        job="UI & UX desingner" />
                    <Profile_card
                        name={"Adam"}
                        image="./profilecaerd2.jpg"
                        job="back end developer" />
                    <Profile_card
                        name={"John doe"}
                        image="./profill-card1.jpg"
                        job="front end developer" />
                </div>
            </div>

            <Content />
            <Contact />
            <Footer />






        </>
    );
}
export default App;
