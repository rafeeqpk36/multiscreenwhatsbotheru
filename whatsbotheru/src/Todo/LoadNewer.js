import React from "react";
import { TouchableOpacity, Text } from "react-native";
import CenterSpinner from "../CenterSpinner";
import { withApollo } from "react-apollo";
import { FETCH_TODOS, FETCH_NEW_TODOS } from "./Queries";
import PropTypes from "prop-types";

const LoadNewer = ({ show, styles, isPublic, ...props }) => {
  const [buttonText, setButtonText] = React.useState("New todos have arrived");
  const [loading, setLoading] = React.useState(false);

  const fetchNewerTodos = async () => {
    const { client } = props;
    const data = client.readQuery({
      query: FETCH_TODOS,
      variables: {
        isPublic
      }
    });
    const lastId = data.todos[0].id;
    setLoading(true);
    const resp = await client.query({
      query: FETCH_NEW_TODOS,
      variables: { lastId }
    });
    setLoading(false);
    if (resp.data) {
      const newData = {
        todos: [...resp.data.todos, ...data.todos]
      };
      client.writeQuery({
        query: FETCH_TODOS,
        variables: {
          isPublic
        },
        data: newData
      });
      props.toggleShow();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.banner}
      disabled={loading}
      onPress={fetchNewerTodos}
    >
      {loading ? (
        <CenterSpinner />
      ) : (
        <Text style={styles.buttonText}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};
/*LoadNewer.propTypes = {
  styles: PropTypes.object.isRequired,
  isPublic: PropTypes.bool.isRequired,
  show: PropTypes.object.isRequired
};*/

export default withApollo(LoadNewer);
