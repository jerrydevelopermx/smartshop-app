import React from "react";
import { useParams } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useQuery } from "@apollo/client";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";
import Grid from "@material-ui/core/Grid";

import LeftNavBar from "./admin/LeftNavBar";
import Users from "./admin/Users";
import Departments from "./admin/Departments";
import Campaigns from "./admin/Campaigns";
import ContentManager from "./admin/ContenManager";
import Hidden from "@material-ui/core/Hidden";
import Inventory from "./admin/Inventory";
import UserQueries from "./admin/UserQueries";
import UserEvents from "./admin/UserEvents";
import IncidentManager from "./admin/IncidentManager";

function AdminPage(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  let { id, section, action, departmentId, deptSection } = useParams();
  console.log(id, section, action, departmentId, deptSection);
  const { loading, error, data } = useQuery(queries.GET_FULL_PAGE, {
    variables: {
      storeId: id !== undefined ? id : 0,
    },
  });
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return (
    <div style={data.page.styles.body}>
      <Header
        logo={data.page.logo}
        blogLink={data.page.blogLink}
        menu={js.header}
        pageId={data.page.id}
        styles={data.page.styles.header}
        modalStyles={data.page.styles.modalStyles}
        appStyles={appStyles.header}
      />
      <main
        style={{
          marginTop: "100px",
          height: "100%",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            sm={2}
            md={2}
            style={{ background: data.page.styles.header.topBar.background }}
          >
            <Hidden only={["xs"]}>
              <LeftNavBar
                styles={data.page.styles.header}
                pageId={data.page.id}
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={2} md={10}>
            {
              {
                undefined: {
                  undefined: (
                    <div>
                      <h1>Welcome to SmartShop Admin Page!</h1>
                      <h3>User: {user.userName}</h3>
                      <h3>UserType: {user.userType}</h3>
                      <h3> Store: {user.store}</h3>
                    </div>
                  ),
                  cms: (
                    <ContentManager
                      action={action}
                      styles={data.page.styles.header}
                      pageId={departmentId}
                      appButtons={appStyles.buttons}
                    />
                  ),
                  campaigns: (
                    <Campaigns
                      action={action}
                      buttons={appStyles.buttons}
                      styles={data.page.styles.header}
                      pageId={departmentId}
                    />
                  ),
                  inventory: (
                    <Inventory
                      action={action}
                      buttons={appStyles.buttons}
                      styles={data.page.styles.header}
                      pageId={departmentId}
                      modalStyles={data.page.styles.modalStyles}
                    />
                  ),
                }[deptSection],
                users: (
                  <Users
                    action={action}
                    styles={data.page.styles.header}
                    buttons={appStyles.buttons}
                    pageId={data.page.id}
                  />
                ),
                userQueries: <UserQueries />,
                userTracker: <UserEvents />,
                incidents: <IncidentManager />,
                departments: (
                  <Departments
                    action={action}
                    buttons={appStyles.buttons}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                  />
                ),
                campaigns: (
                  <Campaigns
                    action={action}
                    buttons={appStyles.buttons}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                  />
                ),
                inventory: (
                  <Inventory
                    action={action}
                    buttons={appStyles.buttons}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                    modalStyles={data.page.styles.modalStyles}
                  />
                ),
                cms: (
                  <ContentManager
                    action={action}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                    appButtons={appStyles.buttons}
                  />
                ),
              }[section]
            }
          </Grid>
        </Grid>
      </main>
      <Footer
        appStyles={appStyles.footer}
        styles={data.page.styles.footer}
        content={js.footer}
        socialMedia={data.page.footer}
      />
    </div>
  );
}

export default AdminPage;
