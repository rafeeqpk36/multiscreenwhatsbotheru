import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const MenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
      <Icon name="menu" size={26} style={{ marginBottom: -2 }} />
    </TouchableOpacity>
  );
};
/*MenuButton.propTypes = {
  onPress: PropTypes.func.isRequired
};*/

export default MenuButton;
