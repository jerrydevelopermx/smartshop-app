//import Header from "./common/Header";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LayoutsPage from "./LayoutsPage";
import StorePage from "./StorePage";
import FullPage from "./FullPage";
import ProductPage from "./ProductPage";
import BlogPage from "./BlogPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/layouts" component={LayoutsPage} />

        <Route path="/" exact component={StorePage} />
        <Route exact path="/store/:id" component={StorePage} />

        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/store/:id/blog" component={BlogPage} />

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
