import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Header from "./common/Header";
import Footer from "./common/Footer";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";

import LeftNavBar from "./admin/LeftNavBar";
import Users from "./admin/Users";
import Departments from "./admin/Departments";
import Campaigns from "./admin/Campaigns";
import ContentManager from "./admin/ContenManager";
import Inventory from "./admin/Inventory";
import UserQueries from "./admin/UserQueries";
import UserEvents from "./admin/UserEvents";
import IncidentManager from "./admin/IncidentManager";
import { ToastContainer } from "react-toastify";
import EditForms from "./EditForms";

function AdminPage(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  let { id, section, action, departmentId, deptSection, itemId } = useParams();
  console.log(id, section, action, departmentId, deptSection);
  const { loading, error, data } = useQuery(queries.GET_PAGE_INFO, {
    variables: {
      storeId: id !== undefined ? id : 0,
    },
  });
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return (
    <div
      style={{
        background: data.page.styles.body.background,
        fontFamily: data.page.styles.body.fontfamily,
        color: data.page.styles.body.color,
      }}
    >
      <ToastContainer
        position="top-right"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        logo={data.page.logo}
        blogLink={data.page.bloglink}
        menu={js.header}
        pageId={data.page.id}
        styles={data.page.styles.header}
        modalStyles={data.page.styles.modalstyles}
        appStyles={appStyles.header}
        fontFamily={data.page.styles.body.fontfamily}
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
            style={{ background: data.page.styles.header.topbar.background }}
          >
            <Hidden only={["xs"]}>
              <LeftNavBar
                styles={data.page.styles.header}
                pageId={data.page.id}
                fontFamily={data.page.styles.body.fontfamily}
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={2} md={10}>
            {
              {
                undefined: {
                  // Non specific "Section" -- Admin's Department List sections
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
                      appStyles={appStyles}
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
                      modalStyles={data.page.styles.modalstyles}
                    />
                  ),
                  edit: (
                    <EditForms
                      type="DEPARTMENT"
                      action="edit"
                      styles={data.page.styles.header}
                    />
                  ),
                }[deptSection], // Admin's Department List sections

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
                campaigns: {
                  undefined: (
                    <Campaigns
                      action={action}
                      buttons={appStyles.buttons}
                      styles={data.page.styles.header}
                      pageId={data.page.id}
                    />
                  ),
                  edit: (
                    <EditForms
                      type="CAMPAIGN"
                      action="edit"
                      styles={data.page.styles.header}
                    />
                  ),
                  add: (
                    <EditForms
                      type="CAMPAIGN"
                      action="add"
                      styles={data.page.styles.header}
                    />
                  ),
                }[action],
                inventory: (
                  <Inventory
                    action={action}
                    appButtons={appStyles.buttons}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                    modalStyles={data.page.styles.modalstyles}
                  />
                ),
                cms: (
                  <ContentManager
                    action={action}
                    styles={data.page.styles.header}
                    pageId={data.page.id}
                    appButtons={appStyles.buttons}
                    appStyles={appStyles}
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
