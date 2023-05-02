import { useTranslation } from "react-i18next";
import Appsettings from "../../../helpers/AppSettings";
import BasePage from "../BasePage/BasePage";

const BGPage = () => {
  const { t } = useTranslation();

  return (
    <BasePage
      meassurementCode={Appsettings.BloodGluccoseCode}
      pageHeader={t("bloodGlucosePage.header")}
    />
  );
};

export default BGPage;
