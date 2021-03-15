import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface IFiltersScreenProps {}

export default function FiltersScreen(props: IFiltersScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Filters screen</Text>
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
