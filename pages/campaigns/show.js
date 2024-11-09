import React, { Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import { Card, CardContent, Grid2, Button, Typography } from "@mui/material";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import Router from "next/router";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  goToRequests = () => {
    Router.push(`/campaigns/${this.props.address}/requests`);
  };

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        id: 1,
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
      },
      {
        id: 2,
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver.",
      },
      {
        id: 3,
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Request must be approved by approvers.",
      },
      {
        id: 4,
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign.",
      },
      {
        id: 5,
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];

    return (
      <Grid2 container spacing={2}>
        {items.map((item) => (
          <Grid2 key={item.id} xs={12} sm={6} md={6}>
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
                  {item.header}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  {item.meta}
                </Typography>
                <Typography color="primary" variant="body2">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    );
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid2 container spacing={2}>
          <Grid2 size={8} id={"cards"}>
            {this.renderCards()}
            <Button
              onClick={this.goToRequests}
              color="primary"
              variant="contained"
              sx={{ mt: 2 }}
            >
              View Requests
            </Button>
          </Grid2>
          <Grid2 size={4} id={"contributeForm"}>
            <ContributeForm address={this.props.address} />
          </Grid2>
        </Grid2>
      </Layout>
    );
  }
}

export default CampaignShow;
