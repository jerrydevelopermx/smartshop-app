import React from "react";
import { useParams } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/client";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";
import Container from "@material-ui/core/Container";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

function BlogPage(props) {
  let { id, productId } = useParams();
  /*const { loading, error, data } = useQuery(queries.GET_BLOG_PAGE_INFO, {
    variables: {
      storeId: id !== undefined ? id : 0,
      section: "blog",
    },
  });*/
  const { loading, error, data } = useQuery(queries.GET_CONTENT_BY_ID, {
    variables: {
      id: 51,
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
      <Container component="main" style={{ marginTop: "120px" }} maxWidth="lg">
        <div>{data.newContent && ReactHtmlParser(data.newContent.content)}</div>
      </Container>
      <Footer
        appStyles={appStyles.footer}
        styles={data.page.styles.footer}
        content={js.footer}
        socialMedia={data.page.footer}
      />
    </div>
  );
}

export default BlogPage;
