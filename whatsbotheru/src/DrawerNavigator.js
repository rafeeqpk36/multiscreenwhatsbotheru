import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import OnlineUsers from "./UsersScreen";
import TodosTabNavigator from "./TodosTabNavigator";

const UsersStack = createStackNavigator({
  Users: {
    screen: OnlineUsers,
    navigationOptions: () => ({ title: "Online Users" })
  }
});

// Drawer navigator
const DrawerNavigator = createDrawerNavigator(
  {
    Todos: {
      screen: TodosTabNavigator
    },
    Users: {
      screen: UsersStack
    }
  },
  {
    contentOptions: {
      activeTintColor: "#39235A",
      inactiveTintColor: "black",
      inactiveBackgroundColor: "transparent",
      labelStyle: {
        fontSize: 15,
        marginLeft: 10
      }
    }
  }
);

/*const DrawerContainer = createAppContainer(Drawer);*/

export default createAppContainer(DrawerNavigator);
