import React, { Component } from "react";
import Layout from "../../../components/layout";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Router from "next/router";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestsPage extends Component {
  static async getInitialProps(context) {
    const { address } = context.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(
      Array.from({ length: requestCount }, (_, index) => {
        return campaign.methods.requests(index).call();
      })
    );

    return { address, requests, requestCount, approversCount };
  }

  openAddRequest = () => {
    Router.push(`/campaigns/${this.props.address}/requests/new`);
  };

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          request={request}
          id={index}
          key={index}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Recipient</StyledTableCell>
                <StyledTableCell>Approval Count</StyledTableCell>
                <StyledTableCell>Approve</StyledTableCell>
                <StyledTableCell>Finalize</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderRows()}</TableBody>
          </Table>
        </TableContainer>

        <Typography sx={{ marginTop: 2 }} variant="body2">
          Found {this.props.requestCount}
        </Typography>
      </Layout>
    );
  }
}

export default RequestsPage;
