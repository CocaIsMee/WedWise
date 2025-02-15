import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import LoginAdmin from "./pages/admin/login/index";
import Settings from "../src/pages/Setting";
import Dashboard from "./pages/admin/dashboard/index";
import WithDraw from "./pages/admin/withdraw/index";
import Manage from "./pages/admin/manage/index";
// import DashboardLayout from "./component/dashboard";
import DashboardAdmin from "./pages/admin/dashboard/maindb";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="dbhome" element={<Dashboard />} />
        <Route path="users" element={<WithDraw />} />
        <Route path="manage" element={<Manage />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
