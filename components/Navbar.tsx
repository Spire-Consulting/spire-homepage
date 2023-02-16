import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Page } from "../interfaces"
import HamburgerMenu from "./HamburgerMenu"

type NavbarProps = {
    pages: Page[]
}

export default function Navbar({ pages }: NavbarProps) {
    const router = useRouter()

    const isLinkActive = (path: string) => {
        return router.pathname === path
    }

    return (
        <div className="flex flex-row items-center justify-between w-full h-[74px] px-4 py-4 lg:px-12">
            <div className="flex flex-row flex-start">
                <Link href="/" passHref>
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src="/images/logo_spire_hvit_NOBG.svg"
                    />
                </Link>
            </div>
            <div className="lg:hidden">
                <HamburgerMenu pages={pages} />
            </div>
            <div className="flex-row hidden lg:flex">
                {pages.map((page: Page, key: number) => (
                    <Link
                        key={key}
                        href={page.link}
                        passHref
                        className={`m-4 text-lg font-semibold cursor-pointer hover:underline decoration-lightBlue underline-offset-4 ${
                            isLinkActive(page.link) ? "text-lightBlue font-bold" : "text-white"
                        }`}
                    >
                        {page.tabTitle}
                    </Link>
                ))}
            </div>
        </div>
    )
}
