import {MantineProvider} from "@mantine/core";

const Mantine = ({children}) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
};

export default Mantine;