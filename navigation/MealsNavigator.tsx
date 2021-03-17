import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/Favourites";

const MealsNavigator = createStackNavigator();
const TabsNavigator = createBottomTabNavigator();
const TabsNavigatorAndroid = createMaterialBottomTabNavigator();

const MealStackNavigator = () => {
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
};

const IosNav = (
  <TabsNavigator.Navigator
    initialRouteName="Home"
    tabBarOptions={{ activeTintColor: Colors.accentColor }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home") {
          return <Ionicons name="ios-restaurant" size={size} color={color} />;
        } else if (route.name === "Favourites") {
          return (
            <Ionicons
              name="md-heart-sharp"
              size={size}
              color={focused ? "red" : "grey"}
            />
          );
        }
      },
    })}
  >
    <TabsNavigator.Screen name="Home" component={MealStackNavigator} />
    <TabsNavigator.Screen name="Favourites" component={FavouritesScreen} />
  </TabsNavigator.Navigator>
);

const AndroidNav = (
  <TabsNavigatorAndroid.Navigator
    shifting={true}
    initialRouteName="Home"
    barStyle={{ backgroundColor: Colors.accentColor }}
  >
    <TabsNavigatorAndroid.Screen
      name="Home"
      component={MealStackNavigator}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={focused ? "white" : color}
          />
        ),
        tabBarColor: Colors.primaryColor,
      }}
    />
    <TabsNavigatorAndroid.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="md-heart-sharp"
            size={25}
            color={focused ? "white" : color}
          />
        ),
        tabBarColor: Colors.accentColor,
      }}
    />
  </TabsNavigatorAndroid.Navigator>
);

export default function MealStack() {
  return Platform.OS === "ios" ? IosNav : AndroidNav;
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    color: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
});
