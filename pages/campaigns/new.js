import React, { Component } from "react";
import Layout from "../../components/layout";
import {
  Alert,
  AlertTitle,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import factory from "../../ethereum/factory";
import LoadingButton from "@mui/lab/LoadingButton";
import Router from "next/router";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    loading: false,
    errorMessage: "",
  };

  handleMinimumRequireChange = (event) => {
    this.setState({ minimumContribution: event.target.value });
  };

  onSubmit = async (event) => {
    try {
      event.preventDefault();
      this.setState({ loading: true, errorMessage: "" });

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });

      Router.push("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Box
          component="form"
          onSubmit={this.onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
          autoComplete="off"
        >
          <TextField
            required
            id="minimumContribution"
            name="minimumContribution"
            label="Minimum Contribution"
            size="small"
            value={this.state.minimumContribution}
            onChange={this.handleMinimumRequireChange}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">wei</InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />

          {this.state.errorMessage && (
            <Alert
              sx={{ bgcolor: "background.paper" }}
              variant="outlined"
              severity="error"
            >
              <AlertTitle>Oops!</AlertTitle>
              {this.state.errorMessage}
            </Alert>
          )}

          <LoadingButton
            type="submit"
            variant="contained"
            loading={this.state.loading}
            loadingPosition="start"
            startIcon={<AddIcon />}
            sx={{ alignSelf: "flex-start" }}
          >
            Create
          </LoadingButton>
        </Box>
      </Layout>
    );
  }
}

export default CampaignNew;
