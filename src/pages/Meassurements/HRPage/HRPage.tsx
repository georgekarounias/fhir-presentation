import { useTranslation } from "react-i18next";
import Appsettings from "../../../helpers/AppSettings";
import BasePage from "../BasePage/BasePage";

const HRPage = () => {
  const { t } = useTranslation();

  return (
      <BasePage meassurementCode={Appsettings.HeartRateCode} pageHeader={t("heartRatePage.header")} />
  );
};

export default HRPage;
