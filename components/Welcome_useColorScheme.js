import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";

const Welcome_useColorScheme = () => {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/LittleLemonLogo.png")}
          resizeMode="center"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text
          style={[
            styles.headerText,
            colorScheme === "light"
              ? { color: "#333333" }
              : { color: "#EDEFEE" },
          ]}
        >
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  headerWrapper: {
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
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});

export default Welcome_useColorScheme;
