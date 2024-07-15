import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import AdvantagesOfCooperation from "./AdvantagesOfCooperation";

const Navigation = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/'} element={<AdvantagesOfCooperation />} />
        </Routes>
    );
};

export default Navigation;