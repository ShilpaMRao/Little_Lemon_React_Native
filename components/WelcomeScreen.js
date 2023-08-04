import { StyleSheet, Text, ScrollView, View, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle="white" style={styles.scrollViewContainer}>
        <View style={styles.logoText}>
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/LittleLemonLogo.png")}
            accessible={true}
            accessibilityLabel="Little Lemon Logo"
          />
          <Text style={styles.headerText}>Little Lemon</Text>
        </View>
        {/* <Text style={styles.mainText}>Welcome to Little Lemon</Text> */}
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
  imageStyle: {
    height: 100,
    width: 100,
    marginVertical: 5,
    borderRadius: 20,
  },
  logoText: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
