import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Products from "./Products";
import Users from "./Users";

const Dashboard = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
