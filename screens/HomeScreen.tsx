// screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ProductCard from '@/components/product-card/ProductCard';
import CategoriesGrid from '@/components/categories-grid/CategoriesGrid';
import { mockProducts } from '@/data/mockData';
import { CategoryListItem } from '@/constants/CategoryList';

export default function HomeScreen() {
 const handleCategoryPress = (category: CategoryListItem) => {
  console.log("Category pressed:", category.name);
};

  const handleViewDetails = (product: any) => {
    console.log("View details for:", product.title);
  };

  const handleContactSeller = (product: any) => {
    console.log("Contact seller for:", product.title);
  };

  const handleSearchPress = () => {
    console.log("Navigate to search screen");
  };

  const renderFeaturedProduct = ({ item }: { item: any }) => (
    <View className="mr-4">
      <ProductCard
        product={item}
        onViewDetails={handleViewDetails}
        onContactSeller={handleContactSeller}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 py-4">
          <View>
            <Text className="text-sm text-gray-500">Welcome to</Text>
            <Text className="text-xl font-bold text-gray-900">
              EmilyAgros Marketplace
            </Text>
          </View>
          <TouchableOpacity className="p-1">
            <MaterialIcons name="account-circle" size={32} color="#4F46E5" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          className="flex-row items-center bg-white mx-4 mb-5 px-4 py-3 rounded-xl shadow-sm"
          onPress={handleSearchPress}
        >
          <MaterialIcons name="search" size={20} color="#6B7280" />
          <Text className="flex-1 ml-3 text-base text-gray-500">
            Search for products, categories...
          </Text>
          <MaterialIcons name="filter-list" size={20} color="#6B7280" />
        </TouchableOpacity>

        {/* Quick Stats */}
        <View className="flex-row px-4 mb-6 space-x-3">
          <View className="flex-1 bg-white p-4 rounded-xl items-center shadow-sm">
            <Text className="text-lg font-bold text-green-600 mb-1">1,234</Text>
            <Text className="text-xs text-gray-500 text-center">
              Active Products
            </Text>
          </View>
          <View className="flex-1 bg-white p-4 rounded-xl items-center shadow-sm">
            <Text className="text-lg font-bold text-green-600 mb-1">567</Text>
            <Text className="text-xs text-gray-500 text-center">
              Verified Sellers
            </Text>
          </View>
          <View className="flex-1 bg-white p-4 rounded-xl items-center shadow-sm">
            <Text className="text-lg font-bold text-green-600 mb-1">89</Text>
            <Text className="text-xs text-gray-500 text-center">
              Categories
            </Text>
          </View>
        </View>

        {/* Featured Products */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center px-4 mb-4">
            <Text className="text-xl font-bold text-gray-900">
              Featured Products
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-green-600">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={mockProducts}
            renderItem={renderFeaturedProduct}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
          />
        </View>

        {/* Categories Grid */}
        <CategoriesGrid onCategoryPress={handleCategoryPress} />
      </ScrollView>
    </SafeAreaView>
  );
}
