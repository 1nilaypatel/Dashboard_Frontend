import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLogin, DashboardLoginDark, DashboardMain, DashboardMainDark } from './pages';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<DashboardLogin />} />
          <Route path={"/dashboard-login"} element={<DashboardLogin />} />
          <Route path={"/dashboard-login-dark-mode"} element={<DashboardLoginDark />} />
          <Route path={"/dashboard-main"} element={<DashboardMain />} />
          <Route path={"/dashboard-main-dark-mode"} element={<DashboardMainDark />} />
        </Routes>
      </Router>
    </div>
  )
}
