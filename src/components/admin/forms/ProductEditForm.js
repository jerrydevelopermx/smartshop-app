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

function ProductEditForm(props) {
  console.log(props);
  const [user, setUser] = useState({ lastName: "" });

  const handleOnChange = (event) => {
    console.log(event.target.name);
    //data.user[event.target.name] = event.target.value;
    console.log(data.user[event.target.name], event.target.value);
    //setUser({ ...user, [event.target.name]: event.target.value });
  };
  let { id, section, action, resourceId } = useParams();
  const { loading, error, data } = useQuery(
    queries.GET_DEPARTMENTS_DATA_BY_ID,
    {
      skip: action === "add",
      variables: {
        deptId: resourceId,
      },
    }
  );
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

  let changeButton = {
    root: {
      "&:hover": {
        backgroundColor: props.appButtons.change.root.hover.backgroundColor,
      },
      color: props.appButtons.change.root.color,
      backgroundColor: props.appButtons.change.root.backgroundColor,
    },
  };

  const ChangeButton = withStyles((theme) => changeButton)(Button);
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
      <Container component="main" maxWidth="lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <h3>{action.charAt(0).toUpperCase() + action.slice(1)} Product</h3>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="deptName"
                label="Product Number"
                name="deptName"
                autoFocus
                id="custom-css-outlined-input"
                onChange={handleOnChange}
                value={
                  data && data.department ? data.department.departmentName : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="category"
                label="SKU Prefix"
                id="FirstName"
                value={data && data.user ? data.user.userFirstName : ""}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Short Name"
                id="MI"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Specifications"
                id="MI"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Notes"
                id="MI"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="EAN"
                id="city"
                value={data && data.user ? data.user.cityName : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="Category"
                id="state"
                value={data && data.user ? data.user.stateCode : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Subcategory"
                id="zipCode"
                value={data && data.user ? data.user.postalCode : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="country"
                label="UOM Code"
                id="country"
                value={data && data.user ? data.user.countryCode : ""}
              />
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Ranking"
                id="email"
                value={data && data.user ? data.user.username : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Status"
                id="password"
                value={data && data.user ? data.user.password : ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="Location row"
                id="city"
                value={data && data.user ? data.user.cityName : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="Location Shelve"
                id="state"
                value={data && data.user ? data.user.stateCode : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Supplier 1"
                id="zipCode"
                value={data && data.user ? data.user.postalCode : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="country"
                label="Product #S1"
                id="country"
                value={data && data.user ? data.user.countryCode : ""}
              />
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Supplier 2"
                id="email"
                value={data && data.user ? data.user.username : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Product #S2"
                id="password"
                value={data && data.user ? data.user.password : ""}
              />
            </Grid>
          </Grid>
          <h4>Main Image</h4>
          <Grid container spacing={2}>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={2}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag1.jpg`}
                alt=""
                style={{ height: "90px", padding: "5px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="slide1"
                label="Slide 1"
                id="slide1"
                value="https://my-bucket.s3.us-west-2.amazonaws.com/slide1.png"
              />
            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={1}
            >
              <ChangeButton>Change</ChangeButton>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="slide1"
                label="Grid default position"
                id="slide1"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="slide1"
                label="Grid priority"
                id="slide1"
              />
            </Grid>
          </Grid>
          <h4>Gallery</h4>
          <Grid container spacing={1}>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={2}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag2.jpg`}
                alt=""
                style={{ height: "90px", padding: "5px" }}
              />
            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={2}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag3.jpg`}
                alt=""
                style={{ height: "90px", padding: "5px" }}
              />
            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="row"
              xs={12}
              sm={3}
              md={4}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag4.jpg`}
                alt=""
                style={{ width: "100px", padding: "5px" }}
              />
            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={2}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag5.jpg`}
                alt=""
                style={{ height: "90px", padding: "5px" }}
              />
            </Grid>
            <Grid
              container
              align="center"
              justify="center"
              direction="column"
              xs={12}
              sm={3}
              md={2}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imgs/bag6.jpg`}
                alt=""
                style={{ height: "90px", padding: "5px" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="deptName"
                label="Image 1"
                name="deptName"
                autoFocus
                id="custom-css-outlined-input"
                onChange={handleOnChange}
                value="https://my-bucket.s3.us-west-2.amazonaws.com/gallery1.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="category"
                label="Image 2"
                id="FirstName"
                value="https://my-bucket.s3.us-west-2.amazonaws.com/gallery2.png"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Image 3"
                id="MI"
                value="https://my-bucket.s3.us-west-2.amazonaws.com/gallery1.png"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Image 4"
                id="MI"
                value="https://my-bucket.s3.us-west-2.amazonaws.com/gallery3.png"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="ShortName"
                label="Image 5"
                id="MI"
                value="https://my-bucket.s3.us-west-2.amazonaws.com/gallery4.png"
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

export default ProductEditForm;
