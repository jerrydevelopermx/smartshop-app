import React from "react";
import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppearanceForm from "./forms/AppearanceForm";
import ContentForm from "./forms/ContentForm";
import JsonContent from "./forms/JsonContent";
import { useQuery } from "@apollo/client";
import queries from "../../graphql/queries";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function ContentManager(props) {
  console.log(props);
  const { loading, error, data } = useQuery(queries.GET_CMS_BY_ID, {
    variables: {
      siteId: props.pageId,
    },
  });
  const useStyles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: props.styles.topBar.background,
    },
  }));
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function getData(data, type) {
    const {
      siteID,
      siteTitleText,
      siteMetaDescriptionText,
      siteLogoLink,
      ourServMissionJson,
      ourServWhoWeRJson,
      ourServBoardJson,
      ourServFeaturesJson,
      ourServMmbshipJson,
      tourDefaultLink,
      event1DefaultLink,
      event2DefaultLink,
      event3DefaultLink,
      contactUsJson,
      blogLink,
      slide1DefaultLink,
      slide2DefaultLink,
      slide3DefaultLink,
      slide4DefaultLink,
      slide5DefaultLink,
      footerHistoryJson,
      sitePoliciesJson,
      siteMembersPolicyJson,
      siteCustomrsPolicyJson,
      siteVisitorsPolicyJson,
      siteMainColorRGB,
      siteBodyColorRGB,
      siteFontNameText,
      siteMainFontColorText,
      siteBodyFontColorText,
      siteFacebookLink,
      siteTwitterLink,
      siteInstagramLink,
      sitePinterestLink,
      siteCopyrights,
    } = data;
    switch (type) {
      case "appearance":
        return {
          siteID,
          siteLogoLink,
          siteBodyColorRGB,
          siteBodyFontColorText,
          siteFontNameText,
          siteMainColorRGB,
          siteMainFontColorText,
        };
        break;
      case "content":
        return { siteID, siteLogoLink };
        break;
    }
  }
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;
  return (
    <Container component="main" maxWidth="lg">
      <h2>Content Manager System</h2>
      <Paper square>
        <Tabs
          TabIndicatorProps={{ className: classes.indicator }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Appearance" {...a11yProps(0)} />
          <Tab label="General Content" {...a11yProps(1)} />
          <Tab label="Sections Content" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <AppearanceForm
          styles={props.styles}
          appButtons={props.appButtons}
          data={getData(data.siteCMS, "appearance")}
          pageId={props.pageId}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentForm styles={props.styles} appButtons={props.appButtons} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JsonContent styles={props.styles} />
      </TabPanel>
    </Container>
  );
}

export default ContentManager;
