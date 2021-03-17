import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/DummyData";
import Meal from "../model/meal";

export interface ICategoryMealsScreenProps {
  navigation: any;
  route: any;
}

export default function CategoryMealsScreen(props: ICategoryMealsScreenProps) {
  const [meals, setMeals] = useState<Meal[]>();

  useEffect(() => {
    const selectedCategory = CATEGORIES.find(
      (item) => item.id === props.route.params.id
    );

    const mealsOfCategory = MEALS.filter(
      (item) => item.categoryIds.indexOf(selectedCategory!.id) >= 0
    );

    setMeals(mealsOfCategory);

    props.navigation.setOptions({
      title: selectedCategory?.title,
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? selectedCategory?.color : "",
      },
      headerTitleStyle: {
        color: Platform.OS === "android" ? "black" : selectedCategory?.color,
      },
    });
  }, [props.navigation]);

  const renderMealItem = (item: Meal) => {
    return (
      <MealItem
        mealItem={item}
        onSelect={() => {
          console.log(`${item.title} selected.`);
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
