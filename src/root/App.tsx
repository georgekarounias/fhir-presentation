
import "../css/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { AppRoutes } from '../helpers/AppConstants';
import Home from '../pages/Home/Home';
import NoPage from '../pages/NoPage/NoPage';
import UsersPage from "../pages/Users/UsersPage";
import DevicesPage from "../pages/Devices/DevicesPage";
import HRPage from "../pages/Meassurements/HRPage/HRPage";
import BGPage from "../pages/Meassurements/BGPage/BGPage";
import BPPage from "../pages/Meassurements/BPPage/BPPage";
import O2Page from "../pages/Meassurements/O2Page/O2Page";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route path={AppRoutes.Users} element={<UsersPage />} />
        <Route path={AppRoutes.Devices} element={<DevicesPage />} />
        <Route path={AppRoutes.HrMeassurments} element={<HRPage />} />
        <Route path={AppRoutes.BgMeassurments} element={<BGPage />} />
        <Route path={AppRoutes.BpMeassurments} element={<BPPage />} />
        <Route path={AppRoutes.O2Meassurments} element={<O2Page />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
