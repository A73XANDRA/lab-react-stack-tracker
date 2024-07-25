import { useState } from "react";
import "./App.css";
import CompaniesData from "./companies.json"
import TecnologiesData from "./technologies.json"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologypPage from "./pages/TechnologyPage"
import { Route, Routes } from "react-router-dom";


function App() {
  const { companies, setCompanies } = useState(CompaniesData)
  const { Technologies, setTecnologies } = useState(TecnologiesData)

  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/company/:companySlug" element={<CompanyPage />}></Route>
        <Route path="/tech/:slug" element={<TechnologypPage />}></Route>
      </Routes>









    </div>
  );
}

export default App;
