import React, { Component } from "react";
import Layout from "../../../components/layout";
import {
  Alert,
  AlertTitle,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Campaign from "../../../ethereum/campaign";
import LoadingButton from "@mui/lab/LoadingButton";
import Router from "next/router";
import web3 from "../../../ethereum/web3";

class RequestNew extends Component {
  static async getInitalProps(props) {
    const { address } = props.query;
    return { address };
  }

  state = {
    description: "",
    value: "",
    recipient: "",
    loading: false,
    errorMessage: "",
  };

  handleDescirptionChange = (event) => {
    this.setState({ desciption: event.target.value });
  };

  handleValueChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleRecipientChange = (event) => {
    this.setState({ recipient: event.target.value });
  };

  render() {
    return (
      <Layout>
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
            onChange={this.handleDescirptionChange}
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
