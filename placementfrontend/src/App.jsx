import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about_us/About";
import AdminDashboard from "./pages/admin/Dashboard.admin";
import AdminCompanies from "./pages/admin/Companies.admin";
import Drives from "./pages/admin/companyPages/Drives.admin.pages";
import Offers from "./pages/admin/companyPages/Offers.admin.pages";
import Companies from "./pages/admin/companyPages/Companies.admin.pages";
import NewCompanies from "./pages/admin/companyPages/NewCompanies.admin.pages";
import TopCompanies from "./pages/admin/companyPages/TopCompanies.admin.pages";
import CompanyInfo from "./pages/admin/companyPages/NewCompanyInfo.admin.pages";
import Opportunities from "./pages/students/Opportunities";
import Result from "./pages/students/pages/Result.pages.students";
import StudentsResources from "./pages/admin/StudentResources.admin";
import CoursesResources from "./pages/admin/resourcePages/Courses.resourcePages.admin";
import InternshipResources from "./pages/admin/resourcePages/Internship.reourcePages.admin";
import Resourcelearning from "./pages/admin/resourcePages/Resource.resourcePages.admin";
import AddCompanyForm from "./pages/admin/add/AddCompany.add.admin";
import AddStudentForm from "./pages/admin/add/AddStudent.add.admin";
import HackathonsResource from "./pages/admin/resourcePages/Hackthons.resourcePages.admin";
import ConducrDrive from "./pages/recruiters/pages/ConducrDrive";
import SuccessForm from "./pages/recruiters/pages/SuccessForm.pages.recruiters";
import RecruiterAnalysis from "./pages/recruiters/pages/RecruiterAnalysis.pages.recruiters.jsx";
import RecruitersStudentData from "./pages/recruiters/pages/RecruitersStudentData.pages.recruiters";
import RecruitersHome from "./pages/recruiters/pages/RecruitersHome.pages.recruiters";
import RecruiterTool from "./pages/recruiters/pages/RecruiterTool.pages.recruiters";


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<AdminCompanies />} />
        <Route path="/about" element={<About />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/opportunities/result" element={<Result />} />
        <Route path="/recruiters" element={<RecruitersHome/>} />
        <Route path="/recruiters/drive" element={<ConducrDrive/>} />
        <Route path="/recruiters/success" element={<SuccessForm/>} />
        <Route path="/recruiters/analysis" element={<RecruiterAnalysis/>} />
        <Route path="/recruiters/allstudent-detail" element={<RecruitersStudentData/>} />
        <Route path="/recruiters/tool" element={<RecruiterTool/>} />
        <Route path="/admin/companies/drives" element={<Drives/>} />
        <Route path="/admin/companies/offers" element={<Offers/>} />
        <Route path="/admin/companies/all" element={<Companies/>} />
        <Route path="/admin/companies/new" element={<NewCompanies/>} />
        <Route path="/admin/companies/new/info/:id" element={<CompanyInfo/>} />        
        <Route path="/admin/companies/top" element={<TopCompanies/>} />
        <Route path="/admin/resources" element={<StudentsResources/>} />
        <Route path="/admin/addstudent" element={<AddStudentForm/>} />
        <Route path="/admin/addcompany" element={<AddCompanyForm/>} />
        <Route path="/admin/resources/internships" element={<InternshipResources/>} />
        <Route path="/admin/resources/hackathons" element={<HackathonsResource/>} />
        <Route path="/admin/resources/references" element={<Resourcelearning/>} />
        <Route path="/admin/resources/courses" element={<CoursesResources/>} />
      </Routes>
    </Router>
  );
}

export default App
