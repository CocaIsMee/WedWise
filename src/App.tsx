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
import ProfileAdmin from "./pages/admin/profile";
// import DashboardLayout from "./component/dashboard";
import DashboardAdmin from "./pages/admin/dashboard/maindb";
import TherapistLayout from "./therapistLayout/TherapistLayout";
import TherapistDashboard from "./pages/therapist/TherapistDashboard";
import TherapistProfile from "./pages/therapist/TherapistProfile";
import TherapistAppointments from "./pages/therapist/TherapistAppointment";
import TherapistCalendar from "./pages/therapist/TherapistCalendar";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/profile" element={<ProfileAdmin />} />
        <Route path="dbhome" element={<Dashboard />} />
        <Route path="users" element={<WithDraw />} />
        <Route path="manage" element={<Manage />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/therapist" element={<TherapistLayout />}>
          <Route index element={<TherapistDashboard />} />
          <Route path="profile" element={<TherapistProfile />} />
          <Route path="appointments" element={<TherapistAppointments />} />
          <Route path="calendar" element={<TherapistCalendar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
