import { ReactNode } from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import { pages } from "../assets/pages"
import Footer from "../sections/Footer"

type Props = {
    tabTitle: string
    isLandingLayout?: boolean
    children?: ReactNode
    pageTitle?: string
    description?: any
}

const Layout = (props: Props) => {
    const { children, pageTitle, description, tabTitle, isLandingLayout } = props

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
                <div className="flex flex-col items-center w-full ">
                    {isLandingLayout ? (
                        <>{children}</>
                    ) : (
                        <div className="p-4 md:p-8">
                            <div className="pb-8 space-y-6 text-center lg:pb-12">
                                <h2 className="text-3xl font-bold">{pageTitle}</h2>
                                <p className="text-lg">{description}</p>
                            </div>
                            {children}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
