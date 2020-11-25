import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { NavHashLink as NavLink } from "react-router-hash-link";
import SocialMedia from "./SocialMedia";
import { useLazyQuery } from "@apollo/client";
import queries from "../../graphql/queries.js";
import ModalContent from "./ModalContent";

function Footer(props) {
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();
  const [getContent, { loading, data }] = useLazyQuery(
    queries.GET_CONTENT_BY_SECTION
  );
  const [modalStatus, setModalStatus] = useState({
    open: false,
    sectionId: "",
    storeId: props.pageId,
  });

  const menuClickHandler = (action, event) => {
    event.preventDefault();
    getContent({
      variables: {
        storeId: props.pageId,
        sectionId: action,
      },
    });
    setModalStatus({ ...modalStatus, ...{ open: true, sectionId: action } });
  };
  function closeModal() {
    setModalStatus({
      ...modalStatus,
      ...{ open: false },
    });
  }

  return (
    <footer className={classes.bottomBar} style={props.styles.bottomBar}>
      {data && data.content ? (
        <ModalContent
          open={modalStatus.open}
          styles={props.modalStyles}
          status={modalStatus}
          onClose={closeModal}
          content={data.content}
        />
      ) : null}
      <Grid container spacing={2}>
        {props.content &&
          props.content.columns.length > 0 &&
          props.content.columns.map((column, index) => (
            <Grid item key={column.id} xs={6} sm={6} md={3}>
              <div className={classes.centeredContent}>
                {column.title}
                <div>
                  <ul className={classes.footerUlList}>
                    {column.options.map((option, index) => (
                      <li key={"footOpt" + index}>
                        <NavLink
                          style={props.styles.footerLinks}
                          className={classes.footerLinks}
                          to=""
                          onClick={(e) => menuClickHandler(option.action, e)}
                        >
                          {option.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  {index === 3 ? (
                    <div className={classes.centeredContent}>
                      <SocialMedia
                        availableNetworks={props.content.socialNetworks}
                        networks={props.socialMedia.social}
                        styles={classes.socialMediaIcons}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
      <div style={{ textAlign: "center" }}>@{props.content.copyright}</div>
    </footer>
  );
}

export default Footer;
