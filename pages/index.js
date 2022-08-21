import React from "react";
import { Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import Layout from "../layouts/Layout/Layout";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Layout>
        <Carousel />
        {/* <Typography variant="h1">Hello</Typography> */}
      </Layout>
    </div>
  );
};

export default Home;
