import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../sections/ContactForm"
import Image from "next/image"

import HeaderWithTriangle from "../components/HeaderWithTriangle"

export default function kontakt() {
    return (
        <Layout tabTitle="Kontakt" isLandingLayout>
            <div className="grid grid-cols-1 gap-8 mt-16 md:gap-16 lg:gap-24 max-w-7xl md:grid-cols-2 page-padding">
                <div className="relative">
                    <Image
                        src="/images/mountains.png"
                        className="object-cover"
                        fill
                        alt="Mountain-image"
                    />
                </div>
                <div className="w-full space-y-8">
                    <HeaderWithTriangle title="Kontakt oss" />
                    <p className="font-light sm:text-lg">
                        Kontakt oss for en uforpliktende samtale og få et kvalifisert estimat på
                        omfanget av ditt problem.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}
