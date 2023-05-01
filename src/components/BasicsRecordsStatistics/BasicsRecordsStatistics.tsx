import { Space } from "antd"
import { useTranslation } from "react-i18next";
import { IDataPoint } from "../Charts/SingleValueChart";

export interface IBasicsRecordsStatisticsProps {
    data: IDataPoint[];
}

const BasicsRecordsStatistics = (props: IBasicsRecordsStatisticsProps) =>{
    const { t } = useTranslation();
    const {data} = props;
    const minItem = data.reduce((min, item) => item.value < min.value ? item : min);
    const maxItem = data.reduce((max, item) => item.value > max.value ? item : max);
    const sum = data.reduce((sum, item) => sum + item.value, 0);
    const mean = (sum/data.length).toFixed(0);
    return(
    <>
    <div style={{margin: '0px 0px 0px 70px', color:"#d17171"}}><b>{t('BasicStatistics.Header')}</b></div>
        <Space size={1} direction="vertical">
        <div style={{margin: '0px 0px 0px 100px'}}>{t('BasicStatistics.Min')}: {minItem.value}</div>
        <div style={{margin: '0px 0px 0px 100px'}}>{t('BasicStatistics.Mean')}: {mean}</div>
        <div style={{margin: '0px 0px 0px 100px'}}>{t('BasicStatistics.Max')}: {maxItem.value}</div>
        </Space>
    </>)
}

export default BasicsRecordsStatistics;
