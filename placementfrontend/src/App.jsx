import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about_us/About";
import Jobs from "./pages/jobs/Jobs";
import Resourses from "./pages/resourses/Resourses";
import Recruiters from "./pages/recruiters/Recruiters";
import AdminDashboard from "./pages/admin/Dashboard.admin";
import AdminCompanies from "./pages/admin/Companies.admin";
import Drives from "./pages/admin/pages/Drives.admin.pages";
import Offers from "./pages/admin/pages/Offers.admin.pages";
import Companies from "./pages/admin/pages/Companies.admin.pages";
import NewCompanies from "./pages/admin/pages/NewCompanies.admin.pages";
import TopCompanies from "./pages/admin/pages/TopCompanies.admin.pages";


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<AdminCompanies />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resouses" element={<Resourses />} />
        <Route path="/recruiters" element={<Recruiters/>} />
        <Route path="/admin/companies/drives" element={<Drives/>} />
        <Route path="/admin/companies/offers" element={<Offers/>} />
        <Route path="/admin/companies/all" element={<Companies/>} />
        <Route path="/admin/companies/new" element={<NewCompanies/>} />
        <Route path="/admin/companies/top" element={<TopCompanies/>} />
      </Routes>
    </Router>
  );
}

export default App
