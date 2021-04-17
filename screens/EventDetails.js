import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { EVENTS_CATEGORY, NEWS_DETAILS } from "../data/dummy-event";
import EventItem from "../components/EventItem";

const EventsDetail = (props) => {
  const renderNewsItem = (itemData) => {
    return (
      <EventItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        details={itemData.item.details}
      />
    );
  };
  const eventId = props.route.params.eventId;

  const displayEvents = NEWS_DETAILS.filter(
    (meal) => meal.categoryIds.indexOf(eventId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventsDetail;
