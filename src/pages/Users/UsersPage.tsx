import { Col, Row, Spin, Table, TableColumnsType } from "antd";
import { Patient } from "fhir/r4";
import { useEffect, useState } from "react";
import { getPatients } from "../../FhirServices/FhirServices";
import { useTranslation } from "react-i18next";

export interface IUsersPageState {
  users?: Patient[];
}

const UsersPage = () => {
  const { t } = useTranslation();

  const [state, setState] = useState<IUsersPageState>();
  const [loading, setLoading] = useState<boolean>(false);

  const columns: TableColumnsType<Patient> = [
    { title: t("usersPage.table.dbId"), dataIndex: "id", key: "id" },
    {
      title: t("usersPage.table.customId"),
      dataIndex: ["identifier", 0, "value"],
      key: "identifier",
    },
    {
      title: t("usersPage.table.name"),
      dataIndex: ["name", 0, "given"],
      render: (givenNames, record) => {
        const familyName =
          record.name && record.name[0] && record.name[0].family;
        const fullName =
          givenNames && familyName
            ? `${givenNames.join(" ")} ${familyName}`
            : "N/A";
        return <span>{fullName}</span>;
      },
    },
    {
      title: t("usersPage.table.birthDate"),
      dataIndex: "birthDate",
      key: "birthDate",
    },
  ];

  useEffect(() => {
    setLoading(true);
    getPatients().then((res) => {
      setState((prev) => {
        return {
          ...prev,
          users: res,
        };
      });
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col className="HeaderContent" span={20} offset={2}>
          <h1 className="titleStyle">{t("usersPage.header")}</h1>
          <Spin spinning={loading}>
            <Table
              columns={columns}
              dataSource={state?.users?.map((user) => ({
                ...user,
                key: user.id,
              }))}
              size="middle"
            />
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default UsersPage;
