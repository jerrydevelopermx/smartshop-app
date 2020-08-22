import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { NavHashLink as NavLink } from "react-router-hash-link";
import SocialMedia from "./SocialMedia";

function Footer(props) {
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();
  return (
    <footer className={classes.bottomBar} style={props.styles.bottomBar}>
      <Grid container spacing={2}>
        {props.content &&
          props.content.columns.length > 0 &&
          props.content.columns.map((column) => (
            <Grid item key={column.id} xs={6} sm={6} md={3}>
              <div className={classes.centeredContent}>
                {column.title}
                <div className={classes.footerLinks}>
                  <ul className={classes.footerUlList}>
                    {column.options.map((option, index) => (
                      <li key={"footOpt" + index}>
                        <NavLink
                          style={props.styles.footerLinks}
                          className={classes.footerLinks}
                          to=""
                        >
                          {option.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className={classes.centeredContent}>
                    {column.social ? (
                      <SocialMedia
                        networks={column.social}
                        styles={classes.socialMediaIcons}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </footer>
  );
}

export default Footer;
