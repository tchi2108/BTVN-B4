import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Products from "./Products";
import Users from "./Users";

const Dashboard = () => {
  return (
    <Box>
      <Header />

      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default Dashboard;
