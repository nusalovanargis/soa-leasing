import React from 'react';
import {BackgroundImage, Box, Title} from "@mantine/core";
import styles from "../styles/LeasingCalculator.module.scss";
import LeasingCalc from '../assets/images/lizing-calculator.png'

const LeasingCalculator = () => {
    return (
        <Box className={styles.container}>
            <Title className={styles['container__title']} order={2}>Lİzİnq kalkulyatoru</Title>
            <Box className={styles["container__description"]}>
                <Box className={`${styles.container__description__card} ${styles.container__description__calculator}`}>

                </Box>
                <Box className={styles['container__description__card']} >
                    <BackgroundImage className={styles['container__description__card__bg']} src={LeasingCalc as string}></BackgroundImage>
                </Box>
            </Box>
        </Box>
    );
};

export default LeasingCalculator;