import { Container, Divider } from "@mui/material";
import React, { Fragment } from "react";
import Alerts from "../../components/Alerts/Alerts";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters={true}>
        <Alerts />
        <div className={styles.navbar_fixed_container}>
          <div className={`${styles.fixed_container} darkBlueColor`}>
            <Navbar />
            <Divider />
            <Menu />
            <Divider />
          </div>
        </div>
        <Cart />
        {children}
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
