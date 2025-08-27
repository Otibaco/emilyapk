import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Product {
  id: string
  title: string
  description: string
  price: {
    amount: number
    currency: string
    negotiable: boolean
  }
  images: {
    url: string
    alt: string
    isPrimary: boolean
  }[]
  categoryId: string
  subcategoryId: string
  sellerId: string
  location: {
    state: string
    city: string
    address: string
  }
  customDetails: Record<string, any>
  status: 'active' | 'sold' | 'inactive' | 'pending'
  condition: 'new' | 'used' | 'refurbished'
  views: number
  favorites: number
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  location: {
    state: string
    city: string
    address: string
  }
  profileImage?: string
  userType: 'buyer' | 'seller' | 'both'
  isVerified: boolean
  rating: number
  totalRatings: number
}

interface AppState {
  // User state
  user: User | null
  isAuthenticated: boolean

  // Products state
  products: Product[]
  featuredProducts: Product[]
  searchQuery: string
  selectedCategory: string | null
  selectedSubcategory: string | null

  // UI state
  isLoading: boolean
  error: string | null

  // Actions
  setUser: (user: User | null) => void
  setProducts: (products: Product[]) => void
  setFeaturedProducts: (products: Product[]) => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (categoryId: string | null) => void
  setSelectedSubcategory: (subcategoryId: string | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void

  // Product actions
  addProduct: (product: Product) => void
  updateProduct: (productId: string, updates: Partial<Product>) => void
  removeProduct: (productId: string) => void

  // Authentication actions
  login: (user: User) => void
  logout: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      products: [],
      featuredProducts: [],
      searchQuery: '',
      selectedCategory: null,
      selectedSubcategory: null,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user, // auto set auth state
        }),

      setProducts: (products) => set({ products }),
      setFeaturedProducts: (featuredProducts) => set({ featuredProducts }),
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
      setSelectedSubcategory: (selectedSubcategory) =>
        set({ selectedSubcategory }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      // Product actions
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),

      updateProduct: (productId, updates) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === productId ? { ...product, ...updates } : product
          ),
        })),

      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== productId),
        })),

      // Authentication actions
      login: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'emilyagros-store', // key in AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
