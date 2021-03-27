import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactHtmlParser from "react-html-parser";
import Header from "./common/Header";
import Footer from "./common/Footer";
import GraphqlLoading from "./common/GraphqlLoading";
import GraphqlError from "./common/GraphqlError";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";

function BlogPage(props) {
  let { id } = useParams();
  const { loading, error, data } = useQuery(
    queries.GET_CONTENT_BY_SECTION_AND_PAGE,
    {
      variables: {
        sectionId: "blog",
        storeId: id !== undefined ? id : 0,
      },
    }
  );

  const useStyles = makeStyles((theme) => ({
    header: {
      [theme.breakpoints.only("xs")]: {
        marginTop: "70px",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "70px",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "80px",
      },

      [theme.breakpoints.up("lg")]: {
        marginTop: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "130px",
      },
    },
  }));
  const classes = useStyles();
  if (loading) return <GraphqlLoading />;
  if (error) return <GraphqlError />;

  return (
    <div style={data.page.styles.body}>
      <Header
        logo={data.page.logo}
        blogLink={data.page.bloglink}
        menu={js.header}
        pageId={data.page.id}
        styles={data.page.styles.header}
        modalStyles={data.page.styles.modalStyles}
        appStyles={appStyles.header}
      />
      <Container component="main" maxWidth="lg" className={classes.header}>
        {data.siteHtmlContent && ReactHtmlParser(data.siteHtmlContent.content)}
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
