import { useTranslation } from "react-i18next";
import BasePage from "../BasePage/BasePage";
import Appsettings from "../../../helpers/AppSettings";

const O2Page = () => {
  const { t } = useTranslation();

  return (
    <BasePage
      meassurementCode={Appsettings.OxygenSaturationCode}
      pageHeader={t("οxygenSaturationPage.header")}
    />
  );
};
    
export default O2Page;