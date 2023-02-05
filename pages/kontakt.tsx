import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../sections/ContactForm"
import Image from "next/image"
import Link from "next/link"
import Mail from "../components/buttons/Mail"
import { PhoneIcon, HomeIcon } from "@heroicons/react/24/solid"
import ContactInfo from "../sections/ContactInfo"

export default function kontakt() {
    return (
        <Layout tabTitle="Kontakt" isLandingLayout>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ContactForm />
                <div className="order-first w-full pb-8 space-y-8 md:p-8 md:order-last">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white underline decoration-blue-500 underline-offset-4">
                        Kontakt
                    </h2>
                    <p className="font-light sm:text-lg">
                        Kontakt oss for en uforpliktende samtale og få et kvalifisert estimat på
                        omfanget av ditt problem.
                    </p>
                    <div className="w-full h-[3px] bg-blue-500" />
                    <div className="flex flex-col space-y-4">
                        <h3>Kontaktinfo</h3>
                        <ContactInfo withImage={false} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
