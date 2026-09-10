import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "rgb(93, 0, 7)",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
<<<<<<< HEAD
          borderBottomColor: "rgb(250, 245, 245)",
=======
          borderBottomColor: "rgb(37, 6, 6)",
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
        },
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 18,
<<<<<<< HEAD
          color: "rgb(255, 253, 253)",
=======
          color: "rgb(254, 248, 248)",
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
        },
        tabBarActiveTintColor: "#8f0000",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
<<<<<<< HEAD
          backgroundColor: "rgb(0, 0, 0)",
=======
          backgroundColor: "rgb(9, 9, 94)",
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
          borderTopWidth: 1,
          borderTopColor: "#ffffff",
          height: Platform.OS === "ios" ? 88 : 64,
          paddingBottom: Platform.OS === "ios" ? 30 : 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "link" : "eye"}
              size={24}
              color={color}
            />
          ),
        }}
      />    
      <Tabs.Screen
        name="filme"
        options={{
<<<<<<< HEAD
          title: "Filmes",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
              link={"/filme"
                
              }
=======
          title: "TITULO FILME",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
>>>>>>> 866e24725a84234383018a0cd1f4d22c6efd2041
            />
          ),
        }}
      />        
       
    </Tabs>
  );
}
