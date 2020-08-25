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
  grid: {
    cardGrid: {
      paddingTop: "30px",
      paddingBottom: "30px",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
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
    closeModal: {
      root: {
        color: "#fff",
        backgroundColor: "#590F10",
        hover: {
          backgroundColor: "#350909",
        },
      },
    },
    addToCart: {
      root: {
        color: "#fff",
        backgroundColor: "#228b22",
        hover: {
          backgroundColor: "#1b6f1b",
        },
      },
    },
    wishList: {
      root: {
        color: "#fff",
        backgroundColor: "#6c4675",
        hover: {
          backgroundColor: "#56385e",
        },
      },
    },
    checkout: {
      root: {
        color: "#fff",
        backgroundColor: "#cccc00",
        hover: {
          backgroundColor: "#a3a300",
        },
      },
    },
    viewMore: {
      root: {
        color: "#fff",
        backgroundColor: "#ffa500",
        hover: {
          backgroundColor: "#cc8400",
        },
      },
    },
  },
};

export default styles;
