import React from "react";
import { View, SafeAreaView, ScrollView, Image } from "react-native";

import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";

import HomeScreen from "./app/public/HomeScreen";
import HolaMundo from './app/screens/HolaMundo';
import DiasMinutos from "./app/screens/DiasMinutos";
import Factorial from './app/screens/Factorial';
import DecimalBinario from './app/screens/DecimalBinario';
import DecimalRomano from './app/screens/DecimalRomano';

const Drawer = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "#212121",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        source={require("./assets/deerSecondary.png")}
        style={{ height: 120, width: 120 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    "Inicio": HomeScreen,
    "Decimal a Binario": DecimalBinario,
    "Decimal a Romano": DecimalRomano,
    "Días a minutos": DiasMinutos,
    "Factorial": Factorial,
    "Hola Mundo": HolaMundo
  },
  {
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: "#000",
      activeBackgroundColor: "#efefef",
      inactiveTintColor: "#8d8d8d"
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);
export default AppContainer;
