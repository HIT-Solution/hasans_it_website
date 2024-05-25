import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const BannerBox = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item lg={4}>
            <Box sx={{ background: "white",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "5px" ,display:"flex",alignItems:"center",justifyContent:"center",height:"200px",}}>
              <Box>
                <LiveTvIcon sx={{ color: "rgb(20,18,54)",fontSize:"50px" }} />
                <Typography sx={{ color: "rgb(20,18,54)",fontWeight:600,fontSize:"25px" }}>Portfolio</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BannerBox;
