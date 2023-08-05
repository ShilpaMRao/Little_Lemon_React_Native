import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
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
// imports required for Tab Navigation
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Tab = createBottomTabNavigator();
//----------------------------------------------
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("C:/Users/Admin/Shilpa/Coursera/Little_Lemon_ReactNative/images/Little-Lemon-Logo.png")}
      style={{
        height: 40,
        width: 100,
        resizeMode: "contain",
        alignSelf: "center",
      }}
    />
  );
}

//Demo of Drawer Navigation

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator
            initialRouteName="Login"
            // useLegacyImplementation ---remove this , since this is throwing an error
            // screenOptions={{ drawerPosition: "right" }} this option is given if we want to implement the drawer from the right
          >
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

// Demo of Tab Navigation
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Welcome") {
//               iconName = focused
//                 ? "ios-information-circle"
//                 : "ios-information-circle-outline";
//             } else if (route.name === "Menu") {
//               iconName = "ios-list";
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: "tomato",
//           tabBarInactiveTintColor: "gray",
//         })}
//       >
//         <Tab.Screen name="Welcome" component={WelcomeScreen} />
//         <Tab.Screen name="Menu" component={MenuItems_SectionList} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// Demo of Stack Navigation
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{
//           headerStyle: { backgroundColor: "#333333" },
//           headerTintColor: "#fff",
//           headerTitleStyle: { fontWeight: "bold" },
//         }}
//       >
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ title: "Login" }}
//         />
//         <Stack.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             title: "Home",
//             headerTitle: (props) => <LogoTitle {...props} />,
//           }}
//         />
//         <Stack.Screen name="Menu" component={MenuItems_SectionList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     // <>
//     //   <View style={styles.container}>
//     //     <LittleLemonHeader />
//     //     <Welcome_useColorScheme />
//     //     {/* <WelcomeScreen /> */}
//     //     {/* <MenuItems /> */}
//     //     {/* <MenuItems_FlatList /> */}
//     //     {/* <MenuItems_SectionList /> */}
//     //     {/* <FeedBackForm /> */}
//     //     {/* <LoginScreen /> */}
//     //     {/* <LittleLemonFooter /> */}
//     //     {/* <Pressable_Menu /> */}
//     //     {/* <ImageDemo /> */}
//     //   </View>
//     // </>
//   );
// }

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#495E57" },
  footerContainer: { backgroundColor: "#333333" },
});
