import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavHashLink as NavLink } from "react-router-hash-link";
import SocialMedia from "./SocialMedia";

function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <Grid container spacing={2}>
        {props.content &&
          props.content.columns.length > 0 &&
          props.content.columns.map((column) => (
            <Grid item key={column.id} xs={6} sm={6} md={3}>
              <div className={props.classes.centeredContent}>
                {column.title}
                <div className={props.classes.footerUlList}>
                  <ul style={{ listStyleType: "circle", padding: "5% 15%" }}>
                    {column.options.map((option, index) => (
                      <li key={"footOpt" + index}>
                        <NavLink className={props.classes.footerLinks} to="">
                          {option.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className={props.classes.centeredContent}>
                    {column.social ? (
                      <SocialMedia
                        networks={column.social}
                        classes={props.classes}
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
