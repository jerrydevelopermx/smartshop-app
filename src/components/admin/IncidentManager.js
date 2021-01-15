import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

function IncidentManager(props) {
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA_INCIDENTS);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "emailAddress", headerName: "Email", width: 180 },
    {
      field: "lastAndFirstName",
      headerName: "Name",
      width: 150,
    },
    {
      field: "companyName",
      headerName: "Company",
      width: 150,
    },
    { field: "departmentID", headerName: "Dept", width: 80 },
    { field: "messageType", headerName: "Message type", width: 150 },
    { field: "messageSubject", headerName: "Message subject", width: 240 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <h3>Incident Manager</h3>
        <DataTable columns={columns} rows={data.cuMessages} />
      </>
    </Container>
  );
}

export default IncidentManager;
