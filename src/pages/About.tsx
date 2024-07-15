import {BackgroundImage, Box, Title, Image} from "@mantine/core";
import styles from '../styles/About.module.scss'
import BG from '../assets/images/about-bg.png'
import Car from '../assets/images/about-car.png'
import Logo from '../assets/images/soa-logo.png'

const About = () => {
    return (
        <Box className={styles.about}>
            <Title className={styles['about__header']} order={2}>Haqqımızda</Title>
            <BackgroundImage src={BG as string} className={styles['about__bg']}>
                <Box className={styles['about__bg__desc']}>
                    <Box>
                        <BackgroundImage src={Car as string} className={styles['about__bg__desc__bg']} />
                    </Box>
                    <Box>
                        <Box className={styles['about__bg__desc__logo']}>
                            <Image src={Logo} alt='logo' />
                        </Box>
                        <Box className={styles['about__bg__desc__text']}>
                            <p>
                                We are experts in the chartering of commercial cargo vessels.
                                Our foundation is built on the pillars of innovation,
                                professionalism, and sustainable practices.
                            </p>
                            <p>
                                We are experts in the chartering of commercial cargo vessels.
                                Our foundation is built on the pillars of innovation,
                                professionalism, and sustainable practices.
                            </p>
                            <p>
                                We are experts in the chartering of commercial cargo vessels.
                                Our foundation is built on the pillars of innovation
                            </p>
                        </Box>
                    </Box>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default About;

