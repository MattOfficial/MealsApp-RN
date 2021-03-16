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
        <View style={styles.gridItems}>
          <Text>{itemData.title}</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
