import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import ProductEditForm from "./forms/ProductEditForm";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

import { CellParams, GridApi } from "@material-ui/data-grid";
import ReplenishmentOrder from "./forms/ReplenishmentOrder";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Inventory(props) {
  const [orderPageOpen, setOrderPageOpen] = useState(false);
  const { loading, error, data } = useQuery(
    queries.GET_INVENTORY_DATA_BY_DEPT,
    {
      variables: {
        departmentID: props.pageId,
      },
    }
  );
  const useStyles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: props.styles.topBar.background,
    },
  }));
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  let addButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.add.root.hover.backgroundColor,
      },
      color: props.buttons.add.root.color,
      backgroundColor: props.buttons.add.root.backgroundColor,
    },
  };
  let editButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.change.root.hover.backgroundColor,
      },
      color: props.buttons.change.root.color,
      backgroundColor: props.buttons.change.root.backgroundColor,
    },
  };
  let deleteButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.delete.root.hover.backgroundColor,
      },
      color: props.buttons.delete.root.color,
      backgroundColor: props.buttons.delete.root.backgroundColor,
    },
  };

  const AddButton = withStyles((theme) => addButton)(Button);
  const EditButton = withStyles((theme) => editButton)(Button);
  const DeleteButton = withStyles((theme) => deleteButton)(Button);

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
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <EditButton
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
          </EditButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return <DeleteButton>Delete</DeleteButton>;
      },
    },
    /*{
      field: "",
      headerName: "",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        const onClick = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return <Button onClick={onClick}>Click</Button>;
      },
    },*/
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
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <EditButton
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
          </EditButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return <DeleteButton>Delete</DeleteButton>;
      },
    },
  ];
  function closeOrderPage() {
    setOrderPageOpen(false);
  }

  function openOrderPage() {
    setOrderPageOpen(true);
  }
  return (
    <Container component="main" maxWidth="lg">
      <>
        <h3>Inventory Management</h3>
        <Paper square>
          <Tabs
            TabIndicatorProps={{ className: classes.indicator }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Product Maintenance" {...a11yProps(0)} />
            <Tab label="Product Replenishment" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          {props.action === undefined ? (
            <>
              <AddButton
                component={NavLink}
                to={
                  props.pageId === "0"
                    ? "/admin/inventory/add"
                    : `/store/${props.pageId}/admin/inventory/add`
                }
              >
                New Product
              </AddButton>

              <DataTable columns={columns} rows={data.productos} />
            </>
          ) : (
            <ProductEditForm appButtons={props.buttons} styles={props.styles} />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <AddButton onClick={openOrderPage}>New Order</AddButton>
            <DataTable
              columns={replenishmentsColumns}
              rows={data.replenishments}
            />{" "}
          </>
          <ReplenishmentOrder
            open={orderPageOpen}
            styles={props.modalStyles}
            onClose={closeOrderPage}
          />
        </TabPanel>
      </>
    </Container>
  );
}
export default Inventory;
