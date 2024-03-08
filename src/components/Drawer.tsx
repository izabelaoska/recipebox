
import React from "react";
import { DrawerProps } from "@/types/types";


const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, bookmarkedRecipes, onRemoveBookmark }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
            <div className="drawer-content">
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={onClose}></label>
                {bookmarkedRecipes.length > 0 ?
                    (
                        <ul className="menu w-[25rem] min-h-full bg-drawer-bg text-base-content">
                            {bookmarkedRecipes.map((recipe) => (
                                <li key={recipe.id} className="flex flex-row items-center justify-between">
                                    <img src={recipe.image[0].url} alt={recipe.title} className="w-20 h-16 object-cover rounded-3xl" />
                                    <p className="text-white font-normal flex-1 text-xs">{recipe.title}</p>
                                    <button className="btn btn-xs mr-8 bg-[#555555] hover:bg-[#27272A] text-white border-none" onClick={() => onRemoveBookmark(recipe.id)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )
                    : (
                        <div className="flex flex-col items-center justify-center text-white p-4 w-[28rem] min-h-full bg-drawer-bg">
                            <div className="text-center pb-4">
                                <p>No bookmarked recipes!</p>
                            </div>
                            <div className="text-center">
                                <p>Browse to add them to your list.</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Drawer;