const styles = {
  body: {
    background: "#fff",
    fontFamily: "Verdana",
  },
  header: {
    topBar: { background: "#590F10" },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
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
    footerColumn: {
      width: "100%",
      margin: "auto",
      textAlign: "left",
    },
    footerUlList: {
      listStyleType: "circle",
      padding: "5% 15%",
      width: "100%",
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
};

export default styles;
