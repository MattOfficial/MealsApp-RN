import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface ICategoriesScreenProps {}

export default function CategoriesScreen(props: ICategoriesScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
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
