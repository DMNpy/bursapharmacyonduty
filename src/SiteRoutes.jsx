import React from 'react'
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Pharmacy from './Components/Pharmacy';
import PharmaOnDuty from './Components/PharmaOnDuty';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';

function SiteRoutes({searchTerm}) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy searchTerm={searchTerm} />} />
        <Route path="/pharmaonduty" element={<PharmaOnDuty />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }

export default SiteRoutes