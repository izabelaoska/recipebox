export interface Image {
  height: string
  id: string
  title: string
  url: string
  width: string
}

export interface Recipe {
  id: string
  image: Image[]
  title: string
}

export interface RecipeCardProps {
  recipe: Recipe
  onBookmark: () => void
  isBookmarked: boolean
}

export interface NavbarProps {
  onToggleDrawer: () => void
  bookmarkCount: number
}

export type MainPageProps = {
  recipes: Recipe[]
}
export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  bookmarkedRecipes: Recipe[]
  onRemoveBookmark: (recipeId: string) => void
}
