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
            <div className="relative flex flex-col items-center min-h-screen overflow-x-hidden bg-gray-50">
                <Navbar pages={pages} />
                <div className="flex flex-col items-center w-full p-4 space-y-2 md:space-y-8 lg:space-y-6 md:p-8 lg:p-8 max-w-7xl ">
                    {isLandingLayout ? (
                        <>{children}</>
                    ) : (
                        <>
                            <div className="space-y-6 text-center">
                                <h2 className="text-3xl font-bold">{pageTitle}</h2>
                                <p className="text-lg">{description}</p>
                            </div>
                            {children}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
