import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import appFunctions from "../../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import queries from "../../../graphql/queries";

function ContentForm(props) {
  let { id, section, action, resourceId } = useParams();
  const { loading, error, data } = useQuery(queries.GET_USER_DATA_BY_ID, {
    skip: action === "add",
    variables: {
      userId: 44,
    },
  });
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

  const SubmitButton = withStyles((theme) => styledButton)(Button);
  const ChangeButton = withStyles((theme) => changeButton)(Button);

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
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Browser Label"
              name="name"
              autoFocus
              id="custom-css-outlined-input"
              value="Be Smart Online Shop"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Site Description"
              id="description"
              value="Online products shopping"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="blogLink"
              label="Blog Link"
              id="blogLink"
              value="/blog"
            />
          </Grid>
        </Grid>
        <h4>Slides</h4>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
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
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide1link"
              label="Slide 1 Link"
              id="slide1link"
              value="/store/2/"
            />
          </Grid>
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imgs/banner1.jpg`}
              alt=""
              style={{ height: "90px", padding: "5px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide2"
              label="Slide 2"
              id="slide2"
              value="https://my-bucket.s3.us-west-2.amazonaws.com/slide2.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide2link"
              label="Slide 2 Link"
              id="slide1link"
              value="store/1/product/4"
            />
          </Grid>
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imgs/banner2.jpg`}
              alt=""
              style={{ height: "90px", padding: "5px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide3"
              label="Slide 3"
              id="slide3"
              value="https://my-bucket.s3.us-west-2.amazonaws.com/slide3.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide3link"
              label="Slide 3 Link"
              id="slide3link"
            />
          </Grid>
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imgs/banner3.jpg`}
              alt=""
              style={{ height: "90px", padding: "5px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide4"
              label="Slide 4"
              id="slide4"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide4link"
              label="Slide 4 Link"
              id="slide4link"
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
            <ChangeButton>Add</ChangeButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide5"
              label="Slide 5"
              id="slide5"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="slide45ink"
              label="Slide 5 Link"
              id="slide5link"
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
            <ChangeButton>Add</ChangeButton>
          </Grid>
        </Grid>
        <h4>Events</h4>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event1"
              label="Event 1"
              id="event1"
              value="https://my-bucket.s3.us-west-2.amazonaws.com/event1.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event1link"
              label="Event 1 Link"
              id="event1link"
              value="/store/2/"
            />
          </Grid>
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imgs/offers1.jpg`}
              alt=""
              style={{ height: "90px", padding: "5px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event2"
              label="Event 2"
              id="event1"
              value="https://my-bucket.s3.us-west-2.amazonaws.com/event4.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event2link"
              label="Event 2 Link"
              id="event2link"
            />
          </Grid>
          <Grid
            container
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imgs/offers4.jpg`}
              alt=""
              style={{ height: "90px", padding: "5px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event3"
              label="Event 3"
              id="event3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="event3link"
              label="Event 3 Link"
              id="event3link"
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
            <ChangeButton>Add</ChangeButton>
          </Grid>
        </Grid>
        <h4>Social Networks</h4>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="faceboom"
              label="Facebook"
              name="facebook"
              id="custom-css-outlined-input"
              value="http://www.facebook.com/Smartshop"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="twitter"
              label="Twitter"
              id="twitter"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="instagram"
              label="Instagram"
              id="instagram"
              value="http://www.instagram.com/Smartshop"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="youtube"
              label="Youtube"
              id="youtube"
              value="http://www.youtube.com/Smartshop"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} md={6}>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="copyright"
            label="Copyright"
            name="copyright"
            id="custom-css-outlined-input"
            value="@Copyright. 2020 | HLProductions"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
          <SubmitButton>Submit </SubmitButton>
        </Grid>
      </Container>
    </>
  );
}

export default ContentForm;
