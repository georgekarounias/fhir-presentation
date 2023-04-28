import { Device } from "fhir/r4";
import { useEffect, useState } from "react";
import { getDevices } from "../../FhirServices/FhirServices";
import { Col, Row, Table, TableColumnsType } from "antd";

export interface IDevicesPageState{
    devices?: Device[];
}

const columns: TableColumnsType<Device> = [
  { title: 'Device ID', dataIndex: 'id', key: 'id' },
  { title: 'Type', dataIndex: 'type', key: 'type', render: (type: any) => type?.text },
  { title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer' },
  { title: 'Model Number', dataIndex: 'modelNumber', key: 'modelNumber' },
  { title: 'Patient ID', dataIndex: 'patient', key: 'patient', render: (patient: any) => patient?.reference }
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
              dataSource={state?.devices?.map(device => ({ ...device, key: device.id }))} 
              size="middle"
            />
          </Col>
        </Row>
        
      </div>
    );
  }
  
  export default DevicesPage;