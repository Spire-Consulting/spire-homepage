import Link from "next/link"
import React from "react"
import FooterColumn from "./FooterColumn"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full px-12 py-8 text-white sm:flex-row bg-zinc-900 md:px-16 lg:px-32">
            <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
                <FooterColumn>
                    <>
                        <Link href="https://www.linkedin.com/company/spire-consulting-as">
                            Linkedin
                        </Link>
                        <Link href="https://www.facebook.com/search/top/?q=spire%20consulting">
                            Facebook
                        </Link>
                        <Link href="https://www.instagram.com/spireconsulting/">Instagram</Link>
                    </>
                </FooterColumn>
                <FooterColumn>
                    <>
                        <Link href="mailto:kontakt@spireconsulting.no">
                            kontakt@spireconsulting.no
                        </Link>{" "}
                        <p>+47 480 00 508</p>
                        <p>Org nr: 916 672 357</p>
                    </>
                </FooterColumn>
                <FooterColumn>
                    <>
                        <div className="flex  md:justify-end">
                            <Image
                                alt="logo"
                                width="100"
                                height="100"
                                src="/images/logo_spire_hvit_NOBG.svg"
                            />
                        </div>
                        <p className="md:text-right">Nedre alle 2a</p>
                        <p className="md:text-right">7030 Trondheim</p>
                    </>
                </FooterColumn>
            </div>
        </footer>
    )
}
