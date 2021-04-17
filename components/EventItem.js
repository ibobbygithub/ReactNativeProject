import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
} from "react-native";

const EventItem = (props) => {
  return (
    <View style={styles.newsItem}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        <View style={{ ...styles.newsRow, ...styles.newsHeader }}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.bgImage}
          ></ImageBackground>
        </View>
        <Text>{props.details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    height: 100,
    width: "100%",
  },
  newsRow: {
    flexDirection: "row",
  },
  newsHeader: {
    height: "100%",
  },
  newsDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    //fontFamily:'open-sans-bold',
    fontSize: 18,
    color:'black',
    paddingVertical: 12,
    textAlign: "left",
  },
  titleHeader:{
      fontSize:24
  }
});

export default EventItem;
