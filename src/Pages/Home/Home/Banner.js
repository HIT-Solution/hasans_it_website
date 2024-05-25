import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import SocailLinks from "../../Shared/SocailLinks";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Banner = () => {
  return (
    <Box sx={{ mt: "100px", position: "relative" }}>
      <Container>
        <Box sx={{ width: "60%" }}>
          <Box>
            <Typography
              sx={{ color: "white", fontSize: "60px", fontWeight: 600 }}
            >
              World <br />
              Class It Solutions
            </Typography>
            <Typography
              sx={{
                color: "rgba(0,212,255,1)",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              We are a product-based software company. Specialize in ERP, HRM &
              CRM Software. Helping Startups and Businesses to automate their
              boring stuff and grow effortlessly.
            </Typography>
          </Box>
          <Box
            sx={{
              py: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                bgcolor: "white",
                color: "rgba(20,18,54,1)",
                cursor: "pointer",
                ":hover": {
                  bgcolor: "white",
                  color: "rgba(20,18,54,1)",
                },
                textTransform: "capitalize",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: 600,
                height: "60px",
                width: "180px",
              }}
            >
              Explore
              <ArrowRightIcon />
            </Button>
            <Button
              sx={{
                border: "1px solid rgba(0,212,255,1)",
                color: "white",
                cursor: "pointer",
                textTransform: "capitalize",
                borderRadius: "40px",

                fontSize: "12px",
                fontWeight: 600,
                height: "60px",
                width: "180px",
              }}
            >
              Let"s Talk <ArrowRightIcon />
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          left: "0%",
          top: "0%",
          bottom: "0%",
          right: "0%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SocailLinks />
      </Box>
    </Box>
  );
};

export default Banner;
