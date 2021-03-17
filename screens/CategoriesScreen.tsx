import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/DummyData";
import Category from "../model/category";

export interface ICategoriesScreenProps {
  navigation: any;
}

export default function CategoriesScreen(props: ICategoriesScreenProps) {
  const TouchableComponent: any =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

  const renderGridItem = (itemData: Category) => {
    return (
      <TouchableComponent
        onPress={() =>
          props.navigation.navigate("CategoryMeals", { id: itemData.id })
        }
      >
        <View
          style={{
            ...styles.gridItems,
            borderWidth: 1,
            backgroundColor: itemData.color,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: "black",
              fontFamily: "open-sans-bold",
              fontSize: 22,
              textAlign: "right",
            }}
          >
            {itemData.title}
          </Text>
        </View>
      </TouchableComponent>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => renderGridItem(itemData.item)}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
});
