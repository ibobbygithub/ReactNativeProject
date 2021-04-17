import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const AdvGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
        <View>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 10,
    textAlign: "left",
    color: "black",
    backgroundColor: "white",
    paddingVertical: 3,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default AdvGridTile;
