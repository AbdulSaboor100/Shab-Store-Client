import { Container, Divider } from "@mui/material";
import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.navbar_fixed_container}>
          <Navbar />
          <Divider />
          <Menu />
          <Divider />
        </div>
        {children}
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
