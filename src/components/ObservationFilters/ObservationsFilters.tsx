import { Button, DatePicker, Input, Space, Tooltip } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchOutlined } from "@ant-design/icons";

export interface IObservationState {
  patientId?: number;
  startDate?: Date;
  endDate?: Date;
}

export interface IObservationProps {
  onSubmitFilters: (filterState: IObservationState) => void;
}

const ObservationsFilters = (props: IObservationProps) => {
  const { t } = useTranslation();
  const { RangePicker } = DatePicker;

  const [state, setState] = useState<IObservationState>();

  const onUserIdChange = (e: any) => {
    console.log(e.currentTarget.value);
    const patientId = e.currentTarget.value as number;
    setState((prev) => {
      return {
        ...prev,
        patientId: patientId,
      };
    });
  };

  const onRangePickerChange = (dates: any) => {
    if (!dates || !Array.isArray(dates) || dates.length !== 2) {
      return;
    }
    const startDate = dates[0].toDate();
    const endDate = dates[1].toDate();
    setState((prev) => {
      return {
        ...prev,
        startDate: startDate,
        endDate: endDate,
      };
    });
  };

  const submit = () => {
    if (!state) {
      return;
    }
    props.onSubmitFilters(state);
  };

  return (
    <>
      <Space direction="vertical" size={12}>
        <div>{t("filters.header")}</div>
        <Space direction="horizontal" size={12}>
          <Input
            placeholder={t("filters.userId") ?? ""}
            onChange={(e) => {
              onUserIdChange(e);
            }}
          />
          <RangePicker
            onChange={(e) => {
              onRangePickerChange(e);
            }}
          />
          <Tooltip title="search">
            <Button
              shape="circle"
              onClick={() => {
                submit();
              }}
              icon={<SearchOutlined />}
            />
          </Tooltip>
        </Space>
      </Space>
    </>
  );
};

export default ObservationsFilters;
