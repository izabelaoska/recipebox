import { GetStaticProps } from "next"
import { getRecipes } from "@/services/recipeService"
import RecipeCard from "@/components/RecipeCard"
import { MainPageProps } from "@/types/types"
import { Navbar } from "@/components/Navbar"
import { ButtonGroup } from "@/components/ButtonGroup"
import Drawer from "@/components/Drawer"
import { useGetBookmarks } from "@/hooks/useGetBookmarks"


export const getStaticProps: GetStaticProps = async () => {
  try {
    const recipes = await getRecipes()
    return { props: { recipes } };
  } catch (error) {
    console.error(error)
    return { props: { error: 'Failed to load recipes.' } };
  }
}

const MainPage: React.FC<MainPageProps> = ({ recipes }) => {
  const {
    isDrawerOpen, bookmarkedRecipes, toggleDrawer, addRecipeToBookmarks, removeRecipeFromBookmarks, isRecipeBookmarked, bookmarkCount
  } = useGetBookmarks([])

  return (
    <>
      <Navbar onToggleDrawer={toggleDrawer} bookmarkCount={bookmarkCount} />
      <div className="flex flex-wrap bg-slate-100 pb-4">
        <ButtonGroup />
        <div className="flex flex-wrap justify-center">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onBookmark={() => addRecipeToBookmarks(recipe)} isBookmarked={isRecipeBookmarked(recipe.id)} />
          ))}
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} bookmarkedRecipes={bookmarkedRecipes} onRemoveBookmark={removeRecipeFromBookmarks} />
    </>
  );
};

export default MainPage;