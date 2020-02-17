import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import Textbox from "./Todo/Textbox";
import Todos from "./Todo/Todos";

const TodoScreen = ({ isPublic, navigate }) => {
  // session variable
  const [sessionInfo, setSessionInfo] = useState("");
  const { id, token, name } = sessionInfo;

  // fetch session on first mount
  useEffect(() => {
    setSessionInfo(sessionInfo);
  }, []);

  if (!token) {
    return <ActivityIndicator />;
  }

  // provide session details to children components
  return (
    <View style={styles.container}>
      <Textbox
        isPublic={isPublic}
        navigate={navigate}
        userId={id}
        username={name}
        token={token}
      />
      <View style={styles.todoListContainer}>
        <Todos
          isPublic={isPublic}
          navigate={navigate}
          userId={id}
          username={name}
          token={token}
        />
      </View>
    </View>
  );
};
/*TodoScreen.propTypes = {
  isPublic: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "flex-start"
  },
  todoListContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
});

export default TodoScreen;
