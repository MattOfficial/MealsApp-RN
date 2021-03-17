import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/DummyData";

export interface IFavouritesScreenProps {
  navigation: any;
  route: any;
}

export default function FavouritesScreen(props: IFavouritesScreenProps) {
  const dummyFavs = MEALS.filter(
    (item) => item.id === "m1" || item.id === "m2" || item.id === "m3"
  );

  return (
    <MealList
      meals={dummyFavs}
      navigation={props.navigation}
      route={props.route}
    />
  );
}
