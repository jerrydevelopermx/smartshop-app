//import Header from "./common/Header";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LayoutsPage from "./LayoutsPage";
import StorePage from "./StorePage";
import FullPage from "./FullPage";
import ProductPage from "./ProductPage";
import BlogPage from "./BlogPage";
import AdminPage from "./AdminPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/layouts" component={LayoutsPage} />

        <Route path="/" exact component={StorePage} />
        <Route exact path="/store/:id" component={StorePage} />

        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/store/:id/blog" component={BlogPage} />

        <Route exact path="/admin" component={AdminPage} />
        <Route
          exact
          path="/admin/departments/:departmentId/:deptSection"
          component={AdminPage}
        />
        <Route exact path="/admin/:section" component={AdminPage} />
        <Route exact path="/admin/:section/:action" component={AdminPage} />

        <Route
          exact
          path="/admin/:section/:action/:resourceId"
          component={AdminPage}
        />
        <Route exact path="/store/:id/admin" component={AdminPage} />
        <Route exact path="/store/:id/admin/:section" component={AdminPage} />
        <Route
          exact
          path="/store/:id/admin/:section/:action"
          component={AdminPage}
        />
        <Route
          exact
          path="/store/:id/admin/:section/:action/:resourceId"
          component={AdminPage}
        />

        {/*
        /admin/departments/ID/campaigns
/admin/departments/ID/cms 
/admin/departments/ID/inventory
        */}
        <Route
          exact
          path="/store/:id/product/:productId"
          component={ProductPage}
        />
        {/**
         * :id - Store Id
         * :section - section to display
         * --> values: login, register, blog, admin,
         *
         */}
        <Route path="/store/:id/:section" component={FullPage} />
        <Route path="/:section" component={FullPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
