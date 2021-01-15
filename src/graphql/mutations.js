import { gql } from "@apollo/client";

const mutations = {
  UPDATE_CONTENT: gql`
    mutation UpdateContent($id: ID, $content: ContentInput) {
      updateContent(id: $id, content: $content) {
        id
        content
      }
    }
  `,
  UPDATE_APPEARANCE: gql`
    mutation UpdateAppearance($id: ID, $appearance: AppearanceInput) {
      updateAppearance(id: $id, appearance: $appearance) {
        id
      }
    }
  `,
  ADD_USER: gql`
    mutation AddTodo($type: String!) {
      addTodo(type: $type) {
        id
        content
        author
      }
    }
  `,

  ADD_DEPT: gql`
    mutation AddDepartment($department: DepartmentInput) {
      addDepartment(department: $department) {
        id
        departmentName
      }
    }
  `,
  USER_LOGIN: gql`
    mutation Login($username: String!, $password: String!, $store: Int!) {
      login(email: $username, password: $password, store: $store) {
        token
        userType
        userName
        store
      }
    }
  `,
};

export default mutations;
