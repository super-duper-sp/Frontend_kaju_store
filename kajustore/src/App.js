import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Shop from "./components/settings/Shop";
import AuthLayout from "./components/Layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./components/settings/Users";
import DailyTransactions from './pages/DailyTransactions';
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";






function App() {
  return (
    <BrowserRouter>

    <Routes>

      {/* for Landing */}
      <Route path="/" element={<Landing />}>
      </Route>

      {/* for auth login/register */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>

      {/* for daily transactions */}
      <Route path="/dailytransactions" element={<DashboardLayout />}>
        <Route index element={<DailyTransactions/>} />
      </Route>

       {/* for Analytics  */}
       <Route path="/analytics" element={<DashboardLayout />}>
        <Route index element={<Analytics/>} />
      </Route>
      
      {/* for dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/setting/" element={<DashboardLayout />}>
      <Route index element={<Settings />} />
        <Route path="shop" element={<Shop />} />
        <Route path="users" element={<Users />} />
      </Route>
    
    </Routes>

    {/* Toast Container */}
    <ToastContainer />
  </BrowserRouter>
  );
}

export default App;
