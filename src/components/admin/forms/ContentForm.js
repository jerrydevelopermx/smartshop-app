import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Button, Grid, Container } from "@material-ui/core";
import { toast } from "react-toastify";
import mutations from "../../../graphql/mutations";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";
import components from "../../../js/components";
import MediaContentEditRow from "./MediaContentEditRow";
import FormFieldsGroup from "./FormFieldsGroup";

function ContentForm(props) {
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);
  let changeButtonCSS = computedStyles.changeButton(props);
  let urlRefs = {};

  const [content, setContent] = useState({
    siteTitleText: "",
    siteMetaDescriptionText: "",
    blogLink: "",
    tourDefaultLink: "",
    event1DefaultLink: "",
    event2DefaultLink: "",
    event3DefaultLink: "",
    slide1DefaultLink: "",
    slide2DefaultLink: "",
    slide3DefaultLink: "",
    slide4DefaultLink: "",
    slide5DefaultLink: "",
    siteFacebookLink: "",
    siteTwitterLink: "",
    siteInstagramLink: "",
    sitePinterestLink: "",
    siteCopyright: "",
  });

  const [viewContent, setViewContent] = useState({
    slide1DefaultLink: "",
    slide2DefaultLink: "",
    slide3DefaultLink: "",
    slide4DefaultLink: "",
    slide5DefaultLink: "",
    tourDefaultLink: "",
    event1DefaultLink: "",
    event2DefaultLink: "",
    event3DefaultLink: "",
  });
  urlRefs = {
    slide1DefaultLink: cleanUrlReferences(
      "slide1DefaultLink",
      "url",
      props.data.slide1DefaultLink
    ),
    slide2DefaultLink: cleanUrlReferences(
      "slide2DefaultLink",
      "url",
      props.data.slide2DefaultLink
    ),
    slide3DefaultLink: cleanUrlReferences(
      "slide3DefaultLink",
      "url",
      props.data.slide3DefaultLink
    ),
    slide4DefaultLink: cleanUrlReferences(
      "slide4DefaultLink",
      "url",
      props.data.slide4DefaultLink
    ),
    slide5DefaultLink: cleanUrlReferences(
      "slide5DefaultLink",
      "url",
      props.data.slide5DefaultLink
    ),
    tourDefaultLink: cleanUrlReferences(
      "tourDefaultLink",
      "url",
      props.data.tourDefaultLink
    ),
    event1DefaultLink: cleanUrlReferences(
      "event1DefaultLink",
      "url",
      props.data.event1DefaultLink
    ),
    event2DefaultLink: cleanUrlReferences(
      "event2DefaultLink",
      "url",
      props.data.event2DefaultLink
    ),
    event3DefaultLink: cleanUrlReferences(
      "event3DefaultLink",
      "url",
      props.data.event3DefaultLink
    ),
  };

  let fieldsGroupTop = [
    {
      id: "siteTitleText",
      name: "siteTitleText",
      value: content.siteTitleText,
      label: "Browser Label",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "siteMetaDescriptionText",
      name: "siteMetaDescriptionText",
      value: content.siteMetaDescriptionText,
      label: "Site Description",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "blogLink",
      name: "blogLink",
      value: content.blogLink,
      label: "Blog Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
  ];

  let fieldsGroupBottom = [
    {
      id: "siteFacebookLink",
      name: "siteFacebookLink",
      value: content.siteFacebookLink,
      label: "Facebook",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteInstagramLink",
      name: "siteInstagramLink",
      value: content.siteInstagramLink,
      label: "Instagram",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteTwitterLink",
      name: "siteTwitterLink",
      value: content.siteTwitterLink,
      label: "Twitter",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sitePinterestLink",
      name: "sitePinterestLink",
      value: content.sitePinterestLink,
      label: "Pinterest",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteCopyright",
      name: "siteCopyright",
      value: content.siteCopyright,
      label: "Copyright",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];

  const [updateSiteContent] = useMutation(mutations.UPDATE_SITE_CONTENT);

  useEffect(() => {
    setViewContent({
      slide1DefaultLink: cleanUrlReferences(
        "slide1DefaultLink",
        "ref",
        props.data.slide1DefaultLink
      ),
      slide2DefaultLink: cleanUrlReferences(
        "slide2DefaultLink",
        "ref",
        props.data.slide2DefaultLink
      ),
      slide3DefaultLink: cleanUrlReferences(
        "slide3DefaultLink",
        "ref",
        props.data.slide3DefaultLink
      ),
      slide4DefaultLink: cleanUrlReferences(
        "slide4DefaultLink",
        "ref",
        props.data.slide4DefaultLink
      ),
      slide5DefaultLink: cleanUrlReferences(
        "slide5DefaultLink",
        "ref",
        props.data.slide5DefaultLink
      ),
      tourDefaultLink: cleanUrlReferences(
        "tourDefaultLink",
        "ref",
        props.data.tourDefaultLink
      ),
      event1DefaultLink: cleanUrlReferences(
        "event1DefaultLink",
        "ref",
        props.data.event1DefaultLink
      ),
      event2DefaultLink: cleanUrlReferences(
        "event2DefaultLink",
        "ref",
        props.data.event2DefaultLink
      ),
      event3DefaultLink: cleanUrlReferences(
        "event3DefaultLink",
        "ref",
        props.data.event3DefaultLink
      ),
    });
    setContent({
      siteTitleText: props.data.siteTitleText,
      siteMetaDescriptionText: props.data.siteMetaDescriptionText,
      blogLink: props.data.blogLink,
      tourDefaultLink: props.data.tourDefaultLink,
      event1DefaultLink: props.data.event1DefaultLink,
      event2DefaultLink: props.data.event2DefaultLink,
      event3DefaultLink: props.data.event3DefaultLink,
      slide1DefaultLink: props.data.slide1DefaultLink,
      slide2DefaultLink: props.data.slide2DefaultLink,
      slide3DefaultLink: props.data.slide3DefaultLink,
      slide4DefaultLink: props.data.slide4DefaultLink,
      slide5DefaultLink: props.data.slide5DefaultLink,
      siteFacebookLink: props.data.siteFacebookLink,
      siteTwitterLink: props.data.siteTwitterLink,
      siteInstagramLink: props.data.siteInstagramLink,
      sitePinterestLink: props.data.sitePinterestLink,
      siteCopyright: props.data.siteCopyright,
    });
  }, []);

  function cleanUrlReferences(key, type, url) {
    let splittedUrl = url.split("&ref=");
    urlRefs[key] = splittedUrl[0];
    return type === "url"
      ? splittedUrl[0]
      : splittedUrl[1]
      ? splittedUrl[1]
      : "";
  }
  function handleChange(event) {
    setContent({
      ...content,
      [event.target.name]: event.target.value,
    });
  }
  function handleViewChange(event) {
    setViewContent({
      ...viewContent,
      [event.target.name]: event.target.value,
    });
    let sp = content[event.target.name].split("&ref=");
    setContent({
      ...content,
      [event.target.name]:
        sp[0] + (event.target.value !== "" ? "&ref=" + event.target.value : ""),
    });
  }

  function handleSave() {
    updateSiteContent({
      variables: {
        id: props.pageId,
        content: content,
      },
    }).then(
      (res) => {
        toast.success(
          "Content updated succesfully!",
          components.toastifyConfig
        );
      },
      (err) => console.log(err)
    );
  }
  return (
    <>
      <Container component="main" maxWidth="lg">
        <FormFieldsGroup fields={fieldsGroupTop} css={textFieldCSS.root} />
        <h4>Slides</h4>
        {[1, 2, 3, 4, 5].map((number) => (
          <MediaContentEditRow
            key={`mediaElement${number}`}
            id={`slide${number}`}
            label={`Slide ${number}`}
            css={textFieldCSS.root}
            style={styles.cmsSlidesPreview}
            cssButton={changeButtonCSS.root}
            defaultValue={urlRefs[`slide${number}DefaultLink`]}
            value={viewContent[`slide${number}DefaultLink`]}
            onChange={handleViewChange}
          />
        ))}
        <h4>Tour Video</h4>
        <MediaContentEditRow
          key={`videoElement1`}
          id={`tour`}
          label={`Video`}
          css={textFieldCSS.root}
          style={styles.cmsSlidesPreview}
          cssButton={changeButtonCSS.root}
          defaultValue={urlRefs[`tourDefaultLink`]}
          value={viewContent[`tourDefaultLink`]}
          isVideo={true}
          onChange={handleViewChange}
        />
        <h4>Events</h4>
        {[1, 2, 3].map((number) => (
          <MediaContentEditRow
            key={`eventsElement${number}`}
            id={`event${number}`}
            label={`Event ${number}`}
            css={textFieldCSS.root}
            style={styles.cmsSlidesPreview}
            cssButton={changeButtonCSS.root}
            defaultValue={urlRefs[`event${number}DefaultLink`]}
            value={viewContent[`event${number}DefaultLink`]}
            onChange={handleViewChange}
          />
        ))}
        <h4>Social Networks</h4>
        <FormFieldsGroup fields={fieldsGroupBottom} css={textFieldCSS.root} />
        <Grid item xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
          <Button className={submitButtonCSS.root} onClick={handleSave}>
            Submit
          </Button>
        </Grid>
      </Container>
    </>
  );
}

export default ContentForm;
