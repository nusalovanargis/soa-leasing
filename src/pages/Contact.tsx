import {Anchor, BackgroundImage, Box, Title, Button} from "@mantine/core";
import styles from '../styles/Contact.module.scss'
import BG from '../assets/images/contact-bg.png'
import {FaPhoneAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import TextField from "../components/ui/TextField.tsx";

const Contact = () => {
    return (
        <Box className={styles['contact']}>
            <Title order={2} className={styles['contact__header']}>Bİzİmlə əlaqə</Title>
            <Box className={styles['contact__bg']}>
                <BackgroundImage className={styles['contact__bg__contact']} src={BG as string}>
                    <Box className={styles['contact__bg__contact__card']} >
                        <Box>
                                <iframe width="525" height="245" frameBorder="0" scrolling="no" marginHeight="0"
                                        marginWidth="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=520&amp;hl=en&amp;q=Xocal%C4%B1%20Pr-Ti%2037,%20Demirchi%20Tower%2015-ci%20m%C9%99rt%C9%99b%C9%99+(Soa%20leasing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.gps.ie/">gps devices</a></iframe>
                        </Box>
                        <Box className={styles['contact__bg__contact__card__desc']}>
                            <Anchor className={styles['contact__bg__contact__card__desc__anchor']} href="tel:050-000-00-00">
                                <FaPhoneAlt aria-hidden="true" />
                                <span>050-000-00-00</span>
                            </Anchor>
                            <Anchor className={styles['contact__bg__contact__card__desc__anchor']} href="mail:soalising@gmail.com">
                                <MdEmail />
                                <span>soalising@gmail.com</span>
                            </Anchor>
                            <Anchor className={styles['contact__bg__contact__card__desc__anchor']} href="tel:050-000-00-00">
                                <CiLocationOn />
                                <span>Xocalı Pr-Ti 37, Demirchi Tower 15-ci mərtəbə</span>
                            </Anchor>
                        </Box>
                    </Box>
                    <Box className={`${styles.contact__bg__contact__card} ${styles.contact__bg__contact__card__form}`}>
                        <TextField placeholder="Ad" className={styles['contact__bg__contact__card__TextField']}/>
                        <TextField placeholder="Soyad" className={styles['contact__bg__contact__card__TextField']}/>
                        <TextField placeholder="E-mail" className={styles['contact__bg__contact__card__TextField']}/>
                        <TextField placeholder="Telefon" type='tel' className={styles['contact__bg__contact__card__TextField']}/>
                        <textarea placeholder="Mesajınızı daxil edin"></textarea>
                        <Box className={styles['contact__bg__contact__card__btnContainer']}>
                            <Button className={styles['contact__bg__contact__card__btn']}>
                                Göndərin
                            </Button>
                        </Box>
                    </Box>
                </BackgroundImage>
            </Box>
        </Box>
    );
};

export default Contact;