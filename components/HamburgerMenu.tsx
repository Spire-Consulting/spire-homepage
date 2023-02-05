import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Bars4Icon } from "@heroicons/react/24/solid"
import { Page } from "../interfaces"
import Link from "next/link"

type HamburgerMenuProps = {
    pages: Page[]
}

export default function HamburgerMenu({ pages }: HamburgerMenuProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Bars4Icon className="w-8 h-8 lg:w-10 lg:h-10 " />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right divide-y rounded-md shadow-lg bg-slate-800 divide-lightBlue ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {pages.map((page: Page, index: number) => (
                        <Menu.Item key={index}>
                            {/* Div is needed to prevent console warning about passing href */}
                            <div>
                                <Link
                                    href={page.link}
                                    passHref
                                    className="flex items-center w-full px-2 py-2 text-sm text-white group hover:bg-slate-700"
                                >
                                    {page.navTitle}
                                </Link>
                            </div>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
