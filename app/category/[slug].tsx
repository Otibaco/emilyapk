import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function CategoryScreen() {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Cat-Category: {slug}</Text>
    </View>
  );
}
