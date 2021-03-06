import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function CustomHeaderButton(props: any) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={props.size}
      color={Platform.OS === "ios" ? Colors.primaryColor : props.color}
    />
  );
}
