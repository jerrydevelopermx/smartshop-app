const styles = {
  body: {
    background: "#fff",
    fontFamily: "Verdana",
  },

  header: {
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    headerMenu: {
      textAlign: "center",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },

  container: {
    width: "95%",
    marginTop: "15px",
    marginBottom: "15px",
  },
  noResults: {
    container: {
      marginTop: "20px",
      width: "100%",
      textAlign: "center",
    },
    text: {
      fontSize: "25px",
    },
  },
  slider: {
    textAlign: "center",
  },
  searchFilter: {
    main: {
      border: "1px solid #ccc",
      zIndex: "1",
      margin: "20px",
      borderRadius: "8px",
    },
    container: { padding: "15px" },
    formControl: {
      width: "100%",
    },
  },
  video: {
    videoContainer: {
      marginTop: "30px",
      marginBottom: "30px",
    },
    videoPlayer: {
      margin: "auto",
      width: "85%",
      textAlign: "center",
    },
  },
  footer: {
    bottomBar: {
      padding: "30px",
    },
    footerUlList: {
      listStyleType: "circle",
      padding: "5% 15%",
      margin: "auto",
      textAlign: "left",
    },
    footerLinks: {
      textDecoration: "none",
    },
    centeredContent: {
      margin: "auto",
      textAlign: "center",
    },
    socialMediaIcons: {
      width: "26px",
      margin: "0 3px",
    },
  },

  buttons: {
    loginButton: {},
  },
};

export default styles;
