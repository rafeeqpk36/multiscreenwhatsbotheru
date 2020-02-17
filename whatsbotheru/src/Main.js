import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import DrawerNavigator from "./DrawerNavigator";
import CenterSpinner from "./CenterSpinner";
import makeApolloClient from "./apollo";
import { INSERT_USER, EMIT_ONLINE_EVENT } from "./Todo/Mutations";
import { View } from "react-native";

const Main = ({ token, user }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const { id, name, isNewUser } = user;
    const client = makeApolloClient(token);

    if (isNewUser) {
      client.mutate({
        mutation: INSERT_USER,
        variables: { id, name }
      });
    }

    setClient(client);
    setInterval(() => {
      client.mutate({
        mutation: EMIT_ONLINE_EVENT
      });
    }, 300);
  }, []);
  if (!client) {
    return <CenterSpinner />;
  }

  return (
    <ApolloProvider client={client}>
      <View>
        <DrawerNavigator />
      </View>
    </ApolloProvider>
  );
};

Main.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default Main;
