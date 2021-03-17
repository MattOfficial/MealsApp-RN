import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import MealList from "../components/MealList";
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

  return (
    <MealList
      meals={meals!}
      navigation={props.navigation}
      route={props.route}
    />
  );
}
