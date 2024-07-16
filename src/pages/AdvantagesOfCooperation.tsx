import {BackgroundImage, Box, Title, Image, Button} from "@mantine/core";
import styles from "../styles/AdvantagesOfCooperation.module.scss";
import CarBg from '../assets/images/car-bg.png';
import CarCover from '../assets/images/cover.png';
import Car from '../assets/images/car.png';
import Group from '../assets/icons/group.png'
import Business from '../assets/icons/business.png'
import Divide from '../assets/icons/divide.png'

/**
 * AdvantagesOfCooperation page
 * @returns {JSX.Element} The rendered AdvantagesOfCooperation component.
 */

const AdvantagesOfCooperation = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles["container__headerBox"]}>
        <Title className={styles["container__headerBox__title"]} order={2}>
          Əməkdaşlığın üstünlüklərİ
        </Title>
      </Box>
        <Box className={styles["container__body"]}>
            <BackgroundImage className={styles["container__body__bg"]} src={CarBg as string}>
                <Box className={styles["container__body__bg__carCover"]}>
                    <BackgroundImage src={CarCover as string} className={styles["container__body__bg__carCover__bg"]}>
                        <Image
                            radius="md"
                            src={Car}
                            className={styles["container__body__bg__carCover__bg__car"]}
                        />
                    </BackgroundImage>
                </Box>
                <Box className={styles["container__body__bg__cards"]}>
                    <Box className={styles["container__body__bg__cards__card"]}>
                        <Box className={styles["container__body__bg__cards__card__headerBox"]}>
                            <Image src={Group} />
                            <Button variant="light" className={styles["container__body__bg__cards__card__headerBox__btn"]}>
                                Etibarlı əməkdaşlıq
                            </Button>
                        </Box>
                        <Box className={styles["container__body__bg__cards__card__desc"]}>
                            <p className={styles["container__body__bg__cards__card__desc__title"]}>
                                Gələcək planlarınızı reallaşdırmaq
                                üçün əlverişli imkanlar təklif edirik.
                            </p>
                        </Box>
                    </Box>
                    <Box className={styles["container__body__bg__cards__card"]}>
                        <Box className={styles["container__body__bg__cards__card__headerBox"]}>
                            <Image src={Group} />
                            <Button variant="light" className={styles["container__body__bg__cards__card__headerBox__btn"]}>
                                Asan rəsmiləşmə
                            </Button>
                        </Box>
                        <Box className={styles["container__body__bg__cards__card__desc"]}>
                            <p className={styles["container__body__bg__cards__card__desc__title"]}>
                                5 dəqiqə ərzində rəsmiləşdirmə ilə
                                ehtiyacınız olan məbləği dərhal alın
                            </p>
                        </Box>
                    </Box>
                    <Box className={styles["container__body__bg__cards__card"]}>
                        <Box className={styles["container__body__bg__cards__card__headerBox"]}>
                            <Image src={Business} />
                            <Button variant="light" className={styles["container__body__bg__cards__card__headerBox__btn"]}>
                                Biznesinizə dəstək
                            </Button>
                        </Box>
                        <Box className={styles["container__body__bg__cards__card__desc"]}>
                            <p className={styles["container__body__bg__cards__card__desc__title"]}>
                                Sərfəli kredit şərtləri ilə daim
                                sahibkarların yanındayıq
                            </p>
                        </Box>
                    </Box>
                    <Box className={styles["container__body__bg__cards__card"]}>
                        <Box className={styles["container__body__bg__cards__card__headerBox"]}>
                            <Image src={Divide} />
                            <Button variant="light" className={styles["container__body__bg__cards__card__headerBox__btn"]}>
                                Münasib faizlər
                            </Button>
                        </Box>
                        <Box className={styles["container__body__bg__cards__card__desc"]}>
                            <p className={styles["container__body__bg__cards__card__desc__title"]}>
                                Münasib illik faiz və komissiya ilə
                                xərclərinizə qənaət edin.
                            </p>
                        </Box>
                    </Box>
                </Box>
            </BackgroundImage>
        </Box>
    </Box>
  );
};

export default AdvantagesOfCooperation;
