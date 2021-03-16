import * as React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator();

export default function MealStack() {
  return (
    <MealsNavigator.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <MealsNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Meal Categories", headerTitleAlign: "center" }}
      />
      <MealsNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: "Meals", headerTitleAlign: "center" }}
      />
      <MealsNavigator.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: "Details", headerTitleAlign: "center" }}
      />
    </MealsNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    color: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
});
