import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import NavBar from "./Pages/Shared/NavBar";
import Home from "./Pages/Home/Home/Home";

function App() {
  return <Box>
    <NavBar/>
    <Home/>
  </Box>;
}

export default App;
