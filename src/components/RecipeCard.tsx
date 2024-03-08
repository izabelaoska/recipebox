import React from 'react'
import { RecipeCardProps } from '@/types/types'

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onBookmark,
  isBookmarked,
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-1/2 md:w-1/3 lg:w-1/4 px-2 pb-2 lg:px-4 lg:pb-4 box-border">
      <div className="card card-compact w-full h-full bg-base-100 shadow-lg rounded-2xl overflow-hidden">
        <figure className="w-full h-60 relative">
          <img
            src={recipe.image[0].url}
            alt={recipe.title}
            className=" absolute inset-0 w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          />
        </figure>
      </div>
      <div className="flex items-center justify-between text-xs w-full">
        <div className="p-2 overflow-hidden h-16 flex items-center">
          <h2 className="lg:text-sm sm:text-xs font-medium text-recipe-title">
            {recipe.title}
          </h2>
        </div>
        <button
          className="bg-button-bg hover:bg-button-bg-dark rounded-full p-2"
          onClick={onBookmark}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className={`w-4 h-4 ${isBookmarked ? 'fill-current text-white' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default RecipeCard
