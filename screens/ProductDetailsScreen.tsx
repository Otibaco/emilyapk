import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Product } from '../store/useStore';

interface ProductDetailsScreenProps {
  route: any;
  navigation: any;
}

export default function ProductDetailsScreen({
  route,
  navigation,
}: ProductDetailsScreenProps) {
  const { product }: { product: Product } = route.params;

  const formatPrice = (amount: number, currency: string) => {
    return `${currency === 'NGN' ? '₦' : currency} ${amount.toLocaleString()}`;
  };

  const handleContactSeller = () => {
    navigation.navigate('Chat', { product });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View className="relative h-72">
          {product.images.length > 0 ? (
            <Image
              source={{ uri: product.images[0].url }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-full bg-gray-100 items-center justify-center">
              <MaterialIcons name="image" size={64} color="#9CA3AF" />
            </View>
          )}

          {/* Overlay (Favorite Button) */}
          <View className="absolute top-4 right-4">
            <TouchableOpacity className="w-10 h-10 rounded-full bg-black/50 items-center justify-center">
              <MaterialIcons name="favorite-border" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Info */}
        <View className="p-4">
          {/* Title + Price */}
          <View className="mb-4">
            <Text className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-3xl font-bold text-emerald-600 mr-3">
                {formatPrice(product.price.amount, product.price.currency)}
              </Text>
              {product.price.negotiable && (
                <Text className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  Negotiable
                </Text>
              )}
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row justify-around py-4 border-y border-gray-200 mb-4">
            <View className="flex-row items-center">
              <MaterialIcons name="visibility" size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-500">
                {product.views} views
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialIcons name="favorite-border" size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-500">
                {product.favorites} favorites
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialIcons name="schedule" size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-500">
                {new Date(product.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>

          {/* Location */}
          <View className="flex-row items-center mb-6">
            <MaterialIcons name="location-on" size={20} color="#EF4444" />
            <Text className="ml-2 text-base text-gray-700">
              {product.location.city}, {product.location.state}
            </Text>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </Text>
            <Text className="text-base text-gray-700 leading-6">
              {product.description}
            </Text>
          </View>

          {/* Custom Details */}
          {product.customDetails &&
            Object.keys(product.customDetails).length > 0 && (
              <View className="mb-6">
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  Product Details
                </Text>
                <View className="bg-gray-50 rounded-lg p-4">
                  {Object.entries(product.customDetails).map(([key, value]) => (
                    <View
                      key={key}
                      className="flex-row justify-between py-2 border-b border-gray-200 last:border-0"
                    >
                      <Text className="flex-1 text-sm font-medium text-gray-800">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </Text>
                      <Text className="flex-1 text-sm text-gray-600 text-right">
                        {String(value)}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <View className="mb-6">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Tags
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <View
                    key={index}
                    className="bg-indigo-50 px-3 py-1 rounded-full"
                  >
                    <Text className="text-xs font-medium text-indigo-600">
                      #{tag}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="flex-row p-4 border-t border-gray-200 bg-white">
        <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 mr-2 border border-indigo-600 rounded-lg">
          <MaterialIcons name="share" size={20} color="#4F46E5" />
          <Text className="ml-2 text-base font-semibold text-indigo-600">
            Share
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-[2] flex-row items-center justify-center py-3 bg-indigo-600 rounded-lg ml-2"
          onPress={handleContactSeller}
        >
          <MaterialIcons name="message" size={20} color="#FFFFFF" />
          <Text className="ml-2 text-base font-semibold text-white">
            Contact Seller
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
