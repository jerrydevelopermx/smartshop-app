import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import appFunctions from "../../../js/functions";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";

function UserEditForm(props) {
  let { id, section, action, resourceId } = useParams();
  let user = JSON.parse(localStorage.getItem("user"));

  let userData = {
    lastName: "",
    firstName: "",
    isStore: false,
    isSupplier: false,
    isShipper: false,
    isPymntChannel: false,
  };

  let isSupplierView = false;

  const [userType, setUserType] = useState(null);
  const [userRole, setUserRole] = useState("");

  const { loading, error, data } = useQuery(queries.GET_USER_DATA_BY_ID, {
    skip: action === "add",
    variables: {
      userId: resourceId,
    },
  });
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

  let submitButton = {
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
  let styledTextfield = {
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
  };
  let styledCheckbox = {
    root: {
      color: props.styles.mobileNavBar.paper.background,
      "&$checked": {
        color: props.styles.mobileNavBar.paper.background,
      },
    },
    checked: {},
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
  const SubmitButton = withStyles(() => submitButton)(Button);
  const CssTextField = withStyles(() => styledTextfield)(TextField);
  const CssCheckbox = withStyles(() => styledCheckbox)(Checkbox);
  const CssRadio = withStyles(() => styledRadio)(Radio);

  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

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
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default UserEditForm;
