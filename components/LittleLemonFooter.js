import { StyleSheet, View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={{ backgroundColor: "#EE9972" }}>
      <Text style={styles.footer}>
        All Rights Reserved By Little Lemon, 2023{""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
