import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Product } from '@/store/useStore';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 2 columns with padding

interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
    onContactSeller: (product: Product) => void;
}

export default function ProductCard({
    product,
    onViewDetails,
    onContactSeller,
}: ProductCardProps) {
    const primaryImage =
        product.images.find(img => img.isPrimary) || product.images[0];

    const formatPrice = (amount: number, currency: string) => {
        return `${currency === 'NGN' ? '₦' : currency} ${amount.toLocaleString()}`;
    };

    return (
        <View
            style={{ width: CARD_WIDTH }}
            className="bg-white rounded-xl mb-4 border border-gray-100 shadow-sm"
        >
            {/* Product Image */}
            <View className="relative h-36 rounded-t-xl overflow-hidden">
                {primaryImage ? (
                    <Image
                        source={{ uri: primaryImage.url }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                ) : (
                    <View className="w-full h-full bg-gray-100 items-center justify-center">
                        <MaterialIcons name="image" size={40} color="#9CA3AF" />
                    </View>
                )}

                {/* Condition Badge */}
                <View
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded ${product.condition === 'new'
                            ? 'bg-emerald-500'
                            : product.condition === 'used'
                                ? 'bg-amber-500'
                                : product.condition === 'refurbished'
                                    ? 'bg-blue-500'
                                    : 'bg-gray-500'
                        }`}
                >
                    <Text className="text-white text-[10px] font-semibold">
                        {product.condition.toUpperCase()}
                    </Text>
                </View>
            </View>

            {/* Product Info */}
            <View className="p-3">
                <Text
                    className="text-gray-900 text-sm font-semibold mb-1 leading-5"
                    numberOfLines={2}
                >
                    {product.title}
                </Text>

                <View className="flex-row items-center mb-1.5">
                    <Text className="text-emerald-600 font-bold text-base mr-2">
                        {formatPrice(product.price.amount, product.price.currency)}
                    </Text>
                    {product.price.negotiable && (
                        <Text className="text-gray-500 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">
                            Negotiable
                        </Text>
                    )}
                </View>

                <View className="flex-row items-center mb-2">
                    <MaterialIcons name="location-on" size={14} color="#6B7280" />
                    <Text className="text-gray-500 text-xs ml-1 flex-1" numberOfLines={1}>
                        {product.location.city}, {product.location.state}
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row items-center">
                        <MaterialIcons name="visibility" size={14} color="#6B7280" />
                        <Text className="text-gray-500 text-xs ml-1">
                            {product.views}
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialIcons name="favorite-border" size={14} color="#6B7280" />
                        <Text className="text-gray-500 text-xs ml-1">
                            {product.favorites}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row px-3 pb-3 pt-0 space-x-2">
                <TouchableOpacity
                    className="flex-1 py-2 rounded-md bg-green-600 border border-gray-300 items-center justify-center"
                    onPress={() => onViewDetails(product)}
                    activeOpacity={0.8}
                >
                    <Text className="text-white  text-xs font-semibold">
                        View Details
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-1 py-2 rounded-md bg-indigo-600 flex-row items-center justify-center space-x-1"
                    onPress={() => onContactSeller(product)}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="message" size={16} color="#FFFFFF" />
                    <Text className="text-white text-xs font-semibold">Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
