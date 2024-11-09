import React, { Component } from "react";
import Layout from "../../../components/layout";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import Router from "next/router";

class RequestsPage extends Component {
  static async getInitialProps(context) {
    const { address } = context.query;
    return { address };
  }

  openAddRequest = () => {
    Router.push(`/campaigns/${this.props.address}/requests/new`);
  };

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
          <h3>Requests</h3>
          <Button
            onClick={this.openAddRequest}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ alignSelf: "flex-end" }}
          >
            Add Request
          </Button>
        </Box>
      </Layout>
    );
  }
}

export default RequestsPage;
