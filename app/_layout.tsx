import { Stack } from "expo-router";
import { TailwindProvider } from "tailwindcss-react-native";

export default function RootLayout() {
  return (
    <TailwindProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TailwindProvider>
  );
}