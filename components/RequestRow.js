import {
  Button,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
        disabled: request.complete,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }));
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));

    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
      <StyledTableRow>
        <StyledTableCell>{id}</StyledTableCell>
        <StyledTableCell>{request.description}</StyledTableCell>
        <StyledTableCell>
          {web3.utils.fromWei(request.value, "ether")}
        </StyledTableCell>
        <StyledTableCell>{request.recipient}</StyledTableCell>
        <StyledTableCell>
          {request.approvalCount}/{approversCount}
        </StyledTableCell>
        <StyledTableCell>
          {request.complete ? null : (
            <Button color="success" onClick={this.onApprove} variant="outlined">
              Approve
            </Button>
          )}
        </StyledTableCell>
        <StyledTableCell>
          {request.complete ? null : readyToFinalize ? (
            <Button color="error" onClick={this.onFinalize} variant="outlined">
              Finalize
            </Button>
          ) : null}
        </StyledTableCell>
      </StyledTableRow>
    );
  }
}

export default RequestRow;
