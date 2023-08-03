import { StyleSheet, Text, ScrollView, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle="white" style={styles.scrollViewContainer}>
        <Text style={styles.mainText}>Welcome to Little Lemon</Text>
        <Text style={styles.aboutText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#333333" },
  scrollViewContainer: { flex: 1 },
  mainText: {
    padding: 20,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  aboutText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
