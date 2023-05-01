import { useTranslation } from "react-i18next";
import ObservationsFilters, {
  IObservationState,
} from "../../../components/ObservationFilters/ObservationsFilters";
import { useState } from "react";
import { getPatientsObesrvations } from "../../../FhirServices/FhirServices";
import { Observation } from "fhir/r4";
import Appsettings from "../../../helpers/AppSettings";
import SingleValueChart, {
  IDataPoint,
} from "../../../components/Charts/SingleValueChart";
import { Space } from "antd";
import { convertDatetoIsoStringWithoutTimeZone } from "../../../helpers/DateHandler";

const HRPage = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [hrObservations, setHrObservations] = useState<Observation[]>([]);
  const [parentFilterState, setParentFilterState] = useState<IObservationState|undefined>(undefined);

  const searchResources = (filterState: IObservationState) => {
    if (
      !filterState.patientId ||
      !filterState.startDate ||
      !filterState.endDate
    ) {
      return;
    }
    setParentFilterState(filterState);
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
      <Space direction="vertical" size={20}>
        <h1>{t("heartRatePage.header")}</h1>
        <ObservationsFilters
          onSubmitFilters={(filterState) => searchResources(filterState)}
        />
        {hrObservations?.length>0 && (
          <div>
            {t("infoMessage").replace("_recordsLength_", hrObservations.length.toString()).replace("_userId_", parentFilterState?.patientId?.toString() ?? "_").replace("_startDate_", parentFilterState?.startDate ? convertDatetoIsoStringWithoutTimeZone(parentFilterState?.startDate).slice(0,10) :"_").replace("_endDate_", parentFilterState?.endDate ? convertDatetoIsoStringWithoutTimeZone(parentFilterState?.endDate).slice(0,10) :"_")}
          </div>
        )}
        {hrObservations?.length > 0 && (
          <SingleValueChart
            data={hrObservations.map((x) => {
              const datapoint: IDataPoint = {
                time: x.effectiveDateTime ?? "",
                value: x.valueQuantity?.value ?? 0,
              };
              return datapoint;
            })}
          />
        )}
      </Space>
    </div>
  );
};

export default HRPage;
