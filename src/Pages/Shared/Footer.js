import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner1 from "../../Pages/asstes/wave (1).svg";
import banner2 from "../../Pages/asstes/wave.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  const banner = {
    background: `url(${banner1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position:"relative",
  };
  return (
    <Box style={banner}>
      <Box
        sx={{
          background:
            "rgba(20,18,54,1)",
          height: "700px",
          width: "100%",
          position: "absolute",
          borderTop: "1px solid white",
        }}
      >
        <Container sx={{ p: "100px 0px" }}>
          <Grid container spacing={4}>
            <Grid item md={3}>
              <Box>
                <Box>
                  <Typography
                    sx={{ color: "white", fontSize: "25px", fontWeight: 600 }}
                  >
                    Hasans IT SOLUTION
                  </Typography>
                  <Typography
                    sx={{ fontSize: "15px", color: "white", pt: "15px" }}
                  >
                    Cras fermentum odio eu feugiat lide par naso tierra. Justo
                    eget nada terra videa magna derita valies darta donna mare
                    fermentum iaculis eu non diam phasellus.
                  </Typography>
                  <Box
                    sx={{
                      pt: "25px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(20,18,54)",
                        borderRadius: "3px",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(20,18,54)",
                          color: "white",
                          border: "1px solid white",
                          transition: "1s",
                        },
                      }}
                    >
                      <FacebookIcon />
                    </Box>
                    <Box
                      sx={{
                        background: "white",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(20,18,54)",
                        borderRadius: "3px",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(20,18,54)",
                          color: "white",
                          border: "1px solid white",
                          transition: "1s",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </Box>
                    <Box
                      sx={{
                        background: "white",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(20,18,54)",
                        borderRadius: "3px",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(20,18,54)",
                          color: "white",
                          border: "1px solid white",
                          transition: "1s",
                        },
                      }}
                    >
                      <InstagramIcon />
                    </Box>
                    <Box
                      sx={{
                        background: "white",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(20,18,54)",
                        borderRadius: "3px",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(20,18,54)",
                          color: "white",
                          border: "1px solid white",
                          transition: "1s",
                        },
                      }}
                    >
                      <WhatsAppIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: "20px",
                      ":hover": {
                        color: "white",
                        transition: "1s",
                      },
                    }}
                  >
                    Quick Links
                  </Typography>

                  <Box
                    sx={{
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                      pt: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Home
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Terms of service
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Privacy policy
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: "20px",
                      ":hover": {
                        color: "white",
                        transition: "1s",
                      },
                    }}
                  >
                    Our Services
                  </Typography>

                  <Box
                    sx={{
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                      pt: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Web Design & Development
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Software Development
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Product Management
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Marketing
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      Graphic Design
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: "20px",
                      ":hover": {
                        color: "white",
                        transition: "1s",
                      },
                    }}
                  >
                    Contact Us
                  </Typography>

                  <Box
                    sx={{
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                      pt: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      <MailIcon sx={{ color: "white" }} /> hasansit48@gmail.com
                    </Typography>

                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      <PhoneIcon sx={{ color: "white" }} /> hasansit48@gmail.com
                    </Typography>
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: 500,
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        ":hover": {
                          color: "white",
                          transition: "1s",
                        },
                      }}
                    >
                      <LocationOnIcon sx={{ color: "white" }} /> A108 Adam
                      Street New York, NY 535022 United States
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center",pt:"150px" }}>
            <Typography sx={{color:"white"}}>
              © Copyright <span style={{color:"rgba(0,212,255,1)"}}>Hasan's IT Solution.2024</span> All Rights Reserved Designed
              by sakhwathosen
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
