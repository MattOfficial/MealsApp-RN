import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { CATEGORIES, MEALS } from "../data/DummyData";
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

  console.log(meal);

  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <View style={{ ...styles.rowItem, ...styles.mealDetails }}>
        <Text>{meal?.duration.toString()} m</Text>
        <Text>{meal?.complexity.toUpperCase()}</Text>
        <Text>{meal?.afforability.toUpperCase()}</Text>
      </View>
      <Text style={styles.titleText}>Ingredients:</Text>
      {meal?.ingredient.map((ingredient) => (
        <View style={styles.item} key={ingredient}>
          <Text style={styles.stepText}>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.titleText}>Steps:</Text>
      {meal?.steps.map((steps) => (
        <View style={styles.item} key={steps}>
          <Text style={styles.stepText}>{steps}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowItem: {
    flexDirection: "row",
  },
  mealDetails: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  stepText: {
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: 200,
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
