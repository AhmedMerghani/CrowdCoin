import React, { Component } from "react";
import Layout from "../../../components/layout";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Campaign from "../../../ethereum/campaign";
import LoadingButton from "@mui/lab/LoadingButton";
import Router from "next/router";
import web3 from "../../../ethereum/web3";

class RequestNew extends Component {
  static async getInitialProps(context) {
    const { address } = context.query;
    return { address };
  }

  state = {
    description: "",
    value: "",
    recipient: "",
    loading: false,
    errorMessage: "",
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleValueChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleRecipientChange = (event) => {
    this.setState({ recipient: event.target.value });
  };
  s;

  goBack = () => {
    Router.push(`/campaigns/${this.props.address}/requests`);
  };

  onSubmit = async (event) => {
    this.setState({ loading: true, errorMessage: "" });
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      Router.push(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message, loading: false });
    }
  };

  render() {
    return (
      <Layout>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            Router.push(`/campaigns/${this.props.address}/requests`);
          }}
        >
          Back
        </Link>
        <h3>Create a Request</h3>
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
            id="Description"
            name="Description"
            label="Description"
            size="small"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            variant="outlined"
          />

          <TextField
            required
            id="Value"
            name="Value"
            label="Value in Ether"
            size="small"
            value={this.state.value}
            onChange={this.handleValueChange}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">ether</InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />

          <TextField
            required
            id="Reciptient"
            name="Reciptient"
            label="Reciptient"
            size="small"
            value={this.state.recipient}
            onChange={this.handleRecipientChange}
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
            Create!
          </LoadingButton>
        </Box>
      </Layout>
    );
  }
}

export default RequestNew;
