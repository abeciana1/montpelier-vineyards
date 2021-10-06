import React from 'react';
import Link from 'next/link'

import { MenuIcon } from '@heroicons/react/solid'

// import Image from 'next/image';

// import Logo from '../../public/Montpelier_Vinyards_logo.svg'

const NavBar = (props) => {

    return (
        <React.Fragment>
            <div
                className="py-5 px-5 lg:px-16 flex items-stretch content-center"
            >
                <div className="w-8/12 md:w-1/4 md:w-1/3">
                    <img
                        src="./Montpelier_Vinyards_logo.svg"
                        alt="Montpelier Vineyards logo"
                    />
                </div>
                <span
                    className="md:text-lg lg:text-xl text-marv self-center absolute md:right-5 lg:right-16 hidden md:block"
                >
                        <Link
                            href="/"
                        >
                            <a>Home</a>
                        </Link>
                        <Link
                            href="/our-wines"
                        >
                            <a
                                className="pl-5 lg:pl-10"
                            >Our Wines</a>
                        </Link>
                        <Link
                            href="/where-to-buy"
                        >
                            <a
                                className="pl-5 lg:pl-10"
                            >Where to Buy</a>
                        </Link>
                        <Link
                            href="/about"
                        >
                            <a
                                className="pl-5 lg:pl-10"
                            >About</a>
                        </Link>
                        <Link
                            href="/shop-now"
                        >
                            <a
                                className="pl-5 lg:pl-10"
                            >Shop Now</a>
                        </Link>
                </span>
                <span
                    className="block md:hidden absolute right-5 self-center"
                >
                    <MenuIcon
                        className="text-marv w-8 h-8"
                    />
                </span>
            </div>
        </React.Fragment>
    )
}

export default NavBar