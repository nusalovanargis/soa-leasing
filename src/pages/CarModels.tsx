import {BackgroundImage, Box, Title} from "@mantine/core";
import styles from '../styles/CarModels.module.scss';
import CarModelOne from '../assets/images/model-one.png';
import CarModelTwo from '../assets/images/model-two.png';
import CarModelThree from '../assets/images/model-three.png';

const CarModels = () => {
    return (
        <Box className={styles.carModels}>
            <Box className={styles['carModels__header']}>
                <Title order={2} className={styles['carModels__header__text']}>Təklİf etdİyİmİz avtomobİl modellərİ</Title>
            </Box>
            <Box className={styles['carModels__cards']}>
                <Box className={styles['carModels__cards__card']}>
                    <Box className={styles['carModels__cards__card__bg']}>
                        <BackgroundImage className={styles['carModels__cards__card__bg__car']} src={CarModelOne as string} />
                    </Box>
                    <Box className={styles['carModels__cards__card__text']}>
                        <Title order={2} className={styles['carModels__cards__card__text__desc']}>
                            Avtomobİl modelİnİn adı
                        </Title>
                    </Box>
                </Box>
                <Box className={styles['carModels__cards__card']}>
                    <Box className={styles['carModels__cards__card__bg']}>
                        <BackgroundImage className={styles['carModels__cards__card__bg__car']} src={CarModelTwo as string} />
                    </Box>
                    <Box className={styles['carModels__cards__card__text']}>
                        <Title order={2} className={styles['carModels__cards__card__text__desc']}>
                            Avtomobİl modelİnİn adı
                        </Title>
                    </Box>
                </Box>
                <Box className={styles['carModels__cards__card']}>
                    <Box className={styles['carModels__cards__card__bg']}>
                        <BackgroundImage className={styles['carModels__cards__card__bg__car']} src={CarModelThree as string} />
                    </Box>
                    <Box className={styles['carModels__cards__card__text']}>
                        <Title order={2} className={styles['carModels__cards__card__text__desc']}>
                            Avtomobİl modelİnİn adı
                        </Title>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CarModels;