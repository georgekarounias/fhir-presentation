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

export interface IBPDataPoint {
  sort?: number;
  time: string;
  systolic: number;
  diastolic: number;
}

export interface IBPChartProps {
  data: IBPDataPoint[];
  showTable?: boolean;
}

const BloodPressureChart = (props: IBPChartProps) => {
  const { t } = useTranslation();

  const columns: TableColumnsType<IBPDataPoint> = [
    { title: "#", dataIndex: "sort", key: "sort" },
    { title: t("BloodPressureChart.Time"), dataIndex: "time", key: "time" },
    {
      title: t("BloodPressureChart.systolic"),
      dataIndex: "systolic",
      key: "systolic",
    },
    {
      title: t("BloodPressureChart.diastolic"),
      dataIndex: "diastolic",
      key: "diastolic",
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
        <LineChart width={600} height={400} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Space>
    </Space>
  );
};

export default BloodPressureChart;
