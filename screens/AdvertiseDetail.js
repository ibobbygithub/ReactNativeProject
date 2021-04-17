import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { NEWS_DETAILS } from "../data/dummy-data";
import NewsItem from "../components/NewsItem";

const AdvertiseDetailScreen = (props) => {
  const renderNewsItem = (itemData) => {
    return (
      <NewsItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        details={itemData.item.details}
      />
    );
  };

  const advId = props.route.params.adverseId;

  const displayNews = NEWS_DETAILS.filter(
    (New_details) => New_details.categoryIds.indexOf(advId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayNews}
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

export default AdvertiseDetailScreen;
