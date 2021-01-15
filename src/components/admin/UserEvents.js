import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

function UserEvents(props) {
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA_EVENTS);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "userType", headerName: "User Type", width: 100 },
    { field: "departmentID", headerName: "Dept", width: 100 },
    { field: "fullName", headerName: "Name", width: 150 },
    { field: "cellPhoneNumber", headerName: "Phone #", width: 100 },
    { field: "userStatus", headerName: "Status", width: 80 },
    { field: "eventCategory", headerName: "Category", width: 100 },
    { field: "eventType", headerName: "Type", width: 100 },
    { field: "activity", headerName: "Activity", width: 150 },
    { field: "eventStart", headerName: "Start", width: 120 },
    { field: "eventEnd", headerName: "End", width: 120 },
    { field: "eventOutcome", headerName: "Outcome", width: 100 },
    { field: "deviceName", headerName: "Device", width: 100 },
    /* { field: "deviceIPaddress", headerName: "IP Address", width: 150 },*/
    { field: "eventSeverity", headerName: "Severity", width: 150 },
    { field: "eventStatus", headerName: "Event Status", width: 150 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <h3>Users - Activity Tracker</h3>
        <DataTable columns={columns} rows={data.events} />
      </>
    </Container>
  );
}

export default UserEvents;
