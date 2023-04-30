import { useTranslation } from "react-i18next";
import ObservationsFilters, {
  IObservationState,
} from "../../../components/ObservationFilters/ObservationsFilters";
import { useState } from "react";
import { getPatientsObesrvations } from "../../../FhirServices/FhirServices";
import { Observation } from "fhir/r4";
import Appsettings from '../../../helpers/AppSettings';

const HRPage = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [hrObservations, setHrObservations] = useState<Observation[]>([]);

  const searchResources = (filterState: IObservationState) => {
    if (
      !filterState.patientId ||
      !filterState.startDate ||
      !filterState.endDate
    ) {
      return;
    }
    getPatientsObesrvations(
      filterState.patientId,
      filterState.startDate,
      filterState.endDate, 
      Appsettings.HeartRateCode
    ).then((res) => {
      setHrObservations(res);
    });
  };

  return (
    <div>
      <h1>{t("heartRatePage.header")}</h1>
      <ObservationsFilters
        onSubmitFilters={(filterState) => searchResources(filterState)}
      />
    </div>
  );
};

export default HRPage;
