import React from "react";
import styles from "./Navbar.module.scss";
import TextField from "@mui/material/TextField";
import { Grid, Link, Typography } from "@mui/material";
import { PermIdentity, ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <Grid container spacing={5} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.search_container}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.logo_container}>
            <Typography variant="h3">Shab Store</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.user_container}>
            <div className={styles.user}>
              <PermIdentity />
            </div>
            <div className={styles.user_shop}>
              <ShoppingCart />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
