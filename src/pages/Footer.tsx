import React from 'react';
import {Anchor, BackgroundImage, Box, Button, Image} from "@mantine/core";
import BG from '../assets/images/footer-bg.png';
import styles from '../styles/Footer.module.scss';
import Logo from '../assets/images/soa-light.png'
import TextField from "../components/ui/TextField.tsx";

const Footer = () => {
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
                        <TextField className={styles['contact__bg__contact__card__TextField']} placeholder='Email' />
                        <Button>Göndərin</Button>
                    </Box>
                </Box>
                <Box className={styles['container__bg__privacy']}>
                    <p>© Copyright - © 2024. Bütün hüquqlar qorunur</p>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default Footer;