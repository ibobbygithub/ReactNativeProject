import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import AdvGridTile from "../components/AdvGridTile";

const AdvertiseScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <AdvGridTile
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("รายละเอียด", {
            adverseId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AdvertiseScreen;
