// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import PrivateRoute from "../Components/PrivateRoute";
// function AllRoutes() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default AllRoutes;














import { Route, Routes } from "react-router-dom";
import React from "react";
// import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
// import LoginPage from "./LoginPage";
import Home from "./Home";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/login" element={<LoginPage/>} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;