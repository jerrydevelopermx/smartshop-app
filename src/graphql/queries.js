import { gql } from "@apollo/client";

const queries = {
  GET_PAGE_INFO: gql`
    query GetPageInfo($storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink
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
            fontfamily
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
        categoryid
        name
        coverimage
        hoverimage
        description
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
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
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
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
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
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
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
        categoryid
        color
        size
        style
        material
        name
        coverimage
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
  GET_PRODUCT_DATA_BY_ID: gql`
    query GetProduct($id: ID!, $departmentID: ID!) {
      producto(id: $id) {
        id
        productNumber
        departmentID
        productSKU
        productEAN
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
        attribMask
        attributeMapCode
        prodUOMCode
        prodUnitsInStockNumber
        inventoryCostMethod
        prodUnitCostAmount
        prodMSRPAmount
        prodUnitPriceAmount
        prodCurrencyType
        prodDiscountType
        prodDiscountCondition
        prodDiscountNumber
        prodPriceCorrectionFactor
        prodUnitsOnOrder
        prodReplenishType
        prodUISThresholdNumber
        pendReplenOrderNumber
        prodRankingType
        prodStatus
        prodLocation1Text
        prodLocation2Text
        prodSpecifications
        prodNotes
        prodDefaultContentLink
        prodDefaultHoverLink
        supplier1ID
        supplier1ProdID
        supplier2ID
        supplier2ProdID
        campaigning
        campaignID
        gridPromotedPositionIndex
        gridDefaulPositiontIndex
        prodPriorityNumber
      }

      prodCategories {
        prodCategoryCode
        prodCategoryName
        prodCategoryText
        prodCategoryStatus
      }

      campaigns(departmentID: $departmentID) {
        id
        campaignNumber
      }
    }
  `,

  GET_SUBCATEGORIES_BY_CATEGORY_ID: gql`
    query GetSubcategories($categoryCode: ID!) {
      prodSubcategories(categoryCode: $categoryCode) {
        prodSubcategoryCode
        prodSubcategoryName
        prodSubcategoryText
        prodSubcategoryStatus
      }
    }
  `,
  GET_DEPARTMENT_DATA_BY_ID: gql`
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
  GET_REPLENISHMENT_DATA_BY_ID: gql`
    query GetReplenishment($id: ID!) {
      replenishment(id: $id) {
        id
        replenishmentOrderNr
        departmentID
        supplierID
        repGenDatime
        repPlacedDatime
        repOrderStatus
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
  GET_HTML_CONTENT_BY_ID_SECTION: gql`
    query GetSiteHTML($id: ID!, $sectionId: String) {
      siteHtmlContent(id: $id, sectionId: $sectionId) {
        content
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
        bloglink
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
        siteCopyright
      }
    }
  `,

  //
  GET_CONTENT_BY_SECTION_AND_PAGE: gql`
    query getContent($sectionId: String, $storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
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

      siteHtmlContent(id: $storeId, sectionId: $sectionId) {
        content
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
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
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
