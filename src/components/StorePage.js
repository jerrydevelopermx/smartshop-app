import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ItemsGrid from "./common/ItemsGrid";
import SearchFilter from "./common/SearchFilter";
import VideoGallery from "./common/VideoGallery";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Slider from "./common/Slider";
import { useQuery, gql } from "@apollo/client";

const GET_PAGE_INFO = gql`
  query GetPageInfo($storeId: ID!) {
    page(id: $storeId) {
      name
      id
      logo
      coverImage
      description
      headerMenu {
        type
        label
        url
        action
        items {
          text
          action
        }
      }
      slides {
        img
        text
      }
      categories {
        id
        name
        filters {
          id
          name
          values
        }
      }
      offers {
        img
        text
      }
      video {
        autoPlay
        poster
        src
      }
      footer {
        columns {
          id
          title
          options {
            text
            url
          }
          social
        }
        copyright
      }
      styles {
        body {
          background
          fontFamily
        }
        header {
          topBar {
            background
            height
          }
          toolbarSecondary {
            justifyContent
            overflowX
            marginTop
          }
          toolbarLink {
            width
            padding
            flexShrink
          }
          headerActive {
            color
          }
          headerMenu {
            color
            fontSize
            textDecoration
            width
            textAlign
          }
          styledMenu {
            paper {
              backgroundColor
              color
            }
          }
          styledMenuItem {
            root {
              hover {
                backgroundColor
              }
            }
          }
        }
        footer {
          bottomBar {
            background
            fontSize
            padding
            color
          }
          footerColumn {
            width
            margin
            textAlign
          }
          footerLinks {
            color
            textDecoration
          }
          centeredContent {
            margin
            textAlign
          }
          socialMediaIcons {
            margin
            width
          }
        }
        searchFilter {
          searchContent {
            border
            padding
            margin
          }
          searchField {
            margin
            minWidth
            borderCollapse
            borderRadius
          }
        }
        video {
          videoContainer {
            marginTop
            marginBottom
          }
          videoPlayer {
            margin
            width
            textAlign
          }
        }
        slider {
          marginTop
          textAlign
        }
        grid {
          cardGrid {
            paddingTop
            paddingBottom
          }
          card {
            height
            display
          }
          cardMedia {
            paddingTop
          }
          cardContent {
            flexGrow
          }
        }
        contentModal {
          contentModalsHeader {
            background
            color
          }
          contentModalsBody {
            background
          }
          closeButton {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
        }
        mobileNavBar {
          drawer {
            background
            color
          }
          drawerList {
            width
          }
        }
        detailsModal {
          detailsHeader {
            background
            color
          }
          detailsBody {
            background
          }
        }
        buttons {
          closeModal {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
          addToCart {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
          wishList {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
          checkout {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
          viewMore {
            root {
              color
              backgroundColor
              hover {
                backgroundColor
              }
            }
          }
        }
      }
    }

    storeGrid(storeId: $storeId) {
      id
      name
      type
      categoryId
      color
      size
      style
      material
      name
      coverImage
      description
      price
      specifications
      warranties
      attributes {
        name
        values
      }
    }
  }
`;

function StorePage(props) {
  let gridItems = [];
  const [pageId, setPageId] = useState(0);
  const [filters, setFilters] = useState([]);
  const [categoryFilteredItems, setCategoryFilteredItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [filtersApplied, setFiltersApplied] = useState([]);

  const { loading, error, data } = useQuery(GET_PAGE_INFO, {
    variables: { storeId: props.match.params.id ? props.match.params.id : 0 },
  });

  const videoRef = useRef();

  useEffect(() => {
    const id = props.match.params.id ? props.match.params.id : 0;
    setPageId(id);
    setFilteredItems(null);
  }, [props.match.params.id]);

  if (loading) return <p>Still loading..</p>;
  if (error) return <p>There is an error!</p>;

  function categoryChangeHandler({ target }) {
    gridItems = data.storeGrid.filter(
      (store) => store.categoryId === target.value
    );
    let category = data.page.categories.find(
      (category) => category.id === target.value
    );
    setCategoryFilteredItems(gridItems);
    setFilteredItems(gridItems);
    setFilters(category.filters);
    //setCategoryId(target.value);
  }

  function filterChangeHandler(type, value) {
    console.log(type, value);
    let filtered = categoryFilteredItems.filter((element) => {
      //console.log(filtersApplied);
      if (filtersApplied.length === 0) {
        console.log("solo un filtro");
      } else {
        console.log("mas de un filtro");
      }
      return element[type.toLowerCase()] === value;
    });
    setFiltersApplied([{ type, value }, ...filtersApplied]);
    console.log(filtered);

    setFilteredItems(filtered);
  }
  /*
  const useStyles = makeStyles((theme) => page.classes);
  const classes = useStyles();
*/
  return (
    <div style={data.page.styles.body}>
      <Header
        logo={data.page.logo}
        menu={data.page.headerMenu}
        pageId={data.page.id}
        inputRef={videoRef}
        styles={data.page.styles.header}
        modalStyles={data.page.styles.contentModal}
        mobileBarStyles={data.page.styles.mobileNavBar}
      />
      <main>
        <Slider slides={data.page.slides} styles={data.page.styles.slider} />

        <Container style={{ border: "1px solid" }}>
          <SearchFilter
            onCategoryChange={categoryChangeHandler}
            onFilterChange={filterChangeHandler}
            categories={data.page.categories}
            filters={filters}
            styles={data.page.styles.searchFilter}
          />
          <ItemsGrid
            items={filteredItems !== null ? filteredItems : data.storeGrid}
            pageId={data.page.id}
            styles={data.page.styles.grid}
            detailStyles={data.page.styles.detailsModal}
            buttonsStyles={data.page.styles.buttons}
          />
          <VideoGallery
            inputRef={videoRef}
            video={data.page.video}
            styles={data.page.styles.video}
          />
          <Slider
            id="events-scroll"
            slides={data.page.offers}
            styles={data.page.styles.slider}
          />
        </Container>
      </main>
      <Footer styles={data.page.styles.footer} content={data.page.footer} />
    </div>
  );
}

export default StorePage;
