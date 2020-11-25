import React from "react";
import { useParams } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useQuery } from "@apollo/client";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import js from "../js/components.js";
import LoginForm from "../components/common/LoginForm";
import RegisterForm from "../components/common/RegisterForm";
import ResetPasswordForm from "./common/ResetPasswordForm";

function FullPage(props) {
  let { id, section } = useParams();
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
      <main style={{ marginTop: "120px" }}>
        {section === "login" ? (
          <LoginForm styles={data.page.styles.header} pageId={data.page.id} />
        ) : section === "register" ? (
          <RegisterForm styles={data.page.styles.header} />
        ) : (
          <ResetPasswordForm
            styles={data.page.styles.header}
            pageId={data.page.id}
          />
        )}
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

export default FullPage;