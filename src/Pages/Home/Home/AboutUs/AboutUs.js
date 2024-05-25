import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "white", fontSize: "30px", fontWeight: 600 }}
          >
            About Us
          </Typography>
          <Typography sx={{ color: "grey", fontSize: "15px", py: "5px" }}>
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{ py: "30px" }}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Grid container spacing={1}>
                <Grid item md={12}>
                  <Box
                    sx={{
                      borderRadius: "5px",
                      borderRight: "6px solid rgb(20,18,54)",
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Td1d5iMF3EQ?si=kQA4-vOmP3zn5y1p"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Box
                    sx={{
                      borderRadius: "5px",
                      borderRight: "7px solid rgb(20,18,54)",

                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.920218312618!2d90.35768829914689!3d23.876671472604375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1716571647532!5m2!1sen!2sbd"
                      allowfullscreen=""
                      width="100%"
                      style={{ border: "none" }}
                      height="100%"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container>
                <Grid item md={12}>
                  <Box sx={{ py: "10px" }}>
                    <Typography
                      sx={{ borderBottom: "2px solid grey", color: "white" }}
                    >
                      Our about
                    </Typography>
                    <Typography sx={{ color: "grey", py: "5px" }}>
                      We are an IT company, Specialize in Software, Hardware
                      (IoT), Artificial Intelligence……………………………………….. Helping
                      Startups and Businesses to automate their boring stuff and
                      grow effortlessly
                    </Typography>
                  </Box>
                  <Box sx={{ py: "10px" }}>
                    <Typography
                      sx={{ borderBottom: "2px solid grey", color: "white" }}
                    >
                      Usages Our Product
                    </Typography>
                    <Typography sx={{ color: "grey", py: "10px" }}>
                      Ready to go Our softwares is ready made and you can start
                      immediately with any of our softwares. Live Security All
                      your data is secured with our software. Security is the
                      first priority we care about. Feature update Our softwares
                      is always getting better and better. We are improving it
                      and fixing bugs regularly..
                    </Typography>
                  </Box>
                  <Box sx={{ py: "10px" }}>
                    <Typography
                      sx={{ borderBottom: "2px solid grey", color: "white" }}
                    >
                      Our Vision
                    </Typography>
                    <Typography sx={{ color: "grey", py: "10px" }}>
                      Very Coming soon....
                    </Typography>
                  </Box>
                  <Box sx={{ py: "10px" }}>
                    <Typography
                      sx={{ borderBottom: "2px solid grey", color: "white" }}
                    >
                     Our Mission
                    </Typography>
                    <Typography sx={{ color: "grey", py: "10px" }}>
                      Very Coming soon....
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
