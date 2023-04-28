import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import {
  DatabaseOutlined,
  UserOutlined,
  HeartOutlined,
  MobileOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TextWithEllipsis from "../../components/TextWithEllipsis/TextWithEllipsis";

const Home = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      title: t("homePage.fhirServerTitle"),
      icon: <DatabaseOutlined style={{ color: "blueviolet" }} />,
      description: <TextWithEllipsis text={t("homePage.fhirServerDesc")}/>,
    },
    {
      id: 2,
      title: t("homePage.usersTitle"),
      icon: <UserOutlined style={{ color: "blue" }} />,
      description: <TextWithEllipsis text={t("homePage.usersDesc")}/>,
    },
    {
      id: 3,
      title: t("homePage.fhirObservationTitle"),
      icon: <HeartOutlined style={{ color: "red" }} />,
      description: <TextWithEllipsis text={t("homePage.fhirObservationDesc")}/>,
    },
    {
      id: 4,
      title: t("homePage.fhirDevicesTitle"),
      icon: <MobileOutlined style={{ color: "green" }} />,
      description: <TextWithEllipsis text={t("homePage.fhirDevicesDesc")}/>,
    },
    {
      id: 5,
      title: t("homePage.searchTitle"),
      icon: <SearchOutlined style={{ color: "brown" }}/>,
      description: <TextWithEllipsis text={t("homePage.searchDesc")}/>,
    },
  ];

  const responsiveCols = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
  };

  return (
    <Row gutter={[16, 16]}>
      {cardData.map((card) => (
        <Col {...responsiveCols} key={card.id}>
          <Card title={card.title} cover={card.icon}>
            <Card.Meta description={card.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
