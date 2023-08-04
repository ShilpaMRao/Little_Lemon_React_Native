import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import MenuItems_FlatList from "./components/MenuItems_FlatList";
import MenuItems_SectionList from "./components/MenuItems_SectionList";
import FeedBackForm from "./components/FeedBackForm";
import LoginScreen from "./components/LoginScreen";
import Pressable_Menu from "./components/Pressable_Menu";
import ImageDemo from "./components/ImageDemo";
import Welcome_useColorScheme from "./components/Welcome_useColorScheme";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        {/* <Stack.Screen name="Menu" component={MenuScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Welcome_useColorScheme />
    //     {/* <WelcomeScreen /> */}
    //     {/* <MenuItems /> */}
    //     {/* <MenuItems_FlatList /> */}
    //     {/* <MenuItems_SectionList /> */}
    //     {/* <FeedBackForm /> */}
    //     {/* <LoginScreen /> */}
    //     {/* <LittleLemonFooter /> */}
    //     {/* <Pressable_Menu /> */}
    //     {/* <ImageDemo /> */}
    //   </View>
    // </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#495E57" },
});
