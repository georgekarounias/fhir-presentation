import { Space, Table, TableColumnsType } from "antd";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import BasicsRecordsStatistics from "../BasicsRecordsStatistics/BasicsRecordsStatistics";

export interface IDataPoint {
  sort?: number;
  time: string;
  value: number;
}

export interface ISingleValueChartProps {
  data: IDataPoint[];
  showTable?: boolean;
}

const SingleValueChart = (props: ISingleValueChartProps) => {
  const { t } = useTranslation();

  const columns: TableColumnsType<IDataPoint> = [
    { title: "#", dataIndex: "sort", key: "sort" },
    { title: t("SingleValueChart.Time"), dataIndex: "time", key: "time" },
    {
      title: t("SingleValueChart.Value"),
      dataIndex: "value",
      key: "value",
    },
  ];

  const chartData = props?.data?.map((record, index) => ({
    ...record,
    key: record.time + "_" + index,
    sort: index + 1,
  }));

  return (
    <Space size={20}>
      {props.showTable && (
        <Table
          columns={columns}
          dataSource={chartData}
          size="middle"
          className="left-pagination"
        />
      )}
      <Space size={20} direction="vertical">
        <div style={{ margin: "0px 0px 0px 70px", color: "#d17171" }}>
          <b>{t("SingleValueChart.ChartHeader")}</b>
        </div>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
        <BasicsRecordsStatistics data={props.data}/>
      </Space>
    </Space>
  );
};

export default SingleValueChart;
