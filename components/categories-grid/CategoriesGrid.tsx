// /CategoriesGrid.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoryCard from "../CategoryCard/CategoryCard";
import { CategoryListItem } from "@/constants/CategoryList";

interface CategoriesGridProps {
  categories: CategoryListItem[];
  onCategoryPress?: (category: CategoryListItem) => void;
}

export default function CategoriesGrid({
  categories,
  onCategoryPress,
}: CategoriesGridProps) {
  const renderCategoryItem = ({ item }: { item: CategoryListItem }) => (
    <CategoryCard
      image={item.image}
      name={item.name}
      description={item.description}
      onPress={() => onCategoryPress?.(item)} // ✅ Pass the full object, not just href
    />
  );

  return (
    <View className="px-4 mt-2">
      <Text className="text-2xl font-bold text-gray-900 mb-4">
        Browse Categories
      </Text>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}
