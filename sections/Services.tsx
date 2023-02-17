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
        <div className={`relative ${type === "strategy" && "text-right"}`}>
            <div className={`flex mb-4 ${type === "strategy" && "justify-end"}`}>
                <HeaderWithTriangle title={title} color="lime" />
            </div>
            <p>{description}</p>
            <div className="grid grid-cols-2 gap-8 mt-16">
                {services[type].map((service: Service, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                        {service.icon}
                        <h4>{service.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
