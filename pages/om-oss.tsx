import type { NextPage } from "next"
import Image from "next/image"
import React from "react"
import Layout from "../components/Layout"
import Button from "../components/buttons/Button"
import { useRouter } from "next/router"
import WhoWeAre from "../sections/WhoWeAre"
import Services from "../sections/Services"

const OmOss: NextPage = () => {
    const router = useRouter()

    return (
        <Layout tabTitle="Om oss" isLandingLayout>
            <div className="h-[calc(100vh-74px)] flex flex-col justify-between">
                <div className="px-32 m-auto space-y-8">
                    <h1>Trenger du hjelp med IT eller strategi?</h1>
                    <h3>Vi er et studentdrevet konsulentselskap som jobber med strategi og IT</h3>
                    <div className="flex justify-center space-x-4">
                        <Button
                            buttonStyle="border-2 border-lightBlue bg-lightBlue"
                            text="Kontakt oss"
                            textStyle="text-black"
                            onClick={() => router.push("/kontakt")}
                        />
                        <Button
                            buttonStyle="border-2 border-lightBlue"
                            text="Om oss"
                            textStyle="text-lightBlue"
                            onClick={() => router.push("/om-oss")}
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-24 page-padding">
                <WhoWeAre />
                <div className="relative h-64 -mr-24">
                    <div className="absolute right-0 w-[40em] h-64">
                        <Image src={"/images/stockphoto_teamwork.png"} fill alt="teamwork" />
                    </div>
                </div>
                <Services
                    title="IT-løsninger"
                    type="it"
                    description="Vi har et varient tilbud av tjenester innenfor IT-fronten. Skriv litt mer"
                />
                <Services
                    title="Strategy"
                    type="strategy"
                    description="Vi har et varient tilbud av tjenester innenfor IT-fronten. Skriv litt mer"
                />
            </div>
        </Layout>
    )
}

export default OmOss
