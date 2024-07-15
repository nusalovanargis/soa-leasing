import { Anchor, Box, Image } from '@mantine/core';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/images/soa-logo.png';
import styles from '../../styles/Navbar.module.scss';

/**
 * Navbar component provides the top navigation bar with logo and links.
 * @returns {JSX.Element} The rendered Navbar component.
 */

const Navbar = () => {
    return (
        <Box className={styles.navbar}>
            {/* Logo Container */}
            <Box className={styles['navbar__logo-container']}>
                <Image
                    className={styles['navbar__logo']}
                    src={logo}
                    alt="SOA Logo"
                />
            </Box>

            {/* Navigation Links */}
            <Box className={styles['navbar__list-group']}>
                <Anchor className={styles['navbar__list-group-anchor']} href="tel:050-000-00-00">
                    <FaPhoneAlt className={styles['navbar__list-group-anchor']} aria-hidden="true" />
                    <span>050-000-00-00</span>
                </Anchor>
                <Anchor className={styles['navbar__list-group-anchor']} href="#about">
                    Haqqımızda
                </Anchor>
                <Anchor className={styles['navbar__list-group-anchor']} href="#services">
                    Xidmətlərimiz
                </Anchor>
                <Anchor className={styles['navbar__list-group-anchor']} href="#contact">
                    Bizimlə əlaqə
                </Anchor>
            </Box>
        </Box>
    );
};

export default Navbar;
