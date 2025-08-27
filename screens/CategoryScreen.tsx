import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ProductCard from '@/components/product-card/ProductCard';
import { useStore } from '@/store/useStore';
import { Category, SubCategory } from '@/constants/categories';
import { mockProducts } from '@/data/mockData';

interface CategoryScreenProps {
  route: any;
  navigation: any;
}

export default function CategoryScreen({ route, navigation }: CategoryScreenProps) {
  const { category }: { category: Category } = route.params;
  const { products, setProducts } = useStore();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    setProducts(mockProducts);
    // Filter products by category
    const categoryProducts = mockProducts.filter(
      product => product.categoryId === category.id
    );
    setFilteredProducts(categoryProducts);
  }, [category.id, setProducts]);

  useEffect(() => {
    // Filter by subcategory if selected
    if (selectedSubcategory) {
      const subcategoryProducts = mockProducts.filter(
        product =>
          product.categoryId === category.id &&
          product.subcategoryId === selectedSubcategory
      );
      setFilteredProducts(subcategoryProducts);
    } else {
      const categoryProducts = mockProducts.filter(
        product => product.categoryId === category.id
      );
      setFilteredProducts(categoryProducts);
    }
  }, [selectedSubcategory, category.id]);

  const handleSubcategoryPress = (subcategory: SubCategory) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategory.id ? null : subcategory.id
    );
  };

  const handleViewDetails = (product: any) => {
    navigation.navigate('ProductDetails', { product });
  };

  const handleContactSeller = (product: any) => {
    navigation.navigate('Chat', { product });
  };

  const renderSubcategory = ({ item }: { item: SubCategory }) => {
    const isSelected = selectedSubcategory === item.id;

    return (
      <TouchableOpacity
        className={`px-4 py-2 mr-3 rounded-full border ${
          isSelected
            ? 'bg-indigo-600 border-indigo-600'
            : 'bg-gray-100 border-gray-200'
        }`}
        onPress={() => handleSubcategoryPress(item)}
      >
        <Text
          className={`text-sm font-medium ${
            isSelected ? 'text-white' : 'text-gray-700'
          }`}
        >
          {item.name} ({item.productCount})
        </Text>
      </TouchableOpacity>
    );
  };

  const renderProduct = ({ item }: { item: any }) => (
    <View className="mb-4">
      <ProductCard
        product={item}
        onViewDetails={handleViewDetails}
        onContactSeller={handleContactSeller}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Category Header */}
      <View className="flex-row justify-between items-center px-4 py-4 bg-white border-b border-gray-200">
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-900 mb-1">
            {category.name}
          </Text>
          <Text className="text-sm text-gray-500">
            {filteredProducts.length} products available
          </Text>
        </View>

        <TouchableOpacity className="p-2">
          <MaterialIcons name="tune" size={24} color="#4F46E5" />
        </TouchableOpacity>
      </View>

      {/* Subcategories */}
      <View className="bg-white py-4 border-b border-gray-200">
        <Text className="text-base font-semibold text-gray-900 px-4 mb-3">
          Subcategories
        </Text>
        <FlatList
          data={category.subcategories}
          renderItem={renderSubcategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-16">
            <MaterialIcons name="inventory-2" size={64} color="#9CA3AF" />
            <Text className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              No products found
            </Text>
            <Text className="text-sm text-gray-500 text-center px-8">
              Try selecting a different subcategory or check back later
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
