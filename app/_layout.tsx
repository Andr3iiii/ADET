import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GameProvider } from "../app/context/GameContext";
import HomeScreen from "../app/screens/Home";
import GameScreen from "../app/screens/GameScreen";

const Stack = createStackNavigator();

const Layout: React.FC = () => {
  return (
    <GameProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </GameProvider>
  );
};

export default Layout;
