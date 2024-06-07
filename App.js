import React from "react";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ToDoListScreen from "./screens/ToDoListScreen";
import LogoutScreen from "./screens/LogoutScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ToDoList" component={ToDoListScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
