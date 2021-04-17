import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import { EVENTS_CATEGORY } from "../data/dummy-event";
import { DUMMY_IMAGES } from "../components/EventImage";
import EventGridTile from "../components/EventGridTile";

const EventsScreen = (props) => {
  const { width } = Dimensions.get("window");
  const height = width * 0.4;

  const renderGridItem = (itemData) => {
    return (
      <EventGridTile
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("รายละเอียด", {
            eventId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View>
      <View style={{ marginTop: 0, width, height }}>
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ width, height }}
        >
          {DUMMY_IMAGES.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width, height, resizeMode: "cover" }}
            />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={EVENTS_CATEGORY}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventsScreen;
