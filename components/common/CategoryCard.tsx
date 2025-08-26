// src/components/common/CategoryCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

interface CategoryCardProps {
  category: Category;
  onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  // Map icon names to emojis or use the provided icon string
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, string> = {
      '🌱': '🌱',
      '🔧': '🔧',
      '🧪': '🧪',
      '🚜': '🚜',
      '🍅': '🍅',
      '🐄': '🐄',
      '💦': '💦',
      '⋯': '⋯',
      'seeds': '🌱',
      'tools': '🔧',
      'fertilizers': '🧪',
      'equipment': '🚜',
      'produce': '🍅',
      'livestock': '🐄',
      'irrigation': '💦',
      'more': '⋯'
    };

    return iconMap[iconName] || '🌱';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{getIcon(category.icon)}</Text>
      </View>
      <Text style={styles.name} numberOfLines={1}>{category.name}</Text>
      {category.count !== undefined && (
        <Text style={styles.count}>{category.count} items</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    margin: theme.spacing.xs,
    width: 100,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  icon: {
    fontSize: 24,
  },
  name: {
    ...theme.typography.body,
    fontWeight: '500',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  count: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
});

export default CategoryCard;