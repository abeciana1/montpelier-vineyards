import React, {Fragment} from 'react';
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

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
                    className="block md:hidden absolute right-5 self-center focus:outline-none"
                >
                    <Popover
                        className="relative"
                    >
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    as="button"
                                >
                                    {open ? 
                                <XIcon 
                                    className="text-marv w-8 h-8 focus:outline-none"
                                />
                                :
                                <MenuIcon
                                    className="text-marv w-8 h-8 focus:outline-none"
                                />
                                }
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    as="div"
                                    className="absolute mx-auto w-56 z-30 mt-3 right-8 sm:px-0"
                                >
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative bg-white p-7">
                                            <ul>
                                                <li>
                                                    <Link
                                                        href="/"
                                                    >
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="pt-3">
                                                    <Link
                                                        href="/our-wines"
                                                    >
                                                        <a>Our Wines</a>
                                                    </Link>
                                                </li>
                                                <li className="pt-3">
                                                    <Link
                                                        href="/where-to-buy"
                                                    >
                                                        <a>Where to Buy</a>
                                                    </Link>
                                                </li>
                                                <li className="pt-3">
                                                    <Link
                                                        href="/about"
                                                    >
                                                        <a>About</a>
                                                    </Link>
                                                </li>
                                                <li className="pt-3">
                                                    <Link
                                                        href="/shop-now"
                                                    >
                                                        <a>Shop Now</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                            </>
                        )}
                    </Popover>
                </span>
            </div>
        </React.Fragment>
    )
}

export default NavBar