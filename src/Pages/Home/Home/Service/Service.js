import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import service1 from "../../../asstes/1_V-Jp13LvtVc2IiY2fp4qYw-removebg-preview.png";
import serviceIot from "../../../asstes/iot-hardware-1-removebg-preview.png"
import serviceAndrouid from "../../../asstes/Android-Vs-Ios_Image-removebg-preview.png"
import serviceGrapichs from "../../../asstes/images-removebg-preview.png"

const Service = () => {
  return (
    <Box>
      <Container>
        <Box sx={{ textAlign: "center", py: "50px" }}>
          <Typography
            sx={{
              color: "rgba(20,18,54,1)",
              fontSize: "35px",
              fontWeight: 600,
            }}
          >
            Our Service
          </Typography>
          <Typography
            sx={{
              color: "rgba(0,212,255,1)",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            error?
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(20,18,54,1) 11%, rgba(2,0,36,1) 24%, rgba(0,0,0,1) 35%, rgba(0,212,255,1) 100%)",
                  ":hover": {
                    background:
                      "linear-gradient(90deg,rgba(0,212,255,1)  11%,rgba(0,0,0,1)  24%, rgba(2,0,36,1) 35%,rgba(20,18,54,1)  100%)",
                    transition: "1s",
                  },
                  height:"330px",
                  opacity: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "20px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    border: "5px solid white",
                    ":hover": {
                      border: "5px solid rgba(0,212,255,1)",
                    },
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={service1}
                  />
                </Box>
                <Box sx={{ py: "5px" }}>
                  <Typography
                    sx={{ color: "white", fontWeight: 600, fontSize: "12px" }}
                  >
                    Web Design & Development(Full Stack)
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      textAlign: "justify",
                      ":hover": {
                        color: "grey",
                        transition: "1s",
                      },
                      pt: "10px",
                    }}
                  >
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pt:"10px",
                    }}
                  >
                    <Box
                      sx={{
                        // // bgcolor: "white",
                        // color: "rgba(20,18,54,1)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        borderRadius: "50px",
                        p: "0px 10px",

                        width: "100px",
                        height: "30px",
                        border: "1px solid white",
                        ":hover": {
                          background: "white",
                          border: "2px solid rgba(0,212,255,1)",
                          color: "rgba(0,212,255,1)",
                          transition: "1s",
                        },
                      }}
                    >
                      Learn More
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(20,18,54,1) 11%, rgba(2,0,36,1) 24%, rgba(0,0,0,1) 35%, rgba(0,212,255,1) 100%)",
                  ":hover": {
                    background:
                      "linear-gradient(90deg,rgba(0,212,255,1)  11%,rgba(0,0,0,1)  24%, rgba(2,0,36,1) 35%,rgba(20,18,54,1)  100%)",
                    transition: "1s",
                  },
                  opacity: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "20px",
                  borderRadius: "5px",
                  height:"330px",
                }}
              >
                <Box
                  sx={{
                    border: "5px solid white",
                    ":hover": {
                      border: "5px solid rgba(0,212,255,1)",
                    },
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={serviceIot}
                  />
                </Box>
                <Box sx={{ py: "5px", textAlign: "center" }}>
                  <Typography
                    sx={{ color: "white", fontWeight: 600, fontSize: "18px" }}
                  >
                    Hardware (IoT)
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      textAlign: "justify",
                      ":hover": {
                        color: "grey",
                        transition: "1s",
                      },
                      pt: "10px",
                    }}
                  >
                    IoT hardware is comprised of a wide range of different
                    devices that are completely connected to one another. IoT
                    stands for the internet of things. IoT hardware is the
                    technology that is slowly beginning to govern our world,
                    from new ways of driving, to fully integrated home systems,
                    IoT hardware is everywhere.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pt:"10px",
                    }}
                  >
                    <Box
                      sx={{
                        // // bgcolor: "white",
                        // color: "rgba(20,18,54,1)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        borderRadius: "50px",
                        p: "0px 10px",

                        width: "100px",
                        height: "30px",
                        border: "1px solid white",
                        ":hover": {
                          background: "white",
                          border: "2px solid rgba(0,212,255,1)",
                          color: "rgba(0,212,255,1)",
                          transition: "1s",
                        },
                      }}
                    >
                      Learn More
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(20,18,54,1) 11%, rgba(2,0,36,1) 24%, rgba(0,0,0,1) 35%, rgba(0,212,255,1) 100%)",
                  ":hover": {
                    background:
                      "linear-gradient(90deg,rgba(0,212,255,1)  11%,rgba(0,0,0,1)  24%, rgba(2,0,36,1) 35%,rgba(20,18,54,1)  100%)",
                    transition: "1s",
                  },
                  height:"330px",
                  opacity: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "20px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    border: "5px solid white",
                    ":hover": {
                      border: "5px solid rgba(0,212,255,1)",
                    },
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={serviceAndrouid}
                  />
                </Box>
                <Box sx={{ py: "5px", textAlign: "center" }}>
                  <Typography
                    sx={{ color: "white", fontWeight: 600, fontSize: "16px" }}
                  >
                    Mobile Apps Development (Android & iOS)
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      textAlign: "justify",
                      ":hover": {
                        color: "grey",
                        transition: "1s",
                      },
                      pt: "10px",
                    }}
                  >
                    iOS app development is much faster than Android app
                    development. Swift is the language majorly used for iOS app
                    development, simplifying the coding process as it requires
                    fewer lines of code, unlike Java or Kotlin, which are used
                    for developing Android apps.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pt:"10px",
                    }}
                  >
                    <Box
                      sx={{
                        // // bgcolor: "white",
                        // color: "rgba(20,18,54,1)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        borderRadius: "50px",
                        p: "0px 10px",

                        width: "100px",
                        height: "30px",
                        border: "1px solid white",
                        ":hover": {
                          background: "white",
                          border: "2px solid rgba(0,212,255,1)",
                          color: "rgba(0,212,255,1)",
                          transition: "1s",
                        },
                      }}
                    >
                      Learn More
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(20,18,54,1) 11%, rgba(2,0,36,1) 24%, rgba(0,0,0,1) 35%, rgba(0,212,255,1) 100%)",
                  ":hover": {
                    background:
                      "linear-gradient(90deg,rgba(0,212,255,1)  11%,rgba(0,0,0,1)  24%, rgba(2,0,36,1) 35%,rgba(20,18,54,1)  100%)",
                    transition: "1s",
                  },
                  height:"330px",
                  opacity: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "20px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    border: "5px solid white",
                    ":hover": {
                      border: "5px solid rgba(0,212,255,1)",
                    },
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={serviceGrapichs}
                  />
                </Box>
                <Box sx={{ py: "5px", textAlign: "center" }}>
                  <Typography
                    sx={{ color: "white", fontWeight: 600, fontSize: "16px" }}
                  >
                    Graphics Design
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      textAlign: "justify",
                      ":hover": {
                        color: "grey",
                        transition: "1s",
                      },
                      pt: "10px",
                    }}
                  >
                    Graphic design is a profession, academic discipline and
                    applied art whose activity consists in projecting visual
                    communications intended to transmit specific messages to
                    social groups, with specific objectives. Graphic design is
                    an interdisciplinary branch of design and of the fine arts.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pt:"10px",
                    }}
                  >
                    <Box
                      sx={{
                        // // bgcolor: "white",
                        // color: "rgba(20,18,54,1)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        borderRadius: "50px",
                        p: "0px 10px",

                        width: "100px",
                        height: "30px",
                        border: "1px solid white",
                        ":hover": {
                          background: "white",
                          border: "2px solid rgba(0,212,255,1)",
                          color: "rgba(0,212,255,1)",
                          transition: "1s",
                        },
                      }}
                    >
                      Learn More
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
