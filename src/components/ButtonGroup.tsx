import React from 'react'

type ButtonProps = {
  label: string
}

const buttons: ButtonProps[] = [
  { label: 'New Recipes' },
  { label: 'Trending' },
  { label: 'On Your Planner' },
]

export const ButtonGroup: React.FC = () => {
  return (
    <div className="flex justify-center items-start space-x-6 px-16 py-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="btn btn-xs sm:btn-md md:btn-md rounded-3xl bg-button-bg text-white hover:bg-button-bg-dark font-normal"
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}
