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
import { Space, Spin } from "antd";
import { setInfoMessagge } from "../../../helpers/Messaging";

const HRPage = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [hrObservations, setHrObservations] = useState<Observation[]>([]);
  const [parentFilterState, setParentFilterState] = useState<
    IObservationState | undefined
  >(undefined);

  const searchResources = (filterState: IObservationState) => {
    if (
      !filterState.patientId ||
      !filterState.startDate ||
      !filterState.endDate
    ) {
      return;
    }
    setParentFilterState(filterState);
    setLoading(true);
    getPatientsObesrvations(
      filterState.patientId,
      filterState.startDate,
      filterState.endDate,
      Appsettings.HeartRateCode
    ).then((res) => {
      setHrObservations(res);
      setLoading(false);
    });
  };

  return (
    <div>
      <Space direction="vertical" size={20}>
        <h1>{t("heartRatePage.header")}</h1>
        <ObservationsFilters
          onSubmitFilters={(filterState) => searchResources(filterState)}
        />
        <Spin spinning={loading}>
          {hrObservations && (
            <div>
              {setInfoMessagge(
                t("infoMessage"),
                hrObservations.length,
                parentFilterState?.patientId,
                parentFilterState?.startDate,
                parentFilterState?.endDate
              )}
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
              showTable={true}
            />
          )}
        </Spin>
      </Space>
    </div>
  );
};

export default HRPage;
