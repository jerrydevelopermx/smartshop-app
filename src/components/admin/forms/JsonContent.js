import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@material-ui/core/Button";

import appFunctions from "../../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useQuery, useMutation } from "@apollo/client";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";

function JsonContent(props) {
  const { loading, error, data } = useQuery(queries.GET_CONTENT_BY_ID, {
    variables: {
      id: 51,
      storeId: 0,
    },
  });
  const [addEdit] = useMutation(mutations.UPDATE_CONTENT);
  const [content, setContent] = useState("");
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

  function handleEditorChange(content, editor) {
    setContent(content);
  }

  function saveContent() {
    addEdit({
      variables: {
        id: 51,
        content: {
          content: content,
        },
      },

      onCompleted: () => console.log("done"),
    });
  }

  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;
  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3} md={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Section
            </InputLabel>
            <Select
              native
              label="Age"
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Blog</option>
              <option value={20}>Contact Us</option>
              <option value={30}>Our Mission</option>
              <option value={10}>Who we are</option>
              <option value={20}>Board & Staff</option>
              <option value={30}>Site's Features</option>
              <option value={10}>Site's Membership</option>
              <option value={20}>History</option>
              <option value={30}>Site Policies</option>
              <option value={30}>Membership Policies</option>
              <option value={30}>Customers Policies</option>
              <option value={30}>Visitors Policies</option>
            </Select>
          </FormControl>
          <Editor
            apiKey="pav6ogx2bhi6boahep8gt9hz5tprm5ljw9xmyy4lljbl9bxv"
            initialValue={data.newContent && data.newContent.content}
            init={{
              height: 450,
              width: 1100,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
          />
        </Grid>
      </Grid>
      <div>{content}</div>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          style={{ padding: "30px", textAlign: "center" }}
        >
          <SubmitButton onClick={saveContent}>Submit </SubmitButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default JsonContent;
