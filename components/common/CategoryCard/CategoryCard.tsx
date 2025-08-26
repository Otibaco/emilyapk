import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CategoryCardProps {
  image: string;
  name?: string;
  description?: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name, description, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-1 m-2 rounded-xl overflow-hidden h-32"
      activeOpacity={0.8}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: image.startsWith('/') ? image : `/${image}` }}
        className="flex-1 justify-end items-center"
        resizeMode="cover"
      >
        <Text className="bg-black bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded-b-xl w-full text-center">
          {name}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;