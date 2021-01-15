import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import appFunctions from "../../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import queries from "../../../graphql/queries";

function CampaignEditForm(props) {
  const [user, setUser] = useState({ lastName: "" });

  const handleOnChange = (event) => {
    console.log(event.target.name);
    //data.user[event.target.name] = event.target.value;
    console.log(data.user[event.target.name], event.target.value);
    //setUser({ ...user, [event.target.name]: event.target.value });
  };
  let { id, section, action, resourceId } = useParams();
  const { loading, error, data } = useQuery(queries.GET_CAMPAIGN_DATA_BY_ID, {
    skip: action === "add",
    variables: {
      campaignId: resourceId,
    },
  });
  const [updateTodo] = useMutation(queries.ADD_USER);

  let styledButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.mobileNavBar.paper.background
        ),
      },
      color: props.styles.mobileNavBar.paper.color,
      backgroundColor: props.styles.topBar.background,
    },
  };

  const SubmitButton = withStyles((theme) => styledButton)(Button);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.styles.mobileNavBar.paper.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.styles.mobileNavBar.paper.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: props.styles.mobileNavBar.paper.background,
        },
      },
    },
  })(TextField);

  const CssCheckbox = withStyles({
    root: {
      color: props.styles.mobileNavBar.paper.background,
      "&$checked": {
        color: props.styles.mobileNavBar.paper.background,
      },
    },
    checked: {},
  })(Checkbox);

  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return (
    <>
      <Container component="main" maxWidth="md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <h3>{action.charAt(0).toUpperCase() + action.slice(1)} Campaign</h3>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="deptName"
                label="Campaign number"
                name="deptName"
                autoFocus
                id="custom-css-outlined-input"
                onChange={handleOnChange}
                value={
                  data && data.campaign ? data.campaign.campaignNumber : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="category"
                label="Campaign Type"
                id="FirstName"
                value={data && data.campaign ? data.campaign.campaignType : ""}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Ocurrence"
                label={
                  data && data.campaign
                    ? data.campaign.campaignType === "1"
                      ? "Department"
                      : "Product"
                    : "Product/Department"
                }
                id="MI"
                value={
                  data && data.campaign
                    ? data.campaign.campaignType === "1"
                      ? data.campaign.departmentID
                      : data.campaign.productID
                    : ""
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="Ocurrence"
                id="city"
                value={
                  data && data.campaign ? data.campaign.campaignOccurrence : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="Grid Position"
                id="city"
                value={
                  data && data.campaign ? data.campaign.gridPositionIndex : ""
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="From date"
                id="state"
                value={
                  data && data.campaign ? data.campaign.promotedFromDatime : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="To date"
                id="zipCode"
                value={
                  data && data.campaign ? data.campaign.promotedToDatime : ""
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              style={{ padding: "30px", textAlign: "center" }}
            >
              <SubmitButton type="submit">Submit </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default CampaignEditForm;
