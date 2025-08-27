import { CategoryList, CategoryListItem } from "@/constants/CategoryList";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

interface CategoriesGridProps {
  onCategoryPress?: (category: CategoryListItem) => void;
}

export default function CategoriesGrid({ onCategoryPress }: CategoriesGridProps) {
  const handleCategoryPress = (category: CategoryListItem) => {
    onCategoryPress?.(category);
  };

  const renderCategoryItem = ({ item }: { item: CategoryListItem }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategoryPress(item)}
        activeOpacity={0.85}
        className="flex-1 m-2 h-56 p-2 rounded-2xl overflow-hidden shadow-md bg-white"
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          className="h-full w-full"
        />
        <View className="hidden p-3">
          <Text className="text-lg font-semibold text-gray-900">
            {item.name}
          </Text>
          <Text
            className="text-sm text-gray-600 mt-1"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="px-4 mt-2">
      <Text className="text-2xl font-bold text-gray-900 mb-4">
        Browse Categories
      </Text>

      <FlatList
        data={CategoryList}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}
