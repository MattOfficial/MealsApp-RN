import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/DummyData";
import Meal from "../model/meal";

export interface IFavouritesScreenProps {
  navigation: any;
  route: any;
}

export default function FavouritesScreen(props: IFavouritesScreenProps) {
  const [favMeals, setFavMeals] = useState<Meal[]>();

  useEffect(() => {
    const dummyFavs = MEALS.filter(
      (item) => item.id === "m1" || item.id === "m2" || item.id === "m3"
    );

    setFavMeals(dummyFavs);

    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            color="#f5f5f5"
            //@ts-ignore
            size={25}
            iconName="ios-menu"
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  return (
    <MealList
      meals={favMeals!}
      navigation={props.navigation}
      route={props.route}
    />
  );
}
