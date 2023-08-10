import { useState, useEffect } from "react";
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
import menuItems from "./menuItems.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

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
// Demo of parsing a JSON file and rendering the items onto the screen.
export default App = () => {
  const { menu } = menuItems;

  const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.menuText}>{name}</Text>
      <Text style={styles.menuText}>{"$" + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon Menu</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
//Demo of Drawer Navigation

// const Drawer = createDrawerNavigator();

// export default function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const getMenu = async () => {
//     try {
//       const response = await fetch(
//         "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
//       );
//       if (!response.ok) {
//         throw new Error(`Fetch failed with status: ${response.status}`);
//       }
//       const json = await response.json();
//       setData(json.menu);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(!loading);
//     }
//   };

//   useEffect(() => {
//     getMenu();
//   }, []);

//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <LittleLemonHeader />
//           <MenuItems_FlatList data={data} />
//           {/* <Drawer.Navigator
//             initialRouteName="Login"
//             // useLegacyImplementation ---remove this , since this is throwing an error
//             // screenOptions={{ drawerPosition: "right" }} this option is given if we want to implement the drawer from the right
//           >
//             <Drawer.Screen name="Welcome" component={WelcomeScreen} />
//             <Drawer.Screen name="Login" component={LoginScreen} />
//           </Drawer.Navigator> */}
//         </View>
//         <View style={styles.footerContainer}>
//           <LittleLemonFooter />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }

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
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuText: {
    color: "#F4CE14",
    fontSize: 22,
  },
  headerText: {
    color: "#F4CE14",
    fontSize: 30,
    textAlign: "center",
  },
  footerContainer: { backgroundColor: "#333333" },
});
