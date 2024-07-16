import Home from "./Home";
import AdvantagesOfCooperation from "./AdvantagesOfCooperation";
import CarModels from "./CarModels";
import About from "./About";
import Contact from "./Contact";
import Partners from "./Partners.tsx";
import Footer from "./Footer.tsx";

/**
 * LandingPage page
 * @returns {JSX.Element} The rendered LandingPage component.
 */

const LandingPage = () => {
    return (
        <>
            <Home/>
            <AdvantagesOfCooperation />
            <CarModels />
            <About />
            <Contact />
            <Partners />
            <Footer/>
        </>
    );
};

export default LandingPage;