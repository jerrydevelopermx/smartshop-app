import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import appFunctions from "../../../js/functions";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";
import FormFieldsGroup from "./FormFieldsGroup";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";

function UserEditForm(props) {
  console.log(props);
  let { id, section, action, resourceId } = useParams();
  //let user = JSON.parse(localStorage.getItem("user"));
  let textFieldCSS = computedStyles.textField(props);
  let checkboxCSS = computedStyles.checkbox(props);
  let radioCSS = computedStyles.radio(props);
  let submitButtonCSS = computedStyles.submitButton(props);

  let userData = {
    lastName: "",
    firstName: "",
    isStore: false,
    isSupplier: false,

    isShipper: false,
    isPymntChannel: false,
  };

  const [user, setUser] = useState({
    username: null,
    password: null,
    userAlias: null,
    avatarPhotoLink: null,
    userType: null,
    legalPerson: false,
    userLastName: null,
    userFirstName: null,
    address1Text: null,
    address2Text: null,
    cityName: null,
    stateCode: null,
    postalCode: null,
    countryCode: null,
    landlineNumber: null,
    faxNumber: null,
    cellPhoneNumber: null,
    alternateEmail: null,
    website: null,
    userIDType: null,
    userIDNumber: null,
    userDOBDate: null,
    userTaxCode: null,
    userTaxCUITL: null,
    isStore: null,
    isStoreContact: null,
    isSupplier: null,
    isSupplierContact: null,
    isShipper: null,
    isShipperContact: null,
    isPymntChannel: null,
    isPymntChContact: null,
    isMember: null,
    isCustomer: null,
    isSubscriber: null,
    isBlogger: null,
    userFacebookLink: null,
    userTwitterLink: null,
    userInstagramLink: null,
    userPinterestLink: null,
    subscriptionEmail: null,
    createdDatime: null,
    modifByID: null,
    modifDatime: null,
    userStatus: null,
  });

  useEffect(() => {
    setUser(props.data && props.data.user);
  }, [props.data]);

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleSave() {
    console.log(user);
  }

  let fields = [
    {
      id: "userFirstName",
      name: "userFirstName",
      value: (user && user.userFirstName) || "",
      label: "First Name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userLastName",
      name: "userLastName",
      value: (user && user.userLastName) || "",
      label: "Last name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "cellPhoneNumber",
      name: "cellPhoneNumber",
      value: (user && user.cellPhoneNumber) || "",
      label: "Cellphone number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "landlineNumber",
      name: "landlineNumber",
      value: (user && user.landlineNumber) || "",
      label: "Landline number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "faxNumber",
      name: "faxNumber",
      value: (user && user.faxNumber) || "",
      label: "Fax number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      isTextarea: true,
      id: "address1Text",
      name: "address1Text",
      value: (user && user.address1Text) || "",
      label: "Address 1",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      isTextarea: true,
      id: "address2Text",
      name: "address2Text",
      value: (user && user.address2Text) || "",
      label: "Address 2",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "cityName",
      name: "cityName",
      value: (user && user.cityName) || "",
      label: "City name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "postalCode",
      name: "postalCode",
      value: (user && user.postalCode) || "",
      label: "Postal code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "stateCode",
      name: "stateCode",
      value: (user && user.stateCode) || "",
      label: "State code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "countryCode",
      name: "countryCode",
      value: (user && user.countryCode) || "",
      label: "Country code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "username",
      name: "username",
      value: (user && user.username) || "",
      label: "Username",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "password",
      name: "password",
      value: (user && user.password) || "",
      label: "Password",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },

    {
      id: "avatarPhotoLink",
      name: "avatarPhotoLink",
      value: (user && user.avatarPhotoLink) || "",
      label: "Avatar",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "userAlias",
      name: "userAlias",
      value: (user && user.userAlias) || "",
      label: "Alias",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      type: "checkbox",
      id: "legalPerson",
      name: "legalPerson",
      value: (user && user.legalPerson) || "",
      label: "Is Legal Person",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "alternateEmail",
      name: "alternateEmail",
      value: (user && user.alternateEmail) || "",
      label: "Alternate email",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "website",
      name: "website",
      value: (user && user.website) || "",
      label: "Website",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "dropdown",
      options: [
        { value: "1", label: "Driver's license" },
        { value: "2", label: "INE" },
      ],
      valueKey: "value",
      labelKey: "label",
      id: "userIDType",
      name: "userIDType",
      value: (user && user.userIDType) || "",
      label: "ID type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "userIDNumber",
      name: "userIDNumber",
      value: (user && user.userIDNumber) || "",
      label: "ID Number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "userDOBDate",
      name: "userDOBDate",
      value: (user && user.userDOBDate) || "",
      label: "DOB Date",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "userTaxCode",
      name: "userTaxCode",
      value: (user && user.userTaxCode) || "",
      label: "Tax Code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userTaxCUITL",
      name: "userTaxCUITL",
      value: (user && user.userTaxCUITL) || "",
      label: "Tax CUITL",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userFacebookLink",
      name: "userFacebookLink",
      value: (user && user.userFacebookLink) || "",
      label: "Facebook Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userTwitterLink",
      name: "userTwitterLink",
      value: (user && user.userTwitterLink) || "",
      label: "Twitter Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userInstagramLink",
      name: "userInstagramLink",
      value: (user && user.userInstagramLink) || "",
      label: "Instagram Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userPinterestLink",
      name: "userPinterestLink",
      value: (user && user.userPinterestLink) || "",
      label: "Pinterest Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "subtitle",
      label: "User Type",
      grid: { xs: 6, sm: 3, md: 12 },
    },
    {
      type: "radiogroup",
      options: [
        { value: "corporate", label: "Corporate" },
        { value: "nonPrivileged", label: "Non Privileged" },
        { value: "privileged", label: "Privileged" },
      ],
      defaultValue: "corporate",
      id: "userType",
      name: "userType",
      value: (user && user.userType) || "",
      label: "User Type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    /*
   
    {
      type: "dropdown",
      options: [
        { value: "1", label: "Super Admin" },
        { value: "2", label: "Site " },
        { value: "3", label: "Not available" },
        { value: "4", label: "Out of Stock" },
        { value: "5", label: "Backordered" },
        { value: "6", label: "Suspended" },
        { value: "7", label: "Outdated" },
        { value: "8", label: "Decommisioned" },
        { value: "9", label: "Invalid" },
      ],
      valueKey: "value",
      labelKey: "label",
      id: "userType",
      name: "userType",
      value: (user && user.userType) || "",
      label: "User type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },*/
  ];

  let isSupplierView = false;

  const [userType, setUserType] = useState(null);
  const [userRole, setUserRole] = useState("");

  const [updateTodo] = useMutation(mutations.ADD_USER);

  const handleTypeChange = (event) => {
    console.log("mms" + event.target.value);
    setUserType(event.target.value);
  };

  const handleRoleChange = (event) => {};

  const getUserType = (user) => {
    if (parseInt(user.userType) > 0 && parseInt(user.userType) < 8) {
      return "privileged";
    }
    if (user.member || user.customer || user.subscriber) {
      return "nonPrivileged";
    }
    if (user.store || user.supplier || user.shipper || user.pymntChannel) {
      return "corporate";
    }
  };

  let styledRadio = {
    root: {
      color: props.styles.mobileNavBar.paper.background,
      "&$checked": {
        color: props.styles.mobileNavBar.paper.background,
      },
    },
    checked: {},
  };

  const CssRadio = withStyles(() => styledRadio)(Radio);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(userData.lastName.value);
            console.log(userType);
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <h3>{action.charAt(0).toUpperCase() + action.slice(1)} User</h3>
          <FormFieldsGroup
            fields={fields}
            css={textFieldCSS.root}
            cssCheckbox={checkboxCSS.root}
            cssRadio={radioCSS.root}
          />
          <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
            <Button className={submitButtonCSS.root} onClick={handleSave}>
              Submit
            </Button>
          </Grid>
          {/*


              corporate => Department (isStore), Supplier (isSupplier), Shipper (isShipper), Payment Channel (isPymntChannel)
              privileged => Super User, Site Manager, Site Staff, Deparment Manager, Deparment Admin, Deparment Staff (userType 1-7)
              Non Privileged => Customer (isCustomer), Member (isMember), Subscriber (isSubscriber), Blogger (isBlogger) 

          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                defaultValue={data && data.user ? data.user.userLastName : ""}
                inputRef={(node) => {
                  userData.lastName = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                defaultValue={data && data.user ? data.user.userFirstName : ""}
                inputRef={(node) => {
                  userData.firstName = node;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="MI"
                label="M.I."
                id="MI"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dateBirth"
                label="Date of Birth"
                id="dateBirth"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Address1"
                label="Address 1"
                id="Address1"
                defaultValue={data && data.user ? data.user.address1Text : ""}
                inputRef={(node) => {
                  userData.address1Text = node;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Address1"
                label="Address 1"
                id="Address1"
                defaultValue={data && data.user ? data.user.address2Text : ""}
                inputRef={(node) => {
                  userData.address2Text = node;
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="City"
                id="city"
                defaultValue={data && data.user ? data.user.cityName : ""}
                inputRef={(node) => {
                  userData.cityName = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="State"
                id="state"
                defaultValue={data && data.user ? data.user.stateCode : ""}
                inputRef={(node) => {
                  userData.stateCode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Zip Code"
                id="zipCode"
                defaultValue={data && data.user ? data.user.postalCode : ""}
                inputRef={(node) => {
                  userData.postalCode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="country"
                label="Country"
                id="country"
                defaultValue={data && data.user ? data.user.countryCode : ""}
                inputRef={(node) => {
                  userData.countryCode = node;
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="idType"
                label="ID Type"
                id="idType"
                defaultValue={data && data.user ? data.user.userIDType : ""}
                inputRef={(node) => {
                  userData.userIDType = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="idNumber"
                label="ID Number"
                id="idNumber"
                defaultValue={data && data.user ? data.user.userIDNumber : ""}
                inputRef={(node) => {
                  userData.userIDNumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="taxCode"
                label="Tax Code"
                id="taxCode"
                defaultValue={data && data.user ? data.user.userTaxCode : ""}
                inputRef={(node) => {
                  userData.userTaxCode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="taxIDNumber"
                label="Tax ID Number"
                id="taxIDNumber"
                defaultValue={data && data.user ? data.user.userTaxCUITL : ""}
                inputRef={(node) => {
                  userData.userTaxCUITL = node;
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="landline"
                label="Landline"
                id="landline"
                defaultValue={data && data.user ? data.user.landlineNumber : ""}
                inputRef={(node) => {
                  userData.landlineNumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="cellPhone"
                label="Cell Phone"
                id="cellPhone"
                defaultValue={
                  data && data.user ? data.user.cellPhoneNumber : ""
                }
                inputRef={(node) => {
                  userData.cellPhoneNumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="faxNumber"
                label="Fax Number"
                id="faxNumber"
                defaultValue={data && data.user ? data.user.faxNumber : ""}
                inputRef={(node) => {
                  userData.faxNumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dateBirth"
                label="Date of Birth"
                id="city"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="profession"
                label="Profession/Activity"
                id="profession"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userFacebookLink"
                label="facebook"
                id="userFacebookLink"
                defaultValue={
                  data && data.user ? data.user.userFacebookLink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userInstagramLink"
                label="Instagram"
                id="userInstagramLink"
                defaultValue={
                  data && data.user ? data.user.userInstagramLink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userTwitterLink"
                label="Twitter"
                id="userTwitterLink"
                defaultValue={
                  data && data.user ? data.user.userTwitterLink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userPinterestLink"
                label="Pinterest"
                id="userPinterestLink"
                defaultValue={
                  data && data.user ? data.user.userPinterestLink : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="pageUrl"
                label="Page URL"
                id="pageUrl"
                defaultValue={data && data.user ? data.user.website : ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Email address"
                id="email"
                defaultValue={data && data.user ? data.user.username : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                id="password"
                defaultValue={data && data.user ? data.user.password : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="retypePassword"
                label="Retype Password"
                id="retypePassword"
                defaultValue={data && data.user ? data.user.password : ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  User type {data && data.user ? data.user.userType : null}
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="usertType"
                  row
                  value={
                    userType != null
                      ? userType
                      : data && data.user
                      ? getUserType(data.user)
                      : "corporate"
                  }
                  onChange={handleTypeChange}
                >
                  <FormControlLabel
                    control={<CssRadio />}
                    label="Corporate"
                    value="corporate"
                  />
                  <FormControlLabel
                    control={<CssRadio />}
                    label="Non Privileged"
                    value="nonPrivileged"
                  />
                  {user.userType < 7 ? (
                    <FormControlLabel
                      control={<CssRadio />}
                      label="Privileged"
                      value="privileged"
                    />
                  ) : null}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          {
            {
              
              corporate: (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isStore"
                            color="primary"
                            checked={data && data.user && data.user.store}
                          />
                        }
                        label="Department"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isSupplier"
                            color="primary"
                            checked={data && data.user && data.user.supplier}
                          />
                        }
                        label="Supplier"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isShipper"
                            color="primary"
                            checked={data && data.user && data.user.shipper}
                          />
                        }
                        label="Shipper"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isPymntChannel"
                            color="primary"
                            checked={
                              data && data.user && data.user.pymntChannel
                            }
                          />
                        }
                        label="Payment Channel"
                      />
                    </Grid>
                  </Grid>
                  <div>Department</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="landline"
                        label="Name"
                        id="landline"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="cellPhone"
                        label="Category"
                        id="cellPhone"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="nationality"
                        label="Renter Since"
                        id="nationality"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Contract #"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Grid default position"
                        id="profession"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Grid priority position"
                        id="profession"
                      />
                    </Grid>
                  </Grid>
                  <div>Supplier</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="landline"
                        label="Company name"
                        id="landline"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="cellPhone"
                        label="Payment Method"
                        id="cellPhone"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="nationality"
                        label="Discount %"
                        id="nationality"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Surcharge %¡"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Category"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Additional notes"
                        id="profession"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Supplier Main Brand Name"
                        id="profession"
                      />
                    </Grid>
                  </Grid>
                  <div>Shipper</div>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="shipperName"
                        label="Shipper Company Name"
                        id="shipperName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="hrsFrom"
                        label="Hours from"
                        id="hrsFrom"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="hrsTp"
                        label="Hours to"
                        id="hrsTo"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="deliveryRate"
                        label="Delivery Rate per mile/Km"
                        id="deliveryRate"
                      />
                    </Grid>
                  </Grid>
                  <div>Payment Channel</div>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={4}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="pymntChannelName"
                        label="Payment Channel Name"
                        id="pymntChannelName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="contactTitle"
                        label="Contact title"
                        id="contactTitle"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="feeType"
                        label="Fee type"
                        id="feeType"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="feeAmount"
                        label="Fee amount"
                        id="feeAmount"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="syncCycle"
                        label="Sync Cycle"
                        id="syncCycle"
                      />
                    </Grid>
                  </Grid>
                </>
              ),
              
              privileged: (
                <>
                  <h3>Role</h3>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="userRole"
                      name="userRole"
                      row
                      value={userRole}
                      onChange={handleRoleChange}
                    >
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "1"
                                : false
                            }
                          />
                        }
                        label="Super User"
                        value="superUser"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "2"
                                : false
                            }
                          />
                        }
                        label="Site Manager"
                        value="siteManager"
                      />
                      <FormControlLabel
                        control={<CssRadio />}
                        label="Site Admin"
                        value="siteAdmin"
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "3"
                                : false
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "4"
                                : false
                            }
                          />
                        }
                        label="Site Staff"
                        value="siteStaff"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "5"
                                : false
                            }
                          />
                        }
                        label="Deparment Manager"
                        value="departmentManager"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "6"
                                : false
                            }
                          />
                        }
                        label="Deparment Admin"
                        value="departmentAdmin"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "7"
                                : false
                            }
                          />
                        }
                        label="Deparment Staff"
                        value="departmentStaff"
                      />
                    </RadioGroup>
                  </FormControl>
                </>
              ),
              
              nonPrivileged: (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remeinmber" color="primary" />
                        }
                        label="Member"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remember" color="primary" />
                        }
                        label="Customer"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remeinmber" color="primary" />
                        }
                        label="Subscriber"
                      />
                    </Grid>
                    <div>Member</div>
                    <Grid container spacing={1}>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="facebook"
                          label="Store #"
                          id="Facebook"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="memberType"
                          label="Member Type"
                          id="memberType"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="membershipType"
                          label="Membership Type"
                          id="membershipType"
                        />
                      </Grid>
                    </Grid>
                    <div>Customer</div>
                    <Grid container spacing={1}>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="facebook"
                          label="Store #"
                          id="Facebook"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="instagram"
                          label="Type"
                          id="instagram"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="twitter"
                          label="Account number"
                          id="twitter"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="linkedIn"
                          label="Customership type"
                          id="linkedIn"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="pageUrl"
                          label="Subscriber?"
                          id="pageUrl"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="pageUrl"
                          label="Status"
                          id="pageUrl"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <div>Subscriber</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="facebook"
                        label="Site subscriber?"
                        id="Facebook"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="instagram"
                        label="Store #"
                        id="instagram"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="twitter"
                        label="Subscription type"
                        id="twitter"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="linkedIn"
                        label="Subscriber since"
                        id="linkedIn"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="pageUrl"
                        label="Status"
                        id="pageUrl"
                      />
                    </Grid>
                  </Grid>
                </>
              ),
            }[
              userType != null
                ? userType
                : data && data.user
                ? getUserType(data.user)
                : "corporate"
            ]
          }
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
        </Grid>*/}
        </form>
      </Container>
    </>
  );
}

export default UserEditForm;
