import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

export interface IFiltersScreenProps {
  navigation: any;
}

export interface IFilterSwitch {
  label: string;
  value: boolean;
  onChange: (value: React.SetStateAction<boolean>) => void;
}

export default function FiltersScreen(props: IFiltersScreenProps) {
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegeterian, setIsVegeterian] = useState<boolean>(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegeterian: isVegeterian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  useEffect(() => {
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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            color="#f5f5f5"
            //@ts-ignore
            size={25}
            iconName="md-bookmark-sharp"
            onPress={() => console.log()}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  const FilterSwitch = (props: IFilterSwitch) => {
    return (
      <View style={styles.filterContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor, false: "" }}
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
          value={props.value}
          onValueChange={(newVal) => props.onChange(newVal)}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters:</Text>
      <FilterSwitch
        label="Gluten Free: "
        value={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose Free: "
        value={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan:" value={isVegan} onChange={setIsVegan} />
      <FilterSwitch
        label="Vegeterian:"
        value={isVegeterian}
        onChange={setIsVegeterian}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
  },
});
