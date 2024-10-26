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

class CampaignIndex extends Component {
  inputRef = createRef(null);

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    return (
      <Grid2 container>
        {this.props.campaigns.map((address) => (
          <Grid2 key={address}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div">
                  {address}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="#">
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
