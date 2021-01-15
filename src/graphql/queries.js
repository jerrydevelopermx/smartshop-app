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
  GET_FULL_PAGE: gql`
    query GetFullPage($storeId: ID!) {
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
  GET_USERS_DATA: gql`
    query GetUsers {
      users {
        id
        username
        departmentID
        userFirstName
        userLastName
        userType
        userStatus
        createdDatime
        modifByID
        modifDatime
      }
    }
  `,
  GET_USER_DATA_BY_ID: gql`
    query GetUser($userId: ID!) {
      user(id: $userId) {
        id
        username
        password
        userFirstName
        userLastName
        userType
        userStatus
        createdDatime
        modifByID
        modifDatime
        userType
        isLegalPerson

        address1Text
        address2Text
        cityName
        stateCode
        postalCode
        countryCode
        landlineNumber
        faxNumber
        cellPhoneNumber

        supplier
        shipper
        pymntChannel
        customer
        subscriber
        member
      }
    }
  `,
  GET_USERS_DATA_QUERIES: gql`
    query GetUsers {
      users {
        id
        username
        departmentID
        userFirstName
        userLastName
        userType
        userStatus
        store
        storeContact
        supplier
        supplierContact
        shipper
        shipperContact
        pymntChannel
        pymntChContact
        member
        customer
        subscriber
        blogger
      }
    }
  `,
  GET_USERS_DATA_EVENTS: gql`
    query GetEvents {
      events {
        id
        username
        userType
        departmentID
        fullName
        cellPhoneNumber
        userStatus
        eventDatime
        eventCategory
        eventType
        activity
        originatorID
        eventStart
        eventEnd
        eventOutcome
        deviceName
        deviceIPaddress
        eventSeverity
        eventStatus
        eventRetention
      }
    }
  `,
  GET_USERS_DATA_INCIDENTS: gql`
    query GetIncidents {
      cuMessages {
        id
        messageNumber
        emailAddress
        departmentID
        userID
        customerID
        subscriberID
        messageType
        lastAndFirstName
        companyName
        messageSubject
        messageBody
        createdDatime
        communicatedTo
        communicatedDatime
        level1EscalatedTo
        level1EscalationDatime
        level2EscalatedTo
        level2EscalationDatime
        modifiedByID
        modifiedDatime
        resolvedByID
        resolvedDatime
        approvedByID
        approvedDatime
        resolutionText
        messageStatus
      }
    }
  `,
  GET_DEPARTMENTS_DATA: gql`
    query GetDepartments {
      departments {
        id
        departmentID
        departmentNumber
        departmentName
        deptStatus
        createdDatime
        modifiedDatime
        createdByID
      }
    }
  `,
  GET_CAMPAIGNS_DATA: gql`
    query GetCampaigns {
      campaigns {
        id
        campaignNumber
        departmentID
        productID
        campaignType
        campaignOccurrence
        gridPositionIndex
        promotedFromDatime
        promotedToDatime
        campaignStatus
      }
    }
  `,
  GET_CAMPAIGNS_DATA_BY_DEPT: gql`
    query GetCampaigns($departmentID: ID!) {
      campaigns(departmentID: $departmentID) {
        id
        campaignNumber
        departmentID
        productID
        campaignType
        campaignOccurrence
        gridPositionIndex
        promotedFromDatime
        promotedToDatime
        campaignStatus
      }
    }
  `,
  GET_INVENTORY_DATA_BY_DEPT: gql`
    query GetInventory($departmentID: ID!) {
      productos(departmentID: $departmentID) {
        id
        productNumber
        productSKU
        productShortName
        productDescription
        prodCategoryCode
        prodSubcategoryCode
        brandCode
        modelCode
        yearCode
        styleCode
        genderCode
        packagingCode
        materialCode
        colorCode
        sizeCode
        flavorCode
      }

      replenishments(departmentID: $departmentID) {
        id
        replenishmentOrderNr
        departmentID
        supplierID
        repGenDatime
        repPlacedDatime
        repOrderStatus
        replenishmentOrderNr
        repLineItemNr
        productID
        supplierProductID
        quantityOrdered
        quantityReceived
        estimatedUnitCost
        actualUnitCost
        dateFulfilled
        repLIStatus
      }
    }
  `,
  GET_PRODUCTS_DATA: gql`
    query GetProducts {
      productos {
        id
        productNumber
        productSKU
        productShortName
        productDescription
        prodCategoryCode
        prodSubcategoryCode
        brandCode
        modelCode
        yearCode
        styleCode
        genderCode
        packagingCode
        materialCode
        colorCode
        sizeCode
        flavorCode
      }
    }
  `,
  GET_INVENTORY_DATA: gql`
    query GetInventory {
      productos {
        id
        productNumber
        productSKU
        productShortName
        productDescription
        prodCategoryCode
        prodSubcategoryCode
        brandCode
        modelCode
        yearCode
        styleCode
        genderCode
        packagingCode
        materialCode
        colorCode
        sizeCode
        flavorCode
      }

      replenishments {
        id
        replenishmentOrderNr
        departmentID
        supplierID
        repGenDatime
        repPlacedDatime
        repOrderStatus
        replenishmentOrderNr
        repLineItemNr
        productID
        supplierProductID
        quantityOrdered
        quantityReceived
        estimatedUnitCost
        actualUnitCost
        dateFulfilled
        repLIStatus
      }
    }
  `,

  GET_DEPARTMENTS_DATA_BY_ID: gql`
    query GetDepartment($deptId: ID!) {
      department(id: $deptId) {
        id
        departmentID
        departmentNumber
        departmentName
        userID
        contactID
        deptCategoryNumber
        deptStatus
        placeHolderSinceDate
        placeHolderThruDate
        placeHolderType
        placeHolderCode
        contractLink
        deptDefaultImageLink
        deptLogoLink
        campaignID
        gridDefaultPositionIndex
        gridPromotedPositionIndex
        deptPriorityNumber
        modifiedDatime
        createdDatime
        createdByID
        campaigning
        modifiedByID
      }
    }
  `,
  GET_CAMPAIGN_DATA_BY_ID: gql`
    query GetCampaign($campaignId: ID!) {
      campaign(id: $campaignId) {
        id
        campaignNumber
        departmentID
        productID
        campaignType
        campaignOccurrence
        gridPositionIndex
        promotedFromDatime
        promotedToDatime
        campaignStatus
      }
    }
  `,
  GET_CMS_BY_ID: gql`
    query GetSiteCMS($siteId: ID!) {
      siteCMS(id: $siteId) {
        siteID
        siteTitleText
        siteMetaDescriptionText
        siteLogoLink
        ourServMissionJson
        ourServWhoWeRJson
        ourServBoardJson
        ourServFeaturesJson
        ourServMmbshipJson
        tourDefaultLink
        event1DefaultLink
        event2DefaultLink
        event3DefaultLink
        contactUsJson
        blogLink
        slide1DefaultLink
        slide2DefaultLink
        slide3DefaultLink
        slide4DefaultLink
        slide5DefaultLink
        footerHistoryJson
        sitePoliciesJson
        siteMembersPolicyJson
        siteCustomrsPolicyJson
        siteVisitorsPolicyJson
        siteMainColorRGB
        siteBodyColorRGB
        siteFontNameText
        siteMainFontColorText
        siteBodyFontColorText
        siteFacebookLink
        siteTwitterLink
        siteInstagramLink
        sitePinterestLink
        siteCopyrights
      }
    }
  `,
  GET_CONTENT_BY_ID: gql`
    query getContent($id: ID!, $storeId: ID!) {
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
      newContent(id: $id) {
        id
        sectionId
        content
        title
      }
    }
  `,
};

export default queries;
