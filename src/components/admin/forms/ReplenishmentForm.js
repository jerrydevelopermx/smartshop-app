import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core/";
import FormFieldsGroup from "./FormFieldsGroup";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";

function ReplenishmentForm(props) {
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);
  const [replenishmentOrder, setReplenishmentOrder] = useState({
    replenishmentOrderNr: "",
    productID: "",
    supplierID: "",
    repGenDatime: "",
    quantityOrdered: "",
  });

  useEffect(() => {
    setReplenishmentOrder(props.data && props.data.replenishment);
  }, [props.data]);

  let fields = [
    {
      id: "replenishmentOrderNr",
      name: "replenishmentOrderNr",
      value:
        (replenishmentOrder && replenishmentOrder.replenishmentOrderNr) || "",
      label: "Order",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "productID",
      name: "productID",
      value: (replenishmentOrder && replenishmentOrder.productID) || "",
      label: "Product Number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "supplierID",
      name: "supplierID",
      value: (replenishmentOrder && replenishmentOrder.supplierID) || "",
      label: "Supplier #",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "repGenDatime",
      name: "repGenDatime",
      value: (replenishmentOrder && replenishmentOrder.repGenDatime) || "",
      label: "Date",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "quantityOrdered",
      name: "quantityOrdered",
      value: (replenishmentOrder && replenishmentOrder.quantityOrdered) || "",
      label: "Quantity",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];

  function handleChange(event) {}
  function handleSave() {
    console.log(replenishmentOrder);
  }

  return (
    <>
      <FormFieldsGroup fields={fields} css={textFieldCSS.root} />
      <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
        <Button className={submitButtonCSS.root} onClick={handleSave}>
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default ReplenishmentForm;
