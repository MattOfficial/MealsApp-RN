import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export interface ICategoryMealsScreenProps {
  navigation: any;
}

export default function CategoryMealsScreen(props: ICategoryMealsScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Meals screen</Text>
      <Button
        title="Meal detail"
        onPress={() => props.navigation.push("MealDetails")}
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
