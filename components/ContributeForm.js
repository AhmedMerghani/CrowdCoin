import React, { Component } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import Router from "next/router";

class ContributeForm extends Component {
  state = {
    value: "",
    loading: false,
    errorMessage: "",
  };

  handleValueChange = async (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      this.setState({ loading: false });
      Router.replace(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message, loading: false });
    }
  };

  render() {
    return (
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
          id="value"
          name="value"
          label="Amount to Contribute"
          value={this.state.value}
          onChange={this.handleValueChange}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">ether</InputAdornment>
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
          sx={{ alignSelf: "flex-start" }}
        >
          Contribute!
        </LoadingButton>
      </Box>
    );
  }
}

export default ContributeForm;
