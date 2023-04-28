import { DatePicker, Row, Space } from "antd";
import Column from "antd/lib/table/Column";

const { RangePicker } = DatePicker;

const ObservationsFilters = () => {
  return (
    <>
    
    <Space direction="vertical" size={12}>
        <RangePicker />
    </Space>

    </>
  );
};

export default ObservationsFilters;
