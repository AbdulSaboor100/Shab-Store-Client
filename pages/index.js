import React from "react";
import { Typography } from "@mui/material";
import styles from "../styles/home.module.scss";
import Layout from "../layouts/Layout/Layout";
import Carousel from "../components/Carousel/Carousel";
import HomeCards from "../components/HomeCards/HomeCards";

const Home = () => {
  const poloData = [
    {
      title: "Polo Shirt 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "1000",
      image: "/images/polo_1.jpg",
    },
    {
      title: "Polo Shirt 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "2000",
      image: "/images/polo_1.jpg",
    },
    {
      title: "Polo Shirt 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "800",
      image: "/images/polo_1.jpg",
    },
  ];
  return (
    <div className={styles.home_container}>
      <Layout>
        <Carousel />
        <HomeCards
          title={"Polo's Everywhere"}
          description={"Here are some cool shirts down below"}
          data={poloData}
        />
        <HomeCards
          title={"Classic Shirts On Here"}
          description={"Here are some cool shirts down below"}
          data={poloData}
        />
      </Layout>
    </div>
  );
};

export default Home;
