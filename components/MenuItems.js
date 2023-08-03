import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  " Humus \n Moutabal \n Falafel \n Marinated olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cota ",
];

const MenuItems = () => {
  return (
    <ScrollView
      indicatorStyle="white"
      horizontal={false}
      style={styles.menuContainer}
    >
      <Text style={styles.menuItemsHeader}>View Menu</Text>
      <Text style={styles.menuItemsText}>{menuItemsToDisplay[0]}</Text>
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "black",
    flex: 0.9,
  },
  menuItemsHeader: { fontSize: 40, flexWrap: "wrap", color: "white" },
  menuItemsText: { fontSize: 36, color: "#F4CE14" },
});
