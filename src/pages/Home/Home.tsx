import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { DatabaseOutlined, UserOutlined, HeartOutlined, MobileOutlined, SearchOutlined } from '@ant-design/icons';

const Home = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      title: t('homePage.fhirServerTitle'),
      icon: <DatabaseOutlined />,
      description: t('homePage.fhirServerDesc'),
    },
    {
      id: 2,
      title: t('homePage.usersTitle'),
      icon: <UserOutlined />,
      description: t('homePage.usersDesc'),
    },
    {
      id: 3,
      title: t('homePage.fhirObservationTitle'),
      icon: <HeartOutlined />,
      description: t('homePage.fhirObservationDesc'),
    },
    {
      id: 4,
      title: t('homePage.fhirDevicesTitle'),
      icon: <MobileOutlined />,
      description: t('homePage.fhirDevicesDesc'),
    },
    {
      id: 5,
      title: t('homePage.searchTitle'),
      icon: <SearchOutlined />,
      description: t('homePage.searchDesc'),
    },
  ];

  const responsiveCols = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
  };
  
  return (
    <div>
        <Row gutter={[16, 16]}>
      {cardData.map((card) => (
        <Col {...responsiveCols} key={card.id}>
          <Card
            title={card.title}
            cover={card.icon}
          >
            <Card.Meta description={card.description} />
          </Card>
        </Col>
      ))}
    </Row>
      Some general info about each page 1. server information 2. users are
      annonymous 3. measurment are charts represented 4. devices are the devices
      that maid the Meassurements 5. search : you can search for any resource 2
      grammes 2 cols each 1 grammh 1 col kathe cell tha exei titlo eikona apo
      katw kai mia mikri perigrafh katw apo eikona
    </div>
  );
};

export default Home;
