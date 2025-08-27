import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Category: {id}</Text>
    </View>
  );
}
