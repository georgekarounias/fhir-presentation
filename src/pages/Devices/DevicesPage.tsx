import { Device } from "fhir/r4";
import { useEffect, useState } from "react";
import { getDevices } from "../../FhirServices/FhirServices";
import { Col, Row, Spin, Table, TableColumnsType } from "antd";
import { useTranslation } from "react-i18next";

export interface IDevicesPageState {
  devices?: Device[];
}

const DevicesPage = () => {
  const { t } = useTranslation();
  
  const [state, setState] = useState<IDevicesPageState>();
  const [loading, setLoading] = useState<boolean>(false);

  const columns: TableColumnsType<Device> = [
    { title: t('devicesPage.table.dbId'), dataIndex: "id", key: "id" },
    {
      title: t('devicesPage.table.type'),
      dataIndex: "type",
      key: "type",
      render: (type: any) => type?.text,
    },
    { title: t('devicesPage.table.manufacturer'), dataIndex: "manufacturer", key: "manufacturer" },
    { title: t('devicesPage.table.modelNumber'), dataIndex: "modelNumber", key: "modelNumber" },
    {
      title: t('devicesPage.table.patientId'),
      dataIndex: "patient",
      key: "patient",
      render: (patient: any) => patient?.reference,
    },
  ];

  useEffect(() => {
    setLoading(true);
    getDevices().then((res) => {
      setState((prev) => {
        return {
          ...prev,
          devices: res,
        };
      });
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col className="HeaderContent" span={20} offset={2}>
          <h1 className="titleStyle">{t('devicesPage.header')}</h1>
          <Spin spinning={loading}>
            <Table
              columns={columns}
              dataSource={state?.devices?.map((device) => ({
                ...device,
                key: device.id,
              }))}
              size="middle"
            />
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default DevicesPage;
