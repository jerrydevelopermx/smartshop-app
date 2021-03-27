import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Grid, Container, Button } from "@material-ui/core";
import mutations from "../../../graphql/mutations";
import computedStyles from "../../../styles/computedStyles";
import FormFieldsGroup from "./FormFieldsGroup";
import styles from "../../../styles/app";

function CampaignEditForm(props) {
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);

  const [campaign, setCampaign] = useState({
    campaignNumber: "",
    campaignOccurrence: "",
    campaignStatus: "",
    campaignType: "",
    departmentID: "",
    productID: "",
    gridPositionIndex: "",
    promotedFromDatime: "",
    promotedToDatime: "",
  });

  useEffect(() => {
    setCampaign(props.data && props.data.campaign);
  }, [props.data]);

  let fields = [
    {
      id: "campaignNumber",
      name: "campaignNumber",
      value: (campaign && campaign.campaignNumber) || "",
      label: "Campaign number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaignType",
      name: "campaignType",
      value: (campaign && campaign.campaignType) || "",
      label: "Campaign Type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaignBelongs",
      name: "campaignBelongs",
      value: (campaign && campaign.departmentID) || "",
      label:
        campaign && campaign.campaignType === "1" ? "Department" : "Product",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaignOccurrence",
      name: "campaignOccurrence",
      value: (campaign && campaign.campaignOccurrence) || "",
      label: "Ocurrence",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "gridPositionIndex",
      name: "gridPositionIndex",
      value: (campaign && campaign.gridPositionIndex) || "",
      label: "Grid position",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "promotedFromDatime",
      name: "promotedFromDatime",
      value: (campaign && campaign.promotedFromDatime) || "",
      label: "From date",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "promotedToDatime",
      name: "promotedToDatime",
      value: (campaign && campaign.promotedToDatime) || "",
      label: "Grid position",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];
  function handleChange(event) {
    setCampaign({
      ...campaign,
      [event.target.name]: event.target.value,
    });
  }
  function handleSave() {
    console.log(campaign);
  }

  const [updateTodo] = useMutation(mutations.ADD_USER);

  return (
    <Container component="main" maxWidth="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //addTodo({ variables: { type: input.value } });
          //input.value = '';
        }}
      >
        <h3>
          {props.action.charAt(0).toUpperCase() + props.action.slice(1)}{" "}
          Campaign
        </h3>
        <FormFieldsGroup fields={fields} css={textFieldCSS.root} />
        <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
          <Button className={submitButtonCSS.root} onClick={handleSave}>
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default CampaignEditForm;
