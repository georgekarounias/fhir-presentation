import { Col, Row, Table, TableColumnsType } from "antd";
import { Device, Patient } from "fhir/r4";
import { useEffect, useState } from "react";
import { getDevices, getPatients } from "../../FhirServices/FhirServices";

export interface IUsersPageState{
    users?: Patient[];
    devices?: Device[];
}

const columns: TableColumnsType<Patient> = [
    { title: 'DB Id', dataIndex: 'id', key: 'id' },
    { title: 'Custom Id', dataIndex: ['identifier', 0, 'value'], key: 'identifier' },
    { 
      title: 'Name', 
      dataIndex: ['name', 0, 'given'], 
      render: (givenNames, record) => {
        const familyName = record.name && record.name[0] && record.name[0].family;
        const fullName = givenNames && familyName ? `${givenNames.join(' ')} ${familyName}` : 'N/A';
        return <span>{fullName}</span>;
      }
    },
    { title: 'Birth Date', dataIndex: 'birthDate', key: 'birthDate' },
    //{ title: 'Κατάσταση', dataIndex: 'statusName', key: 'statusName', render:(x)=><>{  
    //   <FontAwesomeIcon icon={faCircle} style = {{ color:decideColor(x)}}/>
    // } </>},
    // { title: 'Διεύθυνση', dataIndex: 'addressName', key: 'addressName' },
    // { title: 'Κόστος Παρ.', dataIndex: 'totalPrice', key: 'totalPrice', render:(x)=><>{x}&euro;</> },
    // { title: 'Action', key: 'operation', render: (record) => <a onClick={()=> {addToFavorites(record)}}><FontAwesomeIcon icon={faTrashCan} style = {{ color: decideFavoriteColor(record.isFavoriteOrder)}}/></a> },
  ];

const UsersPage = () => {
  
    const [state, setState] = useState<IUsersPageState>();

    useEffect(() => {
        getPatients().then((res) => {
          setState((prev) => {
            return {
              ...prev,
              users: res
            };
          });
        });
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
            <h1 className="titleStyle">Χρήστες</h1>
            <Table
              columns={columns}
              dataSource={state?.users}
              size="middle"
            />
          </Col>
        </Row>
        
      </div>
    );
  }
  
  export default UsersPage;