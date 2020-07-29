import React from "react";
import Grid from "@material-ui/core/Grid";

function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          ABOUT US
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          DISCLAIMERS
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          TWEETS
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          JOIN US
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
