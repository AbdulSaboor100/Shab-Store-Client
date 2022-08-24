import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ShopCards from "../ShopCards/ShopCards";
import styles from "./HomeCards.module.scss";

const HomeCards = ({ title, description, data }) => {
  return (
    <div className={styles.home_cards_container}>
      <div className={styles.home_cards_head}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
      <Grid container spacing={3}>
        {data?.map((item, i) => (
          <Fragment key={i}>
            <Grid item xs={12} md={6} lg={4}>
              <ShopCards
                data={item}
                title={item?.title}
                description={item?.description}
                price={item?.price}
                image={item?.image}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default HomeCards;
