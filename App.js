import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Header from "./components/header";
import AdvertiseScreen from "./screens/AdvertiseScreen";
import { enableScreens } from "react-native-screens";
import { MyNavigator } from "./navigation/AppNavigation";


enableScreens();


export default function App() {
  return <MyNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
