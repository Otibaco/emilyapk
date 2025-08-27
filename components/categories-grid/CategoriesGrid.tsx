import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { categories, Category } from '@/constants/categories';
import { useStore } from '@/store/useStore';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2; // 2 columns with padding

interface CategoriesGridProps {
  onCategoryPress?: (category: Category) => void;
}

export default function CategoriesGrid({ onCategoryPress }: CategoriesGridProps) {
  const { setSelectedCategory } = useStore();

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category.id);
    onCategoryPress?.(category);
  };

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const IconComponent = item.icon;
    const iconName = getIconName(item.slug);

    return (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() => handleCategoryPress(item)}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <IconComponent
            name={iconName}
            size={32}
            color="#4F46E5"
          />
        </View>
        
        <Text style={styles.categoryName} numberOfLines={2}>
          {item.name}
        </Text>
        
        <Text style={styles.subcategoryCount}>
          {item.subcategories.length} subcategories
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Browse Categories</Text>
      
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

// Helper function to get appropriate icon names for each category
function getIconName(slug: string): string {
  const iconMap: Record<string, string> = {
    'trending': 'trending-up',
    'livestock-pets': 'cow',
    'farm-equipment': 'tractor',
    'animal-accessories': 'pets',
    'animal-feed': 'grain',
    'animal-mating': 'heart',
    'agro-services': 'handshake',
    'animal-pharmacy': 'medical-bag',
    'horticulture': 'flower',
  };
  
  return iconMap[slug] || 'help-circle';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    marginTop: 8,
  },
  gridContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: ITEM_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 20,
  },
  subcategoryCount: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});