import React from "react";
import { ScrollView, Image, StyleSheet, Text } from "react-native";

const ImageDemo = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Little-Lemon-Logo.png")}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Picture1.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Picture2.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Picture3.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Picture4.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ImageDemo;
