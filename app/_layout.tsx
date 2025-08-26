import { Stack } from "expo-router";
import "./globals.css"

export default function RootLayout() {
  return (
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}
    />)

}