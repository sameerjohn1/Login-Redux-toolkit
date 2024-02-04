import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";


const AllRoutes = () => {

  return (
    <Routes>
      {/* Authenticate */}
      <Route exact path="/" element={<Home/>} />
      <Route  path="/login" element={<Login/>} />
     
    </Routes>
  );
};
export default function Router() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}