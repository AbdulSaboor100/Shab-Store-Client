import { Grid, Link } from "@mui/material";
import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={`${styles.menu_container} darkWhiteColor`}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className={styles.link_container}>
            <Link href="#" underline="hover">Polo Shirts</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={styles.link_container}>
            <Link href="#">Classic Shirts</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={styles.link_container}>
            <Link href="#">Full Sleeve Shirts</Link>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={styles.link_container}>
            <Link href="#">Polo Shirts</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
