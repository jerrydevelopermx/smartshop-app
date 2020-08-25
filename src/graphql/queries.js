import { gql } from "@apollo/client";

const queries = {
  GET_PAGE_INFO: gql`
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
              color
            }
            footerLinks {
              color
            }
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
            paper {
              background
              color
            }
            list {
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
        hoverImage
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
  `,
  GET_CONTENT_BY_SECTION: gql`
    query GetContent($storeId: ID!, $sectionId: String) {
      content(storeId: $storeId, sectionId: $sectionId) {
        pageId
        sectionId
        title
        content {
          type
          text
        }
      }
    }
  `,
};

export default queries;
