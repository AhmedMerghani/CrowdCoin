import React, { Component, createRef } from "react";
import factory from "../ethereum/factory";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid2,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../components/layout";
import Router from "next/router";

class CampaignIndex extends Component {
  inputRef = createRef(null);

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  openAddCampaign = () => {
    Router.push("/campaigns/new");
  };

  goToCampaign = (address) => {
    const url = "/campaigns/" + address;
    Router.push(url);
  };

  renderCampaigns() {
    return (
      <Grid2 container spacing={2}>
        {this.props.campaigns.map((address) => (
          <Grid2 key={address} xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {address}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => this.goToCampaign(address)}>
                  View Campaign
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    );
  }

  render() {
    return (
      <Layout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <h3>Open Campaigns</h3>
          <Button
            onClick={this.openAddCampaign}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ alignSelf: "flex-end" }}
          >
            Create Campaign
          </Button>
        </Box>

        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignIndex;
