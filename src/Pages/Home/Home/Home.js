import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import NavBar from "../../Shared/NavBar";
import BannerBox from "./BannerBox";
import Service from "./Service/Service";
import AboutUs from "./AboutUs/AboutUs";
import Technology from "./Technology/Technology";

const Home = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(20,18,54,1) 11%, rgba(2,0,36,1) 24%, rgba(0,0,0,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <NavBar/>
      <Banner />
      
     <AboutUs/>
      
    </Box>
  );
};

export default Home;
