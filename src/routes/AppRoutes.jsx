import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const SamplePage = lazy(() => import("../pages/SamplePage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const loading = () => <div>Loading...</div>;

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={loading()}>
                <Routes>  {/* ✅ Wrap Route inside Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/sample" element={<SamplePage />} />
                </Routes>
            </Suspense>
        </Router>
    );
};  

export default AppRoutes;
