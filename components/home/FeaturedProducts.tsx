import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';
import ProductCard from '../common/ProductCard';

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: '1',
      name: 'Organic Tomato Seeds - Heirloom Variety',
      price: 4.99,
      image: 'https://via.placeholder.com/150?text=Tomato+Seeds',
      category: 'Seeds',
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Premium Organic Fertilizer 5kg',
      price: 24.99,
      image: 'https://via.placeholder.com/150?text=Fertilizer',
      category: 'Fertilizers',
      rating: 4.2,
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Professional Garden Tool Set',
      price: 39.99,
      image: 'https://via.placeholder.com/150?text=Tool+Set',
      category: 'Tools',
      rating: 4.7,
      isFavorite: false,
    },
    {
      id: '4',
      name: 'Large Capacity Watering Can',
      price: 12.99,
      image: 'https://via.placeholder.com/150?text=Watering+Can',
      category: 'Tools',
      rating: 4.0,
      isFavorite: false,
    },
    {
      id: '5',
      name: 'Organic Potato Seeds - Early Variety',
      price: 3.99,
      image: 'https://via.placeholder.com/150?text=Potato+Seeds',
      category: 'Seeds',
      rating: 4.3,
      isFavorite: false,
    },
    {
      id: '6',
      name: 'Plant Growth Stimulator',
      price: 15.99,
      image: 'https://via.placeholder.com/150?text=Growth+Stimulator',
      category: 'Fertilizers',
      rating: 4.1,
      isFavorite: true,
    },
  ]);

  const handleFavoritePress = (productId: string) => {
    setFeaturedProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, isFavorite: !product.isFavorite } 
          : product
      )
    );
  };

  const handleProductPress = (productId: string) => {
    // Navigate to product detail screen
    console.log('Product pressed:', productId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={featuredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => handleProductPress(item.id)}
            onFavoritePress={() => handleFavoritePress(item.id)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  listContent: {
    paddingHorizontal: theme.spacing.sm,
  },
});

export default FeaturedProducts;