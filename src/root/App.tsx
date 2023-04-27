
import "../css/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { AppRoutes } from '../helpers/AppConstants';
import Home from '../pages/Home/Home';
import NoPage from '../pages/NoPage/NoPage';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
