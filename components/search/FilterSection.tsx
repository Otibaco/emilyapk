import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FilterSection: React.FC = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const priceRanges = [
    { id: '0-10', label: 'Under $10' },
    { id: '10-25', label: '$10 - $25' },
    { id: '25-50', label: '$25 - $50' },
    { id: '50+', label: 'Over $50' },
  ];

  const ratings = [4, 3, 2, 1];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      
      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>Price Range</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {priceRanges.map((range) => (
            <TouchableOpacity
              key={range.id}
              style={[
                styles.filterPill,
                selectedPriceRange === range.id && styles.activeFilterPill
              ]}
              onPress={() => setSelectedPriceRange(
                selectedPriceRange === range.id ? '' : range.id
              )}
            >
              <Text
                style={[
                  styles.filterPillText,
                  selectedPriceRange === range.id && styles.activeFilterPillText
                ]}
              >
                {range.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>Minimum Rating</Text>
        <View style={styles.ratingContainer}>
          {ratings.map((rating) => (
            <TouchableOpacity
              key={rating}
              style={styles.ratingButton}
              onPress={() => setSelectedRating(
                selectedRating === rating ? 0 : rating
              )}
            >
              <Icon 
                name="star" 
                size={20} 
                color={selectedRating >= rating ? theme.colors.accent : theme.colors.divider} 
              />
              <Text style={styles.ratingText}>& Up</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.filterGroup}>
        <Text style={styles.filterLabel}>Sort By</Text>
        <View style={styles.sortOptions}>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Most Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Price: Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Price: High to Low</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  title: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  filterGroup: {
    marginBottom: theme.spacing.lg,
  },
  filterLabel: {
    ...theme.typography.body,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  filterPill: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.background,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  activeFilterPill: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterPillText: {
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  activeFilterPillText: {
    color: theme.colors.surface,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.lg,
  },
  ratingText: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.textSecondary,
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sortOption: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.background,
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  sortOptionText: {
    color: theme.colors.textSecondary,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
  },
  resetButtonText: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
  applyButton: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
  },
  applyButtonText: {
    color: theme.colors.surface,
    fontWeight: '500',
  },
});

export default FilterSection;