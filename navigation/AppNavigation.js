import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React, { Component } from "react";
import AdvertiseScreen from "../screens/AdvertiseScreen";
import AdvertiseDetailScreen from "../screens/AdvertiseDetail";
import Contact from "../screens/contact";
import EventsScreen from "../screens/EventsScreen";
import EventsDetail from "../screens/EventDetails";
import Home from "../screens/Home";
import HomeGridDetail from "../screens/HomeGridDetail";
import { SafeAreaView } from "react-navigation";

const Stack = createStackNavigator();

function HomeSetting() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="หน้าหลัก" component={Home} />
      <Stack.Screen name="รายละเอียด" component={HomeGridDetail} />
    </Stack.Navigator>
  );
}

function AdvertiseSetting() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ประชาสัมพันธ์" component={AdvertiseScreen} />
      <Stack.Screen name="รายละเอียด" component={AdvertiseDetailScreen} />
    </Stack.Navigator>
  );
}

function EventsSetting() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="นิทรรศการ" component={EventsScreen} />
      <Stack.Screen name="รายละเอียด" component={EventsDetail} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

export function MyNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                "https://sciplanet.org/wp-content/uploads/2015/07/cropped-logo_SCE_white-1-1536x1092.png",
            }}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={{ padding: 10, color: "#fff", fontSize: 20 }}>
            ท้องฟ้าจำลองกรุงเทพ
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#ffffff",
          labelStyle: { fontSize: 14 },
          style: { backgroundColor: "#6ebb91" },
        }}
      >
        <Tab.Screen name="หน้าหลัก" component={HomeSetting} />
        <Tab.Screen name="ประชาสัมพันธ์" component={AdvertiseSetting} />
        <Tab.Screen name="นิทรรศการ" component={EventsSetting} />
        <Tab.Screen name="ติดต่อเรา" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  FacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e2f4d",
    height: 40,
  },
});
