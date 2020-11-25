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

function BlogPage(props) {
  let { id, productId } = useParams();
  const { loading, error, data } = useQuery(queries.GET_BLOG_PAGE_INFO, {
    variables: {
      storeId: id !== undefined ? id : 0,
      section: "blog",
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
        <h2>Blog page</h2>
        <div>
          {data.content.content &&
            data.content.content.length > 0 &&
            data.content.content.map((paragraph, index) => (
              <Typography variant="body2" key={"pr" + index} paragraph={true}>
                {paragraph.text}
              </Typography>
            ))}
        </div>
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