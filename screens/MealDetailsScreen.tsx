import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export interface IMealDetailsScreenProps {
  navigation: any;
}

export default function MealDetailsScreen(props: IMealDetailsScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>MealDetails screen</Text>
      <Button
        title="Back to categories"
        onPress={() => props.navigation.popToTop()}
      />
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
