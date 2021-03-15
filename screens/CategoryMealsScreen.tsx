import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface ICategoryMealsScreenProps {}

export default function CategoryMealsScreen(props: ICategoryMealsScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Meals screen</Text>
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
