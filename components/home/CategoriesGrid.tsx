import React from 'react';
import { View, FlatList } from 'react-native';
import { categories } from '../../constants/categories';
import CategoryCard from '../common/CategoryCard/CategoryCard';

const CategoriesGrid: React.FC = () => {
  const handleCategoryPress = (href: string) => {
    // Navigate to category screen or filter products
    console.log('Category href:', href);
    // You can use your navigation logic here, e.g. navigation.navigate(href)
  };

  return (
    <View className="mb-4">
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard 
            image={item.image}
            onPress={() => handleCategoryPress(item.href)}
            name={item.name}
            description={item.description}
          />
        )}
        numColumns={4}
        contentContainerClassName="px-2 justify-between"
        scrollEnabled={false}
      />
    </View>
  );
};

export default CategoriesGrid;