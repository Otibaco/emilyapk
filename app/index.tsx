import { Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href="/(tabs)/home" />

    // <View className="flex-1 items-center justify-center ">
    //   <Text className="text-green-500 text-2xl font-bold">Welcome.</Text>
    // </View>
  );
}