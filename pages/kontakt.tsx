import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../sections/ContactForm"
import Image from "next/image"

import HeaderWithTriangle from "../components/HeaderWithTriangle"

export default function kontakt() {
    return (
        <Layout tabTitle="Kontakt">
            <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-24 md:grid-cols-2">
                <div className="relative">
                    <Image
                        src="/images/mountains.png"
                        className="object-cover"
                        fill
                        alt="Mountain-image"
                    />
                </div>
                <div className="w-full space-y-8">
                    <HeaderWithTriangle title="Kontakt oss" color="lightBlue" />
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
