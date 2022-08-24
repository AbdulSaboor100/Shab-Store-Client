import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import TextField from "@mui/material/TextField";
import { Avatar, Grid, IconButton, Link, Typography } from "@mui/material";
import { PermIdentity, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { userLogout } from "../../redux/actions/auth";
import { cartOpen } from "../../redux/actions/cart";

const Navbar = () => {
  let router = useRouter();
  let token = useSelector((state) => state.auth?.token);
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.auth?.user);

  let [totalProducts, setTotalProducts] = useState(0);
  const [menu, setMenu] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    let number = null;
    cart?.products?.filter((item, i) => {
      number = number + item.totalitems;
    });
    setTotalProducts(number);
  }, [cart]);

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(false);
  };

  const pageRedirector = (redirectVal) => {
    router.push(`/${redirectVal}`);
  };

  const cartDrawerOpenner = () => {
    dispatch(cartOpen());
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
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar alt="" src={user?.image} />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={menu}
                  open={menu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className="menu_container"
                >
                  <MenuItem onClick={handleClose}>{user?.name}</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(userLogout(router));
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
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
              <IconButton onClick={cartDrawerOpenner}>
                <Badge badgeContent={totalProducts} color="success">
                  <ShoppingCart color="action" />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
