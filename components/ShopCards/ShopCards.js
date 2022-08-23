import { Link, Typography } from "@mui/material";
import React from "react";
import styles from "./ShopCards.module.scss";
import { AddShoppingCart } from "@mui/icons-material";
import { PrimaryButton } from "../Button/Button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux/actions/alert";

const ShopCards = ({ title, description, price, image }) => {
  let dispatch = useDispatch();
  let token = useSelector((state) => state.auth?.token);

  const addToCard = () => {
    if (!token) {
      dispatch(
        setAlert({
          type: "error",
          message: "Login first to add items",
          time: 2000,
        })
      );
    }else{
      
    }
  };

  return (
    <div className={styles.shop_card_container}>
      <div className={`${styles.img_container}  darkBlackColor`}>
        <Image
          src={image}
          width={400}
          height={350}
          objectFit="contain"
          alt="cart shirt for sale"
        />
      </div>
      <div className={`${styles.shop_card_content}`}>
        <Link href="#" underline="hover">
          <Typography variant="h3">{title}</Typography>
        </Link>
        <Typography variant="body1">{description}</Typography>
        <div className={styles.shop_card_price}>
          <Typography variant="body1" className={styles.price_text}>
            Price
          </Typography>
          <Typography variant="body1" className={styles.price_text}>
            {price} PKR
          </Typography>
        </div>
        <div className={styles.btn_container}>
          <PrimaryButton onClick={addToCard}>
            <AddShoppingCart /> Add To cart
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
