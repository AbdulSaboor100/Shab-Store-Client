import React, { useState, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  cancelProductToCart,
  cartClosed,
  removeProductToCart,
} from "../../redux/actions/cart";
import { Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Cart.module.scss";
import {
  AddShoppingCart,
  Add,
  Remove,
  DeleteForever,
} from "@mui/icons-material";

const Cart = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let allProducts = useSelector((state) => state.cart?.products);

  const [state, setState] = useState({
    right: false,
  });

  useEffect(() => {
    setState({
      right: cart?.cartVal,
    });
  }, [cart?.cartVal]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(cartClosed());
    setState({ ...state, [anchor]: open });
  };

  const addProduct = (item) => {
    dispatch(addProductToCart(item, allProducts));
  };

  const cancelProduct = (item) => {
    dispatch(cancelProductToCart(item, allProducts));
  };

  const removeProduct = (item) => {
    dispatch(removeProductToCart(item, allProducts));
  };

  const list = (anchor) => (
    <Box role="presentation" sx={{ width: "500px" }}>
      <List>
        <Grid container>
          <Grid item xs={12} md={12}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={<Typography variant="h3">Cart</Typography>}
                />
              </ListItemButton>
            </ListItem>
          </Grid>
          {cart?.products[0] ? (
            cart?.products?.map((item, i) => (
              <Fragment>
                <Grid item xs={12} md={12}>
                  <div className={styles.cart_item_container}>
                    <div className={styles.cart_content}>
                      <span>{i + 1}</span>
                      <Image
                        src={item?.image}
                        width={50}
                        height={50}
                        objectFit="contain"
                        alt="cart image"
                      />
                      <div className={styles.content_container}>
                        <Typography variant="h4">
                          {item?.title} {`(${item?.totalitems})`}
                        </Typography>
                        <Typography variant="body1">{item?.price}</Typography>
                      </div>
                    </div>
                    <div className={styles.btn_container}>
                      <div className={styles.add_and_remove_container}>
                        <IconButton onClick={() => addProduct(item)}>
                          <Add />
                        </IconButton>
                        <IconButton onClick={() => cancelProduct(item)}>
                          <Remove />
                        </IconButton>
                      </div>
                      <IconButton onClick={() => removeProduct(item)}>
                        <DeleteForever />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Fragment>
            ))
          ) : (
            <div className={styles.cart_empty_text_container}>
              <Typography variant="h4">Cart is empty</Typography>
            </div>
          )}
        </Grid>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        variant="temporary"
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default Cart;
