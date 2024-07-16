import React from 'react';
import {Anchor, BackgroundImage, Box, Button, Image} from "@mantine/core";
import BG from '../assets/images/footer-bg.png';
import styles from '../styles/Footer.module.scss';
import Logo from '../assets/images/soa-light.png'
import TextField from "../components/ui/TextField.tsx";

/**
 * Footer page
 * @returns {JSX.Element} The rendered Footer component.
 */

const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    return (
        <Box className={styles.container} >
            <BackgroundImage className={styles['container__bg']} src={BG as string}>
                <Box className={styles['container__bg__description']}>
                    <Box className={styles['container__bg__description__logo']}>
                        <Image className={styles['container__bg__description__logo__img']} src={Logo} alt="logo" />
                    </Box>
                    <Box className={styles['container__bg__description__info']}>
                        <Anchor className={styles['container__bg__description__info__anchor']}>Haqqımızda</Anchor>
                        <Anchor className={styles['container__bg__description__info__anchor']}>Xidmətlərimiz</Anchor>
                        <Anchor className={styles['container__bg__description__info__anchor']}>Bizimlə əlaqə</Anchor>
                    </Box>
                    <Box className={styles['container__bg__description__contact']}>
                        <p className={styles['container__bg__description__contact__title']}>
                            Ən son paylaşım və əməliyyatlarımızdan daha tez məlumat ala bilərsiniz.
                        </p>
                        <Box className={styles['container__bg__description__contact__box']}>
                            <TextField className={styles['container__bg__description__contact__input']} placeholder='Email' />
                            <Button className={styles['container__bg__description__contact__btn']}>Göndərin</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles['container__bg__privacy']}>
                    <p>© Copyright - © {currentYear}. Bütün hüquqlar qorunur</p>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default Footer;