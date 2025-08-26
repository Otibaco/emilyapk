import { Stack } from "expo-router";
import "./globals.css"

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // <--- THIS removes the (tabs) app bar at the top
      }}
    />

  )

}