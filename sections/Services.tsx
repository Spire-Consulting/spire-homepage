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
        <div className={"relative flex flex-col mb-16"}>
            <div className={"flex mb-4 place-content-center"}>
                <HeaderWithTriangle title={title} color="lime" />
            </div>
            <p className="flex place-content-center">{description}</p>
            <div className="flex justify-between mt-16">
                {services[type].map((service: Service, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-1">
                        {service.icon}
                        <h4>{service.title}</h4>
                        <p className="text-xs mt-2 text-center">Dette innebærer noe slik. litt mer tekst for å se hvordan det kan se ut</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
