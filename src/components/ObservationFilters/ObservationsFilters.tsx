import { DatePicker, Input, Space } from "antd";
import { useTranslation } from "react-i18next";


const ObservationsFilters = () => {
  const { t } = useTranslation();
  const { RangePicker } = DatePicker;

  const onUserIdChange = (e:any)=>{
    debugger;
    console.log(e.currentTarget.value);
  }

  const onRangePickerChange = (e:any)=>{
    if(!e){
        return;
    }
    debugger;
    console.log(e[0]);
  }

  return (
    <>
      <Space direction="horizontal" size={12}>
        <Input placeholder={t("filters.userId") ?? ""} onChange={(e)=>{onUserIdChange(e)}}/>
        <RangePicker onChange={(e)=>{onRangePickerChange(e)}}/>
      </Space>
    </>
  );
};

export default ObservationsFilters;
