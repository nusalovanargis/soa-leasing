import Providers from "../components/providers";
import Navigation from "../pages";
import LandingPage from "../pages/LandingPage.tsx";

const App = () => {
    return (
        <Providers>
            <LandingPage />
        </Providers>
    );
};

export default App;