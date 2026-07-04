import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Navbar = () => {

    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {

        const scrollcheck = () => {
            if (window.scrollY > 50) {
                setisScrolled(true);
            } else {
                setisScrolled(false);
            }
        }

        window.addEventListener("scroll", scrollcheck);

        return () => {
            window.removeEventListener("scroll", scrollcheck);
        }

    }, [])



    return (
        <>
            <div className={`
                    fixed
                    left-1/2
                    -translate-x-1/2
                    z-50
                    text-white
                    transition-all
                    duration-500

                    ${isScrolled
                    ? "top-4"
                    : "top-10"
                }
                `}
            >
                <div
                    className={`
                        flex
                        items-center
                        justify-between
                        transition-all
                        duration-500

                        ${isScrolled
                            ? `
                            px-3
                            py-2
                            rounded-full
                            bg-black/40
                            backdrop-blur-lg
                            w-108
                            `
                            : `
                            px-20
                            py-2
                            w-screen
                            `
                        }
                    `}
                >

                    <div className="relative w-25 h-7 overflow-hidden">
                        <h1
                            className={`
                                    absolute
                                    font-[t5]
                                    uppercase
                                    text-xl
                                    transition-all
                                    duration-500
                                    ${isScrolled
                                    ? "opacity-0 -translate-y-3"
                                    : "opacity-100 translate-y-0"}
                                     `}
                                     >
                            Studio 97
                        </h1>

                        <h1
                            className={`
                                    absolute
                                    font-[t5]
                                    uppercase
                                    text-xl
                                    transition-all
                                    duration-500                                    
                                    ${isScrolled
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-3"}
                                `}
                                >
                            S97
                        </h1>
                    </div>



                    <div className=' flex gap-1 uppercase text-[13px] font-[t2] ' >
                        <Link to="/" className="nav-link" >  Home     </Link>
                        <Link to="/blogs" className="nav-link"> Blogs </Link>
                        <Link to="/packages" className="nav-link" > Packages </Link>
                        <Link to="/help" className="nav-link"> Help </Link>
                        <Link to="/about" className="nav-link"> About </Link>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Navbar
