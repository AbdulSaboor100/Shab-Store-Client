import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={`${styles.footer} darkBlueColor`}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <div className={styles.footer_logo_container}>
              {/* <Image
                src="/images/logo_white.png"
                width={196}
                height={48}
                objectFit="contain"
                alt="logo"
              /> */}
              <Typography variant="h2">Shab Store</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <div className={styles.pages_container}>
              <Typography variant="h4">Pages</Typography>
              <Typography variant="body1">Home</Typography>
              <Typography variant="body1">Podcast</Typography>
              <Typography variant="body1">Host</Typography>
              <Typography variant="body1">Blog</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <div className={styles.reachus_container}>
              <Typography variant="h4">Reach Us</Typography>
              <Typography variant="body1">Contact</Typography>
              <Typography variant="body1">About</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <div className={styles.subscribe_container}>
              <Typography variant="h4">Subscribe</Typography>
              <Image
                src="/images/apple_podcast_white.png"
                width={182}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
              />{" "}
              <Image
                src="/images/google_podcast_white.png"
                width={182}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
              />{" "}
              <Image
                src="/images/sound_podcast_white.png"
                width={182}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
              />{" "}
              <Image
                src="/images/spotify_white.png"
                width={127}
                height={32}
                objectFit="contain"
                alt="apple podcast logo"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`${styles.footer_line_container} darkBlackColor`}>
        <Typography variant="body1">© Copyright Shab Store 2021</Typography>
      </div>
    </div>
  );
};

export default Footer;
