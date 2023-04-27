import { Device } from "fhir/r4";
import { useEffect, useState } from "react";
import { getDevices } from "../../FhirServices/FhirServices";
import { Col, Row, Table, TableColumnsType } from "antd";

export interface IDevicesPageState{
    devices?: Device[];
}

const columns: TableColumnsType<Device> = [
    { title: 'DB Id', dataIndex: 'id', key: 'id' },
];

const DevicesPage = () => {
  
    const [state, setState] = useState<IDevicesPageState>();

    useEffect(() => {
        getDevices().then((res) => {
          setState((prev) => {
            return {
              ...prev,
              devices: res
            };
          });
        });
      }, []);

    return (
      <div>
        <Row>
          <Col className="HeaderContent" span={20} offset={2}>
            <h1 className="titleStyle">Συσκευές Μέτρησης</h1>
            <Table
              columns={columns}
              dataSource={state?.devices}
              size="middle"
            />
          </Col>
        </Row>
        
      </div>
    );
  }
  
  export default DevicesPage;