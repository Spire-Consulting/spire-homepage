import React from "react"
import HeaderWithTriangle from "../components/HeaderWithTriangle"
import { itServices, strategyServices } from "../constants/services"
import { Service } from "../interfaces"

type ServicesProps = {
    title: string
    description: string
    type: "it" | "strategy"
}

const services = {
    it: itServices,
    strategy: strategyServices
}

export default function Services({ title, description, type }: ServicesProps) {
    return (
        <div className={"relative flex flex-col mb-16 sm:bg-red-500 md:bg-blue-500"}>
            <div className={"flex mb-4 place-content-center"}>
                <HeaderWithTriangle title={title} color="lime" />
            </div>
            <p className="flex place-content-center">{description}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-16 mt-16">
                {services[type].map((service: Service, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-1">
                        {service.icon}
                        <div className="flex flex-col items-center w-48">
                            <div className="border-solid border-lime border-b-2 w-48 flex justify-center">
                                <h4 className="no-underline">{service.title}</h4>
                            </div>
                            <p className="text-xs mt-2 text-center">Dette innebærer noe slik. litt mer tekst for å se hvordan det kan se ut</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
