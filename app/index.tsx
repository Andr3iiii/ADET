import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Temp from "./screens/Temp";
import Game from "./screens/Game";
import Result from "./screens/Result";
import { ContextProvider } from "./context/context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </ContextProvider>
  );
}
