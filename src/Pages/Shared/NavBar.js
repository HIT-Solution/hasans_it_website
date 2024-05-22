import { Box, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <Box>
      <Box
        sx={{
          p: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* logo  */}
        <Box>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Hasans IT SOLUTION
          </Typography>
        </Box>

        {/* nav menu section lite item */}
        <Box sx={{ display:"flex",alignItems:"center",gap:"20px" }}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
              ":hover": {
                color: "rgb(20,18,54)",
                transition: "0.5s",
              },
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
              ":hover": {
                color: "rgb(20,18,54)",
                transition: "0.5s",
              },
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
              ":hover": {
                color: "rgb(20,18,54)",
                transition: "0.5s",
              },
            }}
          >
            Service
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
              ":hover": {
                color: "rgb(20,18,54)",
                transition: "0.5s",
              },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
