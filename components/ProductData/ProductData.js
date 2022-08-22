import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./ProductData.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { PrimaryButton } from "../Button/Button";
import { AddShoppingCart } from "@mui/icons-material";

const ProductData = ({ image, title, description, price }) => {
  return (
    <div className={`${styles.product_page_container} product_page_container`}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={`${styles.product_page_img_container} darkGreyColor`}>
            <Image
              src={image}
              width={500}
              height={500}
              objectFit="contain"
              alt="product image"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.product_page_content_container}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <div className={styles.product_page_color_container}>
              <Typography variant="body1">Color</Typography>
              <div className={styles.choose_color_container}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="white"
                    control={<Radio />}
                    label="White"
                  />
                  <FormControlLabel
                    value="blue"
                    control={<Radio />}
                    label="blue"
                  />
                  <FormControlLabel
                    value="yellow"
                    control={<Radio />}
                    label="yellow"
                  />
                  <FormControlLabel
                    value="black"
                    control={<Radio />}
                    label="black"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className={styles.product_page_size_container}>
              <Typography variant="body1">Size</Typography>
              <div className={styles.choose_size_container}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Small"
                    control={<Radio />}
                    label="Small"
                  />
                  <FormControlLabel
                    value="Medium"
                    control={<Radio />}
                    label="Medium"
                  />
                  <FormControlLabel
                    value="Large"
                    control={<Radio />}
                    label="Large"
                  />
                  <FormControlLabel
                    value="X-Large"
                    control={<Radio />}
                    label="X-Large"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className={styles.product_page_price_container}>
              <Typography variant="body1">Price</Typography>
              <Typography variant="body1">{price} PKR</Typography>
            </div>
            <div className={styles.btn_container}>
              <PrimaryButton>
                {" "}
                <AddShoppingCart /> Add To cart
              </PrimaryButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductData;
