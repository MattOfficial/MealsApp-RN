import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface IFavouritesScreenProps {}

export default function FavouritesScreen(props: IFavouritesScreenProps) {
  return (
    <View style={styles.screen}>
      <Text>Favourites screen</Text>
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
