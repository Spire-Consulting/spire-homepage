import Link from "next/link"
import React from "react"
import { pages } from "../assets/pages"
import { Page } from "../interfaces"
import Image from "next/image"
import ContactInfo from "./ContactInfo"

export default function Footer() {
    return (
        <footer className="w-full p-8 text-white sm:flex-row bg-slate-800">
            <div className="flex flex-col justify-between max-w-screen-xl m-auto space-y-4 sm:flex-row">
                <ContactInfo withImage />
                <div className="flex justify-between space-x-16">
                    <div className="flex flex-col space-y-2">
                        <h3 className="underline decoration-lightBlue underline-offset-4">
                            Social
                        </h3>
                        <Link
                            className="underline"
                            href="https://www.linkedin.com/company/spire-consulting-as"
                        >
                            Linkedin
                        </Link>
                        <Link
                            className="underline"
                            href="https://www.facebook.com/search/top/?q=spire%20consulting"
                        >
                            Facebook
                        </Link>
                        <Link
                            className="underline"
                            href="https://www.instagram.com/spireconsulting/"
                        >
                            Instagram
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="underline decoration-lightBlue underline-offset-4">
                            Utforsk
                        </h3>
                        {pages.map((page: Page, index: number) => (
                            <Link href={page.link} key={index} className="underline">
                                {page.tabTitle}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
