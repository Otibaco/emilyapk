// app/tabs/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { View } from "react-native";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2ecc71", // green color for active tab
        tabBarInactiveTintColor: "#333",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 80,
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
                <View className="w-[50px] h-[50px] rounded-full bg-green-500 justify-center items-center mb-[25px]"              >
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
      <Tabs.Screen name="home" options={{ title: "Home" , headerShown: false }} />
      <Tabs.Screen name="search" options={{ title: "Search" , headerShown: false }} />
      <Tabs.Screen name="post" options={{ title: "Post" , headerShown: false }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" , headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" , headerShown: false }} />
    </Tabs>
  );
}
