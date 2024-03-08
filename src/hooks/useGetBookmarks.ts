import { useState, useCallback } from 'react';
import { Recipe } from '@/types/types';

export const useGetBookmarks = (initialRecipes: Recipe[]) => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState<Recipe[]>(initialRecipes);

    const toggleDrawer = useCallback(() => {
        setDrawerOpen((prev) => !prev);
    }, []);

    const addRecipeToBookmarks = useCallback((recipeToAdd: Recipe) => {
        setBookmarkedRecipes((prevBookmarks) => {
            const isAlreadyAdded = prevBookmarks.some((recipe) => recipe.id === recipeToAdd.id);
            if (!isAlreadyAdded) {
                return [...prevBookmarks, recipeToAdd];
            } else {
                return prevBookmarks;
            }
        });
    }, []);

    const removeRecipeFromBookmarks = useCallback((recipeId: string) => {
        setBookmarkedRecipes((prevBookmarks) =>
            prevBookmarks.filter((recipe) => recipe.id !== recipeId),
        );
    }, []);

    const toggleBookmark = (recipe: Recipe) => {
        if (isRecipeBookmarked(recipe.id)) {
            removeRecipeFromBookmarks(recipe.id);
        } else {
            addRecipeToBookmarks(recipe);
        }
    };
    const isRecipeBookmarked = useCallback((recipeId: string) => {
        return bookmarkedRecipes.some((recipe) => recipe.id === recipeId);
    }, [bookmarkedRecipes]);

    const bookmarkCount = bookmarkedRecipes.length


    return {
        isDrawerOpen, bookmarkedRecipes, toggleDrawer, addRecipeToBookmarks, removeRecipeFromBookmarks, isRecipeBookmarked, toggleBookmark, bookmarkCount
    };
};