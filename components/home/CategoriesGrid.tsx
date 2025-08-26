// src/components/home/CategoriesGrid.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesGrid: React.FC = () => {
  const categories = [
    { id: '1', name: 'Seeds', icon: '🌱', count: 24 },
    { id: '2', name: 'Tools', icon: '🔧', count: 18 },
    { id: '3', name: 'Fertilizers', icon: '🧪', count: 12 },
    { id: '4', name: 'Equipment', icon: '🚜', count: 8 },
    { id: '5', name: 'Produce', icon: '🍅', count: 36 },
    { id: '6', name: 'Livestock', icon: '🐄', count: 15 },
    { id: '7', name: 'Irrigation', icon: '💦', count: 9 },
    { id: '8', name: 'More', icon: '⋯' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    // Navigate to category screen or filter products
    console.log('Category pressed:', categoryId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard 
            category={item} 
            onPress={() => handleCategoryPress(item.id)}
          />
        )}
        numColumns={4}
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  grid: {
    paddingHorizontal: theme.spacing.sm,
    justifyContent: 'space-between',
  },
});

export default CategoriesGrid;