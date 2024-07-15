import {BackgroundImage, Box} from "@mantine/core";
import styles from '../styles/Home.module.scss'
import Background from '../assets/images/home-bg.jpg'
import Navbar from "../components/modules/Navbar";
import LeasingOffer from "../components/modules/LeasingOffer";

/**
 * Home page
 * @returns {JSX.Element} The rendered Home component.
 */

const Home = () => {
    return (
        <Box className={styles.container}>
            <BackgroundImage className={styles['container__bg']} src={Background as string}>
                <Navbar />
                <LeasingOffer />
            </BackgroundImage>
        </Box>
    );
};

export default Home;