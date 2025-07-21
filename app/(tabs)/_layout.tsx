// app/tabs/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({

        tabBarActiveTintColor: "#2ecc71", // green color for active tab
        tabBarInactiveTintColor: "#333",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case "home":
              return <Ionicons name="home-outline" size={size} color={color} />;
            case "search":
              return <Feather name="search" size={size} color={color} />;
            case "post":
              return (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#2ecc71",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20, // lifts the icon a bit
                  }}
                >
                  <Ionicons name="add" size={28} color="white" />
                </View>
              );
            case "messages":
              return <Ionicons name="chatbubble-outline" size={size} color={color} />;
            case "profile":
              return <Ionicons name="person-outline" size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="post" options={{ title: "Post" }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
