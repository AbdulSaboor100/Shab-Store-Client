import React from "react";
import styles from "./Navbar.module.scss";
import TextField from "@mui/material/TextField";
import { Avatar, Grid, IconButton, Link, Typography } from "@mui/material";
import { PermIdentity, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Navbar = () => {
  let router = useRouter();
  let token = useSelector((state) => state.auth?.token);
  let user = useSelector((state) => state.auth?.user);

  const pageRedirector = (redirectVal) => {
    router.push(`/${redirectVal}`);
  };

  return (
    <div className={`${styles.navbar_container} navbar_container`}>
      <Grid container spacing={5} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.search_container}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="filled"
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
            {token ? (
              <div className={styles.user}>
                <Avatar alt="" src={user?.image} />
              </div>
            ) : (
              <div className={styles.user}>
                <IconButton onClick={() => pageRedirector("login")}>
                  <Typography variant="body1">Login</Typography>
                </IconButton>
                <IconButton>
                  <Typography variant="body1">/</Typography>
                </IconButton>
                <IconButton onClick={() => pageRedirector("register")}>
                  <Typography variant="body1">Register</Typography>
                </IconButton>
              </div>
            )}
            <div className={styles.user_shop}>
              <Badge badgeContent={4} color="success">
                <ShoppingCart color="action" />
              </Badge>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
