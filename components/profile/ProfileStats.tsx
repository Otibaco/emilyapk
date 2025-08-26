import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const ProfileStats: React.FC = () => {
  const stats = [
    { label: 'Products', value: '24' },
    { label: 'Sales', value: '128' },
    { label: 'Reviews', value: '4.8' },
    { label: 'Following', value: '56' },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View 
          key={stat.label} 
          style={[
            styles.statItem,
            index < stats.length - 1 && styles.statItemWithBorder
          ]}
        >
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statItemWithBorder: {
    borderRightWidth: 1,
    borderRightColor: theme.colors.divider,
  },
  statValue: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
});

export default ProfileStats;