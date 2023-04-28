import { useTranslation } from "react-i18next";
import ObservationsFilters from "../../../components/ObservationFilters/ObservationsFilters";

const HRPage = () => {
  const { t } = useTranslation();
    return (
      <div>
          <h1>{t('heartRatePage.header')}</h1>
          <ObservationsFilters />
      </div>
    )
  }
    
  export default HRPage;