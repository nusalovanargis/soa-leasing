import Router from "./Router";
import Mantine from "./Mantine";

const Providers = ({children}) => {
    return (
        <Router>
            <Mantine>{children}</Mantine>
        </Router>
    );
};

export default Providers;