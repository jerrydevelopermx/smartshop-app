import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavHashLink as NavLink } from "react-router-hash-link";
import SocialMedia from "./SocialMedia";

function Footer(props) {
  return (
    <footer style={props.styles.bottomBar}>
      <Grid container spacing={2}>
        {props.content &&
          props.content.columns.length > 0 &&
          props.content.columns.map((column) => (
            <Grid item key={column.id} xs={6} sm={6} md={3}>
              <div style={props.styles.centeredContent}>
                {column.title}
                <div style={props.styles.footerLinks}>
                  <ul style={{ listStyleType: "circle", padding: "5% 15%" }}>
                    {column.options.map((option, index) => (
                      <li key={"footOpt" + index}>
                        <NavLink style={props.styles.footerLinks} to="">
                          {option.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div style={props.styles.centeredContent}>
                    {column.social ? (
                      <SocialMedia
                        networks={column.social}
                        classes={props.classes}
                        styles={props.styles.socialMediaIcons}
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
