import { Box } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocailLinks = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "rgba(20,18,54,1)",
          color:"white",
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "3px 3px 0px 0px",
          borderBottom: "1px solid white",
        }}
      >
        <FacebookIcon />
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(20,18,54,1)",
          color:"white",
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        
          borderBottom: "1px solid white",
        }}
      >
        <LinkedInIcon />
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(20,18,54,1)",
          color:"white",
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid white",
        }}
      >
        <InstagramIcon />
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(20,18,54,1)",
          color:"white",
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px 0px 3px 3px",
         
        }}
      >
        <WhatsAppIcon />
      </Box>
    </Box>
  );
};

export default SocailLinks;
