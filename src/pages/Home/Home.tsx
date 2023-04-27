import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Some general info about each page
      1. server information 
      2. users are annonymous
      3. measurment are charts represented
      4. devices are the devices that maid the Meassurements
      5. search : you can search for any resource

        2 grammes 2 cols each 
        1 grammh 1  col

        kathe cell tha exei titlo eikona apo katw kai mia mikri perigrafh katw apo eikona      
    </div>
  );
}

export default Home;