import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Service from "./Pages/Home/Home/Service/Service";

function App() {
  return (
    <Box>
      <Home />
      <Service />
      <Footer />
    </Box>
  );
}

export default App;
