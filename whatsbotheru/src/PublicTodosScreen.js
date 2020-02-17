import React from "react";
import TodoScreen from "./TodoScreen";
import MenuButton from "./MenuButton";
/*import PropTypes from "prop-types";*/

const PublicTodos = () => {
  // return TodoScreen with prop isPublic to true
  return <TodoScreen isPublic={true} /*navigate={navigation.navigate}*/ />;
};

PublicTodos.navigationOptions = ({ navigation }) => ({
  headerTitle: "Public Todos",
  headerLeft: () => <MenuButton onPress={navigation.toggleDrawer} />
});
/*PublicTodos.propTypes = {
  navigation: PropTypes.shape.isRequired
};*/

export default PublicTodos;
