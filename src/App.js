import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './core/LoginPage';
import SignUpPage from './core/SignUpPage';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Service from './Components/Home/Service';
import Navbar from './Components/Home/Navbar';
import Dashboard from './Components/esg_dashboard/Dashboard';
import Companies from './Components/esg_dashboard/Companies';
import AddEditCompany from './Components/esg_dashboard/AddEditCompany';
import AddEditESGMetric from './Components/esg_dashboard/AddEditESGMetric';
import CompanyDetails from './Components/esg_dashboard/CompanyDetails';
import CompanyEsgData from './Components/esg_dashboard/CompanyEsgData';
import Metrics from './Components/esg_dashboard/Metrics';
import Roles from './Components/esg_dashboard/Roles';
import PermissionTable from './Components/esg_dashboard/PermissionTable';
import FileUpload from './Components/esg_dashboard/FileUpload';
import ProjectBoundary from './Components/esg_dashboard/ProjectBoundary';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/AddEditCompany" element={<AddEditCompany />} />
        <Route path="/AddEditESGMetric" element={<AddEditESGMetric />} />
        <Route path="/CompanyDetails/:companyID" element={<CompanyDetails />} />
        <Route path="/CompanyEsgData" element={<CompanyEsgData />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/Permissiontable" element={<PermissionTable />} />
        <Route path="/FileUpload" element={<FileUpload />} />
        <Route path="/ProjectBoundary" element={<ProjectBoundary />} />
      </Routes>
    </Router>
  );
};

export default App;
