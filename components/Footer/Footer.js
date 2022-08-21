import React from "react";
import { Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "../Button/Button";
import { Instagram, Facebook } from "@mui/icons-material";

const Footer = () => {
  const GridContainer = ({ children, rowReverse }) => {
    if (rowReverse) {
      return (
        <div
          className={`${styles.grid_container}`}
          style={{ flexDirection: "row-reverse" }}
        >
          {children}
        </div>
      );
    } else {
      return <div className={`${styles.grid_container}`}>{children}</div>;
    }
  };
  const GridItem = ({ children, size }) => {
    if (size == 2) {
      return <section className={styles.grid_2}>{children}</section>;
    }
  };
  return (
    <div className={styles.footer_new_container}>
      <div className={`${styles.footer_container} darkGreyColor`}>
        <div className={styles.footer}>
          <GridContainer>
            <GridItem size={2}>
              <div className={styles.footer_logo_img_container}>
                {/* <Image
                  src="/images/logo.png"
                  width={184}
                  height={192}
                  objectFit="contain"
                  alt="footer logo"
                  placeholder="blur"
                  blurDataURL="/images/logo.png"
                /> */}
                <Typography variant="h3">Shab Store</Typography>
              </div>
            </GridItem>
            <GridItem size={2}>
              <div className={styles.locations_container}>
                <Typography variant="h5">Locations</Typography>
                <Link href="/roseville-seo">
                  <Typography variant="body1">Roseville SEO</Typography>
                </Link>
                <Link href="/folsom-seo-company">
                  <Typography variant="body1">Folsom SEO</Typography>
                </Link>
                <Link href="/roseville-web-design">
                  <Typography variant="body1">Roseville Web Design</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Rocklin Web Design</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Davis SEO</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Davis Web Design</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Elk Grove Web Design</Typography>
                </Link>
              </div>
            </GridItem>
            <GridItem size={2}>
              <div className={styles.services_container}>
                <Typography variant="h5">Services</Typography>
                <Link href="/">
                  <Typography variant="body1">Custom Websites</Typography>
                </Link>

                <Link href="/">
                  <Typography variant="body1">SEO</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Google Ads</Typography>
                </Link>
                <Link href="/">
                  <Typography variant="body1">Facebook Ads</Typography>
                </Link>
              </div>
            </GridItem>
            <GridItem size={2}>
              <div className={styles.helpline_container}>
                <Typography variant="body1">Give us a call</Typography>

                <Typography component="span">
                  {" "}
                  <a style={{ color: "white" }} href="tel:+15302886918">
                    +1 (530) 288-6918{" "}
                  </a>
                </Typography>

                <Typography variant="body1">Email us. Anytime.</Typography>
                <Typography component="span">
                  <a style={{ color: "white" }} href="mailto:info@arcel.com">
                    info@arcel.com
                  </a>
                </Typography>
              </div>
            </GridItem>
            <GridItem size={2}>
              <div className={styles.follow_us_container}>
                <Typography variant="span">Social Links</Typography>
                <div className={styles.social_icons}>
                  <a
                    href="https://www.facebook.com/ArchitectedRelations/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.google.com/search?q=architected+relations&rlz=1C5CHFA_enUS884US884&oq=architected+relations&aqs=chrome..69i57j69i59j69i61l3.4677j0j1&sourceid=chrome&ie=UTF-8#lrd=0x809b238c2a250c59:0x8ab5a6a96e13ae89,1,,,"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <hr />
          <p className={styles.copyright}>
            {new Date().getFullYear()} © Shab Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
