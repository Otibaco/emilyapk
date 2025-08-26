import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false
        }} />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          headerShown: false
        }} />
      <Tabs.Screen
        name='post'
        options={{
          title: "Post",
          headerShown: false
        }} />
      <Tabs.Screen
        name='Inbox'
        options={{
          title: "Message",
          headerShown: false
        }} />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Me",
          headerShown: false
        }} />
    </Tabs>
  )
}