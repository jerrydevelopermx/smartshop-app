import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import queries from "../graphql/queries";
import DeptEditForm from "./admin/forms/DeptEditForm";
import CampaignEditForm from "./admin/forms/CampaignEditForm";
import ProductEditForm from "./admin/forms/ProductEditForm";
import ReplenishmentForm from "./admin/forms/ReplenishmentForm";
import UserEditForm from "./admin/forms/UserEditForm";
import GraphqlLoading from "./common/GraphqlLoading";
import GraphqlError from "./common/GraphqlError";

function EditForms(props) {
  let { id, section, action, departmentId, resourceId } = useParams();
  console.log("Edit Forms ===========");
  console.log(
    "id:" + id,
    "section:" + section,
    "action:" + action,
    "deptId:" + departmentId,
    "resourceId:" + resourceId
  );
  console.log("props");
  console.log(props);
  let vars = {
    DEPARTMENT: {
      deptId: departmentId,
    },
    CAMPAIGN: {
      campaignId: resourceId,
    },
    PRODUCT: {
      id: resourceId,
      departmentID: id,
    },
    REPLENISHMENT: {
      id: props.id,
    },
    USER: {
      userId: resourceId,
    },
  };
  console.log(props.id, props.action);
  const { loading, error, data } = useQuery(
    queries[`GET_${props.type}_DATA_BY_ID`],
    {
      skip: props.id ? props.action === "add" : action === "add",
      variables: vars[props.type],
    }
  );

  if (loading) return <GraphqlLoading />;
  if (error) return <GraphqlError />;

  return {
    CAMPAIGN: (
      <CampaignEditForm
        data={data}
        action={props.action}
        styles={props.styles}
      />
    ),
    DEPARTMENT: (
      <DeptEditForm data={data} action={props.action} styles={props.styles} />
    ),
    PRODUCT: (
      <ProductEditForm
        data={data}
        appButtons={props.appButtons}
        styles={props.styles}
      />
    ),
    REPLENISHMENT: (
      <ReplenishmentForm
        data={data}
        action={props.action}
        appButtons={props.appButtons}
        styles={props.styles}
      />
    ),
    USER: (
      <UserEditForm
        data={data}
        action={props.action}
        appButtons={props.appButtons}
        styles={props.styles}
      />
      /*<ReplenishmentFor
          data={data}
          action={props.action}
          appButtons={props.appButtons}
          styles={props.styles}
        />*/
    ),
  }[props.type];
  //
}

export default EditForms;
