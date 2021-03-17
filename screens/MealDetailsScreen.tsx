import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { CATEGORIES, MEALS } from "../data/DummyData";
import Category from "../model/category";
import Meal from "../model/meal";

export interface IMealDetailsScreenProps {
  navigation: any;
  route: any;
}

export default function MealDetailsScreen(props: IMealDetailsScreenProps) {
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    const selectedMeal = MEALS.find(
      (item) => item.id === props.route.params.id
    );

    setMeal(selectedMeal!);

    const primaryMealCategory = CATEGORIES.find(
      (item) => item.id === props.route.params.category
    );

    props.navigation.setOptions({
      title: selectedMeal!.title,
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? primaryMealCategory?.color : "",
      },
      headerTitleStyle: {
        color: Platform.OS === "android" ? "black" : primaryMealCategory?.color,
      },
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favourites"
            iconName="ios-star"
            color="#ccc"
            //@ts-ignore
            size={23}
            onPress={() => {
              console.log("Marked as favorites!");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

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
