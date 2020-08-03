import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavHashLink as NavLink } from "react-router-hash-link";

function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <Grid container spacing={4}>
        {props.content &&
          props.content.columns.length > 0 &&
          props.content.columns.map((column) => (
            <Grid item key={column.id} xs={6} sm={6} md={3}>
              <div style={{ margin: "auto", textAlign: "center" }}>
                {column.title}
                <div
                  style={{
                    width: "100%",
                    margin: "auto",
                    textAlign: "left",
                    border: "1px solid",
                  }}
                >
                  <ul style={{ listStyleType: "none", padding: "5% 15%" }}>
                    {column.options.map((option, index) => (
                      <li key={"footOpt" + index}>
                        <NavLink
                          style={{
                            color: "#fff",
                            textDecoration: "none",
                          }}
                          to=""
                        >
                          {option.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                style={{
                  margin: "auto",
                  textAlign: "left",
                }}
              ></div>
            </Grid>
          ))}
      </Grid>
    </footer>
  );
}

export default Footer;
