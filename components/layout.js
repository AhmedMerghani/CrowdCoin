import * as React from "react";
import Header from './header'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header />
      {props.children}
      </Container>
    </React.Fragment>
  )
};
