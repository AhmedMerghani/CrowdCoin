import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginTop: "10px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CrowdCoin
          </Typography>
          <Button color="inherit">Campaigns</Button>
          <Button color="inherit" startIcon={<AddIcon />}></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
