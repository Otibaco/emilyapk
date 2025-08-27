import { categories } from "./categories";

export interface CategoryListItem {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

// Flatten categories into a simple array
export const CategoryList: CategoryListItem[] = categories.map((cat) => ({
  id: cat.id,
  name: cat.name,
  description: cat.description,
  image: cat.image,
  href: cat.href,
}));
