import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import Meal from "../model/meal";

export interface IMealItemProps {
  onSelect: Function;
  mealItem: Meal;
}

export default function MealItem(props: IMealItemProps) {
  let TouchableComponent: any = TouchableNativeFeedback;

  if (
    Platform.OS === "ios" ||
    (Platform.OS === "android" && Platform.Version <= 21)
  ) {
    TouchableComponent = TouchableOpacity;
  }

  return (
    <View style={{ padding: 10 }}>
      <TouchableComponent onPress={props.onSelect}>
        <View style={styles.item}>
          <View style={{ ...styles.rowItem, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.mealItem.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.mealItem.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.rowItem, ...styles.mealDetails }}>
            <Text>{props.mealItem.duration} m</Text>
            <Text>{props.mealItem.complexity.toUpperCase()}</Text>
            <Text>{props.mealItem.afforability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  rowItem: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
