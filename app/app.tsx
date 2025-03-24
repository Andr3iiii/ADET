import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ContextProvider } from "./context/context";
import home from "./screens/home";
import Game from "../app/screens/Game";
import Result from "../app/screens/Result";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={home} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
