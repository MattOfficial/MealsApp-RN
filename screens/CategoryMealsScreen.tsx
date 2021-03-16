import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/DummyData";

export interface ICategoryMealsScreenProps {
  navigation: any;
}

export default function CategoryMealsScreen(props: ICategoryMealsScreenProps) {
  // const id = props.navigation.getParams("categoryId");
  // const selectedCategory = CATEGORIES.find((item) => item.id === id);

  // props.navigation.setOptions({ title: selectedCategory?.title });

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
