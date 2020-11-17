//import Header from "./common/Header";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LayoutsPage from "./LayoutsPage";
import StorePage from "./StorePage";
import FullContentPage from "./common/FullContentPage";
import ProductPage from "./ProductPage";
import BlogPage from "./BlogPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={StorePage} />
        <Route path="/layouts" component={LayoutsPage} />
        <Route path="/store/:id/services" component={FullContentPage} />

        <Route path="/blog" component={BlogPage} />
        <Route path="/store/:id/blog" component={BlogPage} />
        <Route path="/store/:id/product/:productId" component={ProductPage} />
        <Route path="/store/:id" component={StorePage} />

        <Route path="/services" component={FullContentPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
