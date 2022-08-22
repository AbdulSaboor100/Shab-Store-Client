import React from "react";
import ProductData from "../../components/ProductData/ProductData";
import Layout from "../../layouts/Layout/Layout";
import styles from "./ShabP.module.scss";

const ProductPage = () => {
  let productData = {
    title: "Polo Shirt 3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "800",
    image: "/images/polo_1.jpg",
  };

  return (
    <div className={styles.product_page_container}>
      <Layout>
        <ProductData
          title={productData?.title}
          description={productData?.description}
          image={productData?.image}
          price={productData?.price}
        />
      </Layout>
    </div>
  );
};

export default ProductPage;
