import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  isFavorite?: boolean;
}

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  onFavoritePress 
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Icon 
            name={product.isFavorite ? "heart" : "heart-outline"} 
            size={20} 
            color={product.isFavorite ? theme.colors.error : theme.colors.textSecondary} 
          />
        </TouchableOpacity>
        
        {product.category && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          
          {product.rating !== undefined && (
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color={theme.colors.accent} />
              <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
            </View>
          )}
        </View>
        
        <TouchableOpacity style={styles.addToCartButton}>
          <Icon name="cart-plus" size={16} color={theme.colors.surface} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    margin: theme.spacing.xs,
    width: 160,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    position: 'relative',
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryBadge: {
    position: 'absolute',
    bottom: theme.spacing.xs,
    left: theme.spacing.xs,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
  },
  categoryText: {
    color: theme.colors.surface,
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: theme.spacing.sm,
  },
  name: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    fontWeight: '500',
    height: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  price: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
  },
  addToCartText: {
    color: theme.colors.surface,
    fontSize: 12,
    fontWeight: '500',
    marginLeft: theme.spacing.xs,
  },
});

export default ProductCard;