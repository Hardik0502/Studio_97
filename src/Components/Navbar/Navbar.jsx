import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const scrollCheck = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", scrollCheck)

    return () => {
      window.removeEventListener("scroll", scrollCheck)
    }
  }, [])

  return (
    <>
      <div
        className={`
          fixed
          left-1/2
          -translate-x-1/2
          z-50
          text-white
          transition-all
          duration-500
          w-full
          flex
          justify-center
          px-3 sm:px-0

          ${isScrolled ? "top-3 sm:top-4" : "top-4 sm:top-10"}
        `}
      >
        <div
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-500
            box-border

            ${
              isScrolled
                ? `
                    px-3 xs:px-4 sm:px-6
                    py-2
                    rounded-full
                    bg-black/20
                    backdrop-blur-lg
                    w-full sm:w-120 md:w-140
                    max-w-[calc(100vw-1.5rem)] sm:max-w-none
                  `
                : `
                    px-3 xs:px-4 sm:px-10 md:px-20
                    py-2
                    w-full
                  `
            }
          `}
        >
          {/* Logo Container - Clickable to Home with Pointer Cursor */}
          <Link
            to="/"
            className="cursor-pointer relative w-auto sm:w-20 md:w-25 h-7 overflow-hidden shrink-0 flex items-center pr-1 sm:pr-0 group"
            aria-label="Studio 97 Home"
          >
            {/* Show Studio 97 only on tablet/desktop (sm and up) when not scrolled */}
            <h1
              className={`
                hidden sm:block absolute
                font-[t5]
                uppercase
                text-lg md:text-xl
                transition-all
                duration-500
                whitespace-nowrap
                ${
                  isScrolled
                    ? "opacity-0 -translate-y-3"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              Studio 97
            </h1>

            {/* Always show S97 on mobile; transition it on sm and up with uniform height/baseline alignment */}
            <h1
              className={`
                font-[t5]
                uppercase
                text-sm xs:text-base sm:text-lg md:text-xl
                transition-all
                duration-500
                whitespace-nowrap
                flex items-baseline gap-[2px]
                sm:absolute
                ${
                  isScrolled
                    ? "sm:opacity-100 sm:translate-y-0"
                    : "sm:opacity-0 sm:translate-y-3"
                }
              `}
            >
              s97
            </h1>
          </Link>

          {/* Links Container */}
          <div className="flex gap-1.5 xs:gap-2 sm:gap-3.5 md:gap-4 uppercase text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] font-[t2] tracking-normal xs:tracking-wide sm:tracking-wider flex-nowrap shrink-0 items-center">
            <Link to="/" className="nav-link whitespace-nowrap">Home</Link>
            <Link to="/blogs" className="nav-link whitespace-nowrap">Blogs</Link>
            <Link to="/packages" className="nav-link whitespace-nowrap">Packages</Link>
            <Link to="/event" className="nav-link whitespace-nowrap">Event</Link>
            <Link to="/about" className="nav-link whitespace-nowrap">About</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar