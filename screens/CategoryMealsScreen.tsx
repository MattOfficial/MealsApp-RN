import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/DummyData";

export interface ICategoryMealsScreenProps {
  navigation: any;
  route: any;
}

export default function CategoryMealsScreen(props: ICategoryMealsScreenProps) {
  useEffect(() => {
    const selectedCategory = CATEGORIES.find(
      (item) => item.id === props.route.params.id
    );

    props.navigation.setOptions({
      title: selectedCategory?.title,
    });
  }, [props.navigation]);

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
