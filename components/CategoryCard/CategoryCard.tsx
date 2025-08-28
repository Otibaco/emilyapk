// /CategoryCard.tsx
import { useRouter } from "expo-router";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
} from "react-native";

interface CategoryCardProps {
  image: string;
  name?: string;
  description?: string;
  onPress: () => void;
  href?: string; // ✅ Add href prop
  slug?: string; // ✅ Add slug prop
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  name,
  description,
  onPress,
  href,
  slug
}) => {

  const router = useRouter();
  console.log("CategoryCard slug:", slug);
  return (
    <TouchableOpacity
      className="flex-1 m-2 rounded-xl overflow-hidden h-52 p-2 bg-gray-200"
      activeOpacity={0.85}
      onPress={() => router.push(`/category/${slug}`)}  // ✅ navigate on press
    // onPress={() => router.push(`${href}`)}  // ✅ navigate on press
    >
      <ImageBackground
        source={{ uri: image.startsWith('/') ? image : `/${image}` }}
        className="flex-1 justify-end object-cover object-center"
        resizeMode="cover"
      > </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
