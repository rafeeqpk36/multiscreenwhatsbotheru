import gql from "graphql-tag";

export const INSERT_USER = gql`
  mutation($id: String, $name: String) {
    insert_users(objects: { id: $id, name: $name }) {
      affected_rows
    }
  }
`;

// GraphQL mutation to update last_seen
export const EMIT_ONLINE_EVENT = gql`
  mutation {
    update_users(_set: { last_seen: "now()" }, where: {}) {
      affected_rows
    }
  }
`;

export const INSERT_TODO = gql`
  mutation($text: String!, $isPublic: Boolean) {
    insert_todos(objects: [{ title: $text, is_public: $isPublic }]) {
      returning {
        id
        title
        is_completed
        created_at
        is_public
        user {
          name
        }
      }
    }
  }
`;
export const UPDATE_TODO = gql`
  mutation($id: Int, $isCompleted: Boolean) {
    update_todos(
      _set: { is_completed: $isCompleted }
      where: { id: { _eq: $id } }
    ) {
      returning {
        id
        title
        is_completed
        created_at
        is_public
      }
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation($id: Int) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
