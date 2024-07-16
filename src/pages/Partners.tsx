import React from 'react';
import { Box } from "@mantine/core";
import styles from '../styles/Partners.module.scss';
import VISA from '../assets/images/visa-logo.png';
import MoneyGram from '../assets/images/money-gram-logo.png';
import Paypal from '../assets/images/Paypal.png';
import Square from '../assets/images/square-logo.png';
import AliPay from '../assets/images/alipay.png';
import Ethereum from '../assets/images/ethereum.png';

/**
 * Partners page
 * @returns {JSX.Element} The rendered Partners component.
 */


const Partners: React.FC = () => {
    const partners: string[] = [VISA, MoneyGram, Paypal, Square, AliPay, Ethereum];

    return (
        <Box className={styles['partners']}>
            <h2 className={styles['partners__header']}>Partnyorlar</h2>
            <Box className={styles['partners__logos']}>
                {partners.map((partner, index) => (
                    <img
                        key={index}
                        src={partner}
                        alt={`Partner ${index}`}
                        className={styles['partners__logo']}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Partners;
