import { Container } from "@mui/material";
import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters={true}>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
