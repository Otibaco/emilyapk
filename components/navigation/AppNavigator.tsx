// // navigation/AppNavigator.tsx
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';
// import PostScreen from '../screens/PostScreen';
// import MessagesScreen from '../screens/MessagesScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { theme } from '../styles/theme';

// const Tab = createBottomTabNavigator();

// // Simple custom tab bar without React.Fragment issues
// const CustomTabBar = () => null;

// const AppNavigator: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarActiveTintColor: theme.colors.primary,
//           tabBarInactiveTintColor: theme.colors.textSecondary,
//           tabBarStyle: {
//             backgroundColor: theme.colors.surface,
//             borderTopWidth: 1,
//             borderTopColor: theme.colors.divider,
//             elevation: 8,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: -2 },
//             shadowOpacity: 0.1,
//             shadowRadius: 4,
//           },
//         }}
//       >
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Search" 
//           component={SearchScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="magnify" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Post" 
//           component={PostScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="plus-box" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Messages" 
//           component={MessagesScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="message-text" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Profile" 
//           component={ProfileScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="account" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;