import { Button, Stack, Title } from "@mantine/core";
import styles from "../../styles/LeasingOffer.module.scss";

/**
 * LeasingOffer modules
 * @returns {JSX.Element} The rendered LeasingOffer component.
 */

const LeasingOffer = () => {
  return (
    <Stack className={styles.leasingOffer}>
      <Title className={styles["leasingOffer__header"]} order={1}>
        İLKİN ÖDƏNİŞ
      </Title>
      <Title order={2} className={styles["leasingOffer__percent-title"]}>
        30%-DƏN BAŞLAYARAQ
      </Title>
      <p className={styles["leasingOffer__description"]}>
        Yeni avtomobil əldə edin. Soa leasing şirkəti ilə xüsusiləşdirilmiş və
        asan lizinq xidmətindən yararlana bilərsiniz.
      </p>
      <Button variant="light" className={styles["leasingOffer__btn"]}>
        Bizimlə əlaqə
      </Button>
    </Stack>
  );
};

export default LeasingOffer;
