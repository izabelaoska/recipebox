import React from 'react'
import { NavbarProps } from '@/types/types'

export const Navbar: React.FC<NavbarProps> = ({
  onToggleDrawer,
  bookmarkCount,
}) => {
  return (
    <>
      <div className="navbar bg-base-100 py-8">
        <div className="flex justify-between items-center w-full max-w-8xl mx-auto px-4">
          <div className="w-6 h-6 invisible" />
          <div className="flex justify-center font-semibold sm:text-xl md:text-3xl lg:text-4xl tracking-custom text-main-title">
            RECIPEBOX
          </div>
          <div className="indicator">
            <div className="flex justify-end pr-4 relative">
              <button onClick={onToggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  fill="#3F3F46"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {bookmarkCount > 0 && (
                <span className="absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 badge badge-primary">
                  {bookmarkCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
