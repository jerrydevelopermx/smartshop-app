import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CellParams } from "@material-ui/data-grid";
import { Container, Paper, Tabs, Tab, Button } from "@material-ui/core";
import DataTable from "../common/DataTable";
import ReplenishmentOrder from "./forms/ReplenishmentOrder";
import EditForms from "../EditForms";
import TabPanel from "./TabPanel";
import GraphqlLoading from "../common/GraphqlLoading";
import GraphqlError from "../common/GraphqlError";
import queries from "../../graphql/queries";
import computedStyles from "../../styles/computedStyles";

function Inventory(props) {
  let changeButtonCSS = computedStyles.changeButton(props);
  let deleteButtonCSS = computedStyles.deleteButton(props);
  let addButtonCSS = computedStyles.addButton(props);
  let activeTabCSS = computedStyles.activeTab(props);

  const [orderPageModal, setOrderPageModal] = useState({
    open: false,
    action: "",
    id: 0,
  });
  const [activeTab, setActiveTab] = React.useState(0);

  const { loading, error, data } = useQuery(
    queries.GET_INVENTORY_DATA_BY_DEPT,
    {
      variables: {
        departmentID: props.pageId,
      },
    }
  );

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  if (loading) return <GraphqlLoading />;
  if (error) return <GraphqlError />;

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "productNumber", headerName: "Number", width: 100 },
    { field: "productSKU", headerName: "SKU", width: 120 },
    {
      field: "productShortName",
      headerName: "Short Name",
      width: 120,
    },
    { field: "productDescription", headerName: "Description", width: 160 },
    { field: "prodCategoryCode", headerName: "Category", width: 120 },
    { field: "prodSubcategoryCode", headerName: "Subcategory", width: 120 },

    /* { field: "brandCode", headerName: "Brd", width: 70 },
    { field: "modelCode", headerName: "Mod", width: 70 },
    { field: "yearCode", headerName: "Yr", width: 50 },
    { field: "styleCode", headerName: "Stl", width: 50 },
    { field: "genderCode", headerName: "Gnd", width: 50 },
    { field: "packagingCode", headerName: "Pck", width: 50 },
    { field: "materialCode", headerName: "Mat", width: 50 },
    { field: "colorCode", headerName: "Col", width: 50 },
    { field: "sizeCode", headerName: "Sze", width: 50 },
    { field: "flavorCode", headerName: "Flv", width: 50 },*/

    {
      field: "",
      headerName: "Actions",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <>
            <Button
              className={changeButtonCSS.root}
              style={{ margin: "10px" }}
              component={NavLink}
              to={
                props.pageId === "0"
                  ? `/admin/inventory/edit/${params.getValue("id")}`
                  : `/store/${
                      props.pageId
                    }/admin/inventory/edit/${params.getValue("id")}`
              }
            >
              Edit
            </Button>
            <Button className={deleteButtonCSS.root} style={{ margin: "10px" }}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const replenishmentsColumns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "repGenDatime", headerName: "Date", width: 120 },
    { field: "supplierID", headerName: "Supplier", width: 100 },
    { field: "replenishmentOrderNr", headerName: "Rep. Order Num", width: 120 },
    { field: "repLineItemNr", headerName: "Invoice", width: 100 },
    { field: "quantityOrdered", headerName: "Quantity", width: 100 },
    { field: "actualUnitCost", headerName: "Unit Cost", width: 100 },
    { field: "quantityReceived", headerName: "MSRP", width: 90 },
    { field: "productID", headerName: "SKU", width: 90 },
    {
      field: "",
      headerName: "Actions",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <>
            <Button
              className={changeButtonCSS.root}
              style={{ margin: "10px" }}
              onClick={() => openOrderPage("edit", params.getValue("id"))}
            >
              Edit
            </Button>
            <Button className={deleteButtonCSS.root} style={{ margin: "10px" }}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  function closeOrderPage() {
    setOrderPageModal({
      ...orderPageModal,
      open: false,
    });
  }

  function openOrderPage(action, id) {
    setOrderPageModal({
      ...orderPageModal,
      open: true,
      action: action,
      id: id,
    });
  }
  return (
    <Container component="main" maxWidth="lg">
      <>
        <h3>Inventory Management</h3>
        <Paper square>
          <Tabs
            TabIndicatorProps={{ className: activeTabCSS.indicator }}
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Inventory tabs"
          >
            <Tab label="Product Maintenance" {...a11yProps(0)} />
            <Tab label="Product Replenishment" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={activeTab} index={0}>
          {props.action === undefined ? (
            <>
              <Button
                className={addButtonCSS.root}
                component={NavLink}
                to={
                  props.pageId === "0"
                    ? "/admin/inventory/add"
                    : `/store/${props.pageId}/admin/inventory/add`
                }
              >
                New Product
              </Button>

              <DataTable columns={columns} rows={data.productos} />
            </>
          ) : (
            <EditForms
              type="PRODUCT"
              action="add"
              styles={props.styles}
              appButtons={props.appButtons}
            />
          )}
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <>
            <Button
              className={addButtonCSS.root}
              onClick={() => openOrderPage("add", undefined)}
            >
              New Order
            </Button>
            <DataTable
              columns={replenishmentsColumns}
              rows={data.replenishments}
            />{" "}
          </>
          <ReplenishmentOrder
            appButtons={props.buttons}
            open={orderPageModal.open}
            params={orderPageModal}
            styles={props.styles}
            onClose={closeOrderPage}
          />
        </TabPanel>
      </>
    </Container>
  );
}
export default Inventory;
