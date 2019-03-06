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
import Digitos from './app/screens/Digitos';
import Circulo from './app/screens/Circulo';
import AnioBisiesto from './app/screens/AnioBisiesto';
import CantPalabras from './app/screens/CantPalabras';
import Velocity from './app/screens/Velocidades';
import MultiSuma from './app/screens/MultiSuma';
import DiviResta from './app/screens/DiviResta';
import OrdenarTres from './app/screens/OrdenarTres';
import CambioDivisas from './app/screens/CambioDivisas';
import Temperaturas from './app/screens/Temperaturas';

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
    "Año bisiesto":AnioBisiesto,
    "Calcular círculo": Circulo,
    "Calcular velocidad": Velocity,
    "Cambio de divisas": CambioDivisas,
    "Contar palabras": CantPalabras,
    "Conversor de temperaturas": Temperaturas,
    "Decimal a binario": DecimalBinario,
    "Decimal a romano": DecimalRomano,
    "Días a minutos": DiasMinutos,
    "Dígitos": Digitos,
    "División por resta": DiviResta,
    "Factorial": Factorial,
    "Hola mundo": HolaMundo,
    "Multiplicación por suma": MultiSuma,
    "Ordenar 3 números": OrdenarTres
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
