// /agro-chemicals/AgroChemicalPage.tsx
"use client"import React, { useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import SubcategoriesGrid from "@/components/SubCategoriesGrid/SubcategoriesGrid"
import SubcategoriesProducts from "@/components/SubcategoriesProducts/SubcategoriesProducts"
import { SubcategoryDTO } from "@/controllers/categories"

interface AgroChemicalPageProps {
  subcategories: SubcategoryDTO[]
}

export default function AgroChemicalPage({ subcategories }: AgroChemicalPageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories[0]?.subcategorySlug)

  // Map DTO to Grid's Subcategory type
  const gridSubcategories = subcategories.map((subcat) => ({
    _id: subcat._id.toString(),
    name: subcat.name,
    slug: subcat.subcategorySlug,
    image: subcat.image,
    description: subcat.description,
    productCount: subcat.productCount,
  }))

  return (
    <ScrollView style={styles.container}>
      {/* Subcategories Grid */}
      <SubcategoriesGrid
        subcategories={gridSubcategories}
        selectedSlug={selectedSubcategory}
        onSelect={setSelectedSubcategory}
      />

      {/* Products Grid */}
      {selectedSubcategory && (
        <SubcategoriesProducts subcategorySlug={selectedSubcategory} />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  }})