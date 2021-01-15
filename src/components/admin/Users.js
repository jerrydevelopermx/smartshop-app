import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DataTable from "../common/DataTable";
import UserEditForm from "./forms/UserEditForm";
import queries from "../../graphql/queries";

import { CellParams, GridApi } from "@material-ui/data-grid";

function Users(props) {
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA);
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

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 180 },
    { field: "userFirstName", headerName: "Name", width: 170 },
    {
      field: "userType",
      headerName: "User type",
      width: 100,
    },
    {
      field: "departmentID",
      headerName: "Dept",
      width: 80,
    },
    { field: "userStatus", headerName: "Status", width: 100 },
    { field: "createdDatime", headerName: "Created", width: 120 },
    { field: "modifDatime", headerName: "Modified", width: 120 },
    { field: "modifByID", headerName: "Modified by", width: 100 },

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
                ? `/admin/users/edit/${params.getValue("id")}`
                : `/store/${props.pageId}/admin/users/edit/${params.getValue(
                    "id"
                  )}`
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

  return (
    <Container component="main" maxWidth="lg">
      {props.action === undefined ? (
        <>
          <h3>Users - Creation and Maintenance</h3>
          <AddButton
            component={NavLink}
            to={
              props.pageId === "0"
                ? "/admin/users/add"
                : `/store/${props.pageId}/admin/users/add`
            }
          >
            Add user
          </AddButton>

          <DataTable columns={columns} rows={data.users} />
        </>
      ) : (
        <UserEditForm styles={props.styles} />
      )}
    </Container>
  );
}
export default Users;
