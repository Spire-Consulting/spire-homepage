import { ReactNode } from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import { pages } from "../assets/pages"
import Footer from "../sections/Footer"

type Props = {
    tabTitle: string
    children?: ReactNode
}

const Layout = (props: Props) => {
    const { children, tabTitle } = props

    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta charSet="utf-8" />
                <meta itemProp="name" content={tabTitle} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="relative flex flex-col items-center min-h-screen overflow-x-hidden bg-zinc-900">
                <Navbar pages={pages} />
                <div className="flex flex-col max-w-screen-xl py-12 mx-12 md:py-16 lg:py-24 md:mx-16 lg:mx-32">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
