import { gql } from "@apollo/client";

const queries = {
  GET_PAGE_INFO: gql`
    query GetPageInfo($storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        blogLink
        slides {
          img
        }
        categories {
          id
          name
          filters {
            id
            name
            values {
              id
              name
            }
          }
        }
        offers {
          img
        }
        video {
          src
        }
        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontFamily
            color
          }
          header {
            topBar {
              background
            }

            headerMenu {
              color
            }
            styledMenu {
              paper {
                backgroundColor
                color
              }
            }
            mobileNavBar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottomBar {
              background
              color
            }
            footerLinks {
              color
            }
          }
          modalStyles {
            header {
              background
              color
            }
            body {
              background
            }
            closeButton {
              root {
                color
                backgroundColor
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
  GET_BLOG_PAGE_INFO: gql`
    query Blog($storeId: ID!, $sectionId: String) {
      page(id: $storeId) {
        id
        name
        logo
        description
        blogLink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontFamily
            color
          }
          header {
            topBar {
              background
            }

            headerMenu {
              color
            }
            styledMenu {
              paper {
                backgroundColor
                color
              }
            }
            mobileNavBar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottomBar {
              background
              color
            }
            footerLinks {
              color
            }
          }
          modalStyles {
            header {
              background
              color
            }
            body {
              background
            }
            closeButton {
              root {
                color
                backgroundColor
              }
            }
          }
        }
      }
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
  GET_PRODUCT_BY_ID: gql`
    query GetProduct($productId: ID!, $storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        blogLink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontFamily
            color
          }
          header {
            topBar {
              background
            }

            headerMenu {
              color
            }
            styledMenu {
              paper {
                backgroundColor
                color
              }
            }
            mobileNavBar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottomBar {
              background
              color
            }
            footerLinks {
              color
            }
          }
          modalStyles {
            header {
              background
              color
            }
            body {
              background
            }
            closeButton {
              root {
                color
                backgroundColor
              }
            }
          }
        }
      }

      product(id: $productId) {
        storeId
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
        gallery {
          img
          text
        }
      }
    }
  `,
};

export default queries;
