import gql from "graphql-tag";

export const FETCH_TODOS = gql`
  query($isPublic: Boolean) {
    todos(
      order_by: { created_at: desc }
      where: { is_public: { _eq: $isPublic } }
      limit: 20
    ) {
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
`;

export const FETCH_NEW_TODOS = gql`
  query($lastId: Int) {
    todos(
      order_by: { id: desc }
      where: { _and: { is_public: { _eq: true }, id: { _gt: $lastId } } }
    ) {
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
`;

export const FETCH_OLD_TODOS = gql`
  query($lastId: Int, $isPublic: Boolean) {
    todos(
      order_by: { id: desc }
      where: { _and: { is_public: { _eq: $isPublic }, id: { _lt: $lastId } } }
      limit: 10
    ) {
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
`;
