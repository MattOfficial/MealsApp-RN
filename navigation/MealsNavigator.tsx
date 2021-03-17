import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/Favourites";
import FiltersScreen from "../screens/FilterScreen";

const MealsNavigator = createStackNavigator();
const FavouriteStack = createStackNavigator();
const FilterNavigator = createStackNavigator();
const TabsNavigator = createBottomTabNavigator();
const TabsNavigatorAndroid = createMaterialBottomTabNavigator();
const MainNavigator = createDrawerNavigator();

const stackHeader = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    color: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};

const MealStackNavigator = () => {
  return (
    <MealsNavigator.Navigator screenOptions={stackHeader}>
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

const FilterNav = () => {
  return (
    <FilterNavigator.Navigator screenOptions={stackHeader}>
      <FilterNavigator.Screen
        name="FilterScreen"
        component={FiltersScreen}
        options={{ title: "Filters", headerTitleAlign: "center" }}
      />
    </FilterNavigator.Navigator>
  );
};

const FavouritesNav = () => {
  return (
    <FavouriteStack.Navigator screenOptions={stackHeader}>
      <FavouriteStack.Screen
        name="FavouriteScreen"
        component={FavouritesScreen}
        options={{ title: "Favourites", headerTitleAlign: "center" }}
      />
    </FavouriteStack.Navigator>
  );
};

const IosNav = () => (
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
    <TabsNavigator.Screen name="Favourites" component={FavouritesNav} />
  </TabsNavigator.Navigator>
);

const AndroidNav = () => (
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
      component={FavouritesNav}
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
  return (
    <MainNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
      }}
    >
      <MainNavigator.Screen
        name="MealFavs"
        options={{
          title: "Meals",
          drawerIcon: ({ focused, color }) => {
            return (
              <Ionicons name="ios-restaurant-outline" size={23} color={color} />
            );
          },
        }}
        component={Platform.OS === "ios" ? IosNav : AndroidNav}
      />
      <MainNavigator.Screen
        options={{
          title: "Filters",
          drawerIcon: ({ focused, color }) => {
            return <Ionicons name="filter-sharp" size={23} color={color} />;
          },
        }}
        name="Filters"
        component={FilterNav}
      />
    </MainNavigator.Navigator>
  );
}
