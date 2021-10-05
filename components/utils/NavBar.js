import React from 'react';
import Link from 'next/link'

// import Image from 'next/image';

// import Logo from '../../public/Montpelier_Vinyards_logo.svg'

const NavBar = (props) => {

    return (
        <React.Fragment>
            <div
                className="py-5 px-16 flex items-stretch"
            >
                <div className="w-1/3">
                    <img
                        src="./Montpelier_Vinyards_logo.svg"
                        alt="Montpelier Vineyards logo"
                    />
                </div>
                <span
                    className="text-xl self-center absolute right-16"
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
                                className="pl-10"
                            >Our Wines</a>
                        </Link>
                        <Link
                            href="/where-to-buy"
                        >
                            <a
                                className="pl-10"
                            >Where to Buy</a>
                        </Link>
                        <Link
                            href="/about"
                        >
                            <a
                                className="pl-10"
                            >About</a>
                        </Link>
                        <Link
                            href="/shop-now"
                        >
                            <a
                                className="pl-10"
                            >Shop Now</a>
                        </Link>
                </span>
            </div>
        </React.Fragment>
    )
}

export default NavBar