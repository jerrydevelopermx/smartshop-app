import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { useMutation } from "@apollo/client";
import appFunctions from "../../../js/functions";
import mutations from "../../../graphql/mutations";

function AppearanceForm(props) {
  const [appearance, setAppearance] = useState({
    siteBodyColorRGB: props.data.siteBodyColorRGB,
    siteBodyFontColorText: props.data.siteBodyFontColorText,
    siteMainColorRGB: props.data.siteMainColorRGB,
    siteMainFontColorText: props.data.siteMainFontColorText,
    siteFontNameText: props.data.siteFontNameText,
  });
  const [colorPickersStatus, setColorPickersStatus] = useState({
    bodyColor: false,
    bodyFontColor: false,
    mainColor: false,
    mainFontColor: false,
  });
  const [updateAppearance] = useMutation(mutations.UPDATE_APPEARANCE);

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

  function handleClick(type) {
    setColorPickersStatus({ ...colorPickersStatus, ...{ [type]: true } });
  }

  function handleMainFontChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteMainFontColorText: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
  }

  function handleMainChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteMainColorRGB: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
  }

  function handleBodyFontChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteBodyFontColorText: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
  }

  function handleBodyChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteBodyColorRGB: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
  }

  function handleSelectChange(event) {
    setAppearance({
      ...appearance,
      ...{
        siteFontNameText: event.target.value,
      },
    });
  }

  function handleSave() {
    updateAppearance({
      variables: {
        id: props.pageId,
        appearance: appearance,
      },

      onCompleted: () => console.log("done"),
    });
  }
  function handleClose(type) {
    setColorPickersStatus({ ...colorPickersStatus, ...{ [type]: false } });
  }

  return (
    <>
      <Container component="main" maxWidth="md">
        <Grid container spacing={1}>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <img
              src={`${process.env.PUBLIC_URL + "/" + props.data.siteLogoLink}`}
              alt=""
              style={{ width: "100px" }}
            />
          </Grid>
          <Grid item xs={4} sm={6} md={9}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Logo URL"
              name="logUrl"
              defaultValue={props.data.siteLogoLink}
            />
          </Grid>

          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <ChangeButton>Change</ChangeButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bodyColor"
              label="Body Color"
              id="bodyColor"
              defaultValue={appearance.siteBodyColorRGB}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <div>
              <div
                style={{
                  padding: "5px",
                  background: "#ccc",
                  borderRadius: "1px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("bodyColor")}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "2px",
                    color: "#ccc",
                    background: appearance.siteBodyColorRGB,
                  }}
                />
              </div>
              {colorPickersStatus.bodyColor ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "2",
                  }}
                >
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => handleClose("bodyColor")}
                  />
                  <SketchPicker
                    color={appearance.siteBodyColorRGB}
                    onChangeComplete={handleBodyChange}
                  />
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bodyTextColor"
              label="Body Font Color"
              id="bodyTextColor"
              defaultValue={appearance.siteBodyFontColorText}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <div>
              <div
                style={{
                  padding: "5px",
                  background: "#ccc",
                  borderRadius: "1px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("bodyFontColor")}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "2px",
                    color: "#ccc",
                    background: appearance.siteBodyFontColorText,
                  }}
                />
              </div>
              {colorPickersStatus.bodyFontColor ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "2",
                  }}
                >
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => handleClose("bodyFontColor")}
                  />
                  <SketchPicker
                    color={appearance.siteBodyFontColorText}
                    onChangeComplete={handleBodyFontChange}
                  />
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">Font</InputLabel>
              <Select
                native
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
                value={appearance.siteFontNameText}
                onChange={handleSelectChange}
              >
                <option aria-label="None" value="" />
                <option value={"Verdana"}>Verdana</option>
                <option value={"Roboto"}>Roboto</option>
                <option value={"Sans Serif"}>Sans Serif</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mainComponentsColors"
              label="Main Components Color"
              id="mainComponentsColor"
              defaultValue={appearance.siteMainColorRGB}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <div>
              <div
                style={{
                  padding: "5px",
                  background: "#ccc",
                  borderRadius: "1px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("mainColor")}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "2px",
                    color: "#ccc",
                    background: appearance.siteMainColorRGB,
                  }}
                />
              </div>
              {colorPickersStatus.mainColor ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "2",
                  }}
                >
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => handleClose("mainColor")}
                  />
                  <SketchPicker
                    color={appearance.siteMainColorRGB}
                    onChangeComplete={handleMainChange}
                  />
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mainComponentsTextColor"
              label="Main Components Font Color"
              id="mainComponentsTextColor"
              defaultValue={appearance.siteMainFontColorText}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <div>
              <div
                style={{
                  padding: "5px",
                  background: "#ccc",
                  borderRadius: "1px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => handleClick("mainFontColor")}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "2px",
                    color: "#ccc",
                    background: appearance.siteMainFontColorText,
                  }}
                />
              </div>
              {colorPickersStatus.mainFontColor ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "2",
                  }}
                >
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      left: "0px",
                    }}
                    onClick={() => handleClose("mainFontColor")}
                  />
                  <SketchPicker
                    color={appearance.siteMainFontColorText}
                    onChangeComplete={handleMainFontChange}
                  />
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            style={{ padding: "30px", textAlign: "center" }}
          >
            <SubmitButton onClick={handleSave}>Submit </SubmitButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AppearanceForm;
