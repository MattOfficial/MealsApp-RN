import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Meal from "../model/meal";
import MealItem from "./MealItem";

export interface IMealListProps {
  meals: Meal[];
  navigation: any;
  route: any;
}

export default function MealList({ meals, navigation }: IMealListProps) {
  const renderMealItem = (item: Meal) => {
    let catId = item.categoryIds.pop();
    return (
      <MealItem
        mealItem={item}
        onSelect={() => {
          navigation.navigate("MealDetails", {
            id: item.id,
            category: catId,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={(itemData) => renderMealItem(itemData.item)}
        style={styles.listStyle}
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
  listStyle: {
    width: "100%",
  },
});
