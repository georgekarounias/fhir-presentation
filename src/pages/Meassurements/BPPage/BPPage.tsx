import { Observation } from "fhir/r4";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ObservationsFilters, { IObservationState } from "../../../components/ObservationFilters/ObservationsFilters";
import { getPatientsObesrvations } from "../../../FhirServices/FhirServices";
import Appsettings from "../../../helpers/AppSettings";
import { Space, Spin } from "antd";
import { setInfoMessagge } from "../../../helpers/Messaging";
import BloodPressureChart, { IBPDataPoint } from "../../../components/Charts/BloodPressureChart";

const BPPage = () => {
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
      Appsettings.BloodPressureCode
    ).then((res) => {
      setHrObservations(res);
      setLoading(false);
    });
  };

  return (
    <div>
      <Space direction="vertical" size={20}>
        <h1 style={{color:'rgb(218 113 113)'}}>{t('bloodPressurePage.header')}</h1>
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
            <BloodPressureChart
              data={hrObservations.map((x) => {
                if(!x.component || x.component.length !== 2){
                  return {
                    time: "",
                    diastolic:  0,
                    systolic: 0,
                  };
                }
                const systolic_fhir = x.component[0]
                const diastolic_fhir = x.component[1]
                const datapoint: IBPDataPoint = {
                  time: x.effectiveDateTime ?? "",
                  diastolic:  diastolic_fhir.valueQuantity?.value ?? 0,
                  systolic: systolic_fhir.valueQuantity?.value ?? 0,
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
  }
    
  export default BPPage;