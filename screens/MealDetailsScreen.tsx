import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface IMealDetailsScreenProps {}

export default function MealDetailsScreen(props: IMealDetailsScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>MealDetails screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
