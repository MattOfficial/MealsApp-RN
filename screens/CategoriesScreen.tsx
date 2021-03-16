import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface ICategoriesScreenProps {
  navigation: any;
}

export default function CategoriesScreen(props: ICategoriesScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => props.navigation.navigate("CategoryMeals")}
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
