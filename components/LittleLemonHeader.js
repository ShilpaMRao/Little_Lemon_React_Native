import { StyleSheet, View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { flex: 0.2, backgroundColor: "#EE9972" },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
