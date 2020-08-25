import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import ItemsGrid from "./common/ItemsGrid";
import SearchFilter from "./common/SearchFilter";
import VideoGallery from "./common/VideoGallery";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Slider from "./common/Slider";
import { useQuery } from "@apollo/client";
import appStyles from "../styles/app.js";
import queries from "../graphql/queries.js";
import NoResults from "./common/NoResults";

function StorePage(props) {
  let gridItems = [];
  const [pageId, setPageId] = useState(0);
  const [filters, setFilters] = useState([]);
  const [categoryFilteredItems, setCategoryFilteredItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [filtersApplied, setFiltersApplied] = useState([]);

  const { loading, error, data } = useQuery(queries.GET_PAGE_INFO, {
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

  return (
    <div style={data.page.styles.body}>
      <Header
        logo={data.page.logo}
        menu={data.page.headerMenu}
        pageId={data.page.id}
        inputRef={videoRef}
        styles={data.page.styles.header}
        appStyles={appStyles.header}
      />
      <main>
        <Slider
          id="home-scroll"
          autoplay={true}
          maxHeight="350px"
          slides={data.page.slides}
          styles={data.page.styles.slider}
          appStyles={appStyles.slider}
        />

        <Container style={appStyles.container} maxWidth={false}>
          <SearchFilter
            onCategoryChange={categoryChangeHandler}
            onFilterChange={filterChangeHandler}
            categories={data.page.categories}
            filters={filters}
            appStyles={appStyles.searchFilter}
          />

          <ItemsGrid
            items={filteredItems !== null ? filteredItems : data.storeGrid}
            pageId={data.page.id}
            styles={data.page.styles.grid}
            detailStyles={data.page.styles.detailsModal}
            buttonsStyles={data.page.styles.buttons}
          />

          {filteredItems !== null && filteredItems.length === 0 ? (
            <NoResults appStyles={appStyles.noResults} />
          ) : null}

          <VideoGallery
            inputRef={videoRef}
            video={data.page.video}
            styles={data.page.styles.video}
            appStyles={appStyles.video}
          />
          <Slider
            id="events-scroll"
            maxHeight="350px"
            autoplay={true}
            slides={data.page.offers}
            styles={data.page.styles.slider}
            appStyles={appStyles.slider}
          />
        </Container>
      </main>
      <Footer
        appStyles={appStyles.footer}
        styles={data.page.styles.footer}
        content={data.page.footer}
      />
    </div>
  );
}

export default StorePage;
