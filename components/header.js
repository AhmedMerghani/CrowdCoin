import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Router from "next/router";

class Header extends Component {
  handleGoToCampaigns = () => {
    Router.push("/");
  };

  handleGoToAddCampaign = () => {
    Router.push("/campaigns/new");
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ marginTop: "10px" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button onClick={this.handleGoToCampaigns} color="inherit">
                CrowdCoin
              </Button>
            </Typography>
            <Button onClick={this.handleGoToCampaigns} color="inherit">
              Campaigns
            </Button>
            <Button
              onClick={this.handleGoToAddCampaign}
              color="inherit"
              startIcon={<AddIcon />}
            ></Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Header;
