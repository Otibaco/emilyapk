// screens/HomeScreen.tsx
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href="/category/animal-pharmacy">Animal Pharmacy</Link>
      <Link href="/category/animal-feed">Animal Feed</Link>

    </View>
  );
}
