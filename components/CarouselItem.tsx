import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import sanityClient from "../utils/sanity/sanity"
import { Project } from "../interfaces"
import Image from "next/image"
import Button from "./buttons/Button"
import { useRouter } from "next/router"

type CarouselItemProps = {
    project: Project
}

export default function CarouselItem({ project }: CarouselItemProps) {
    const router = useRouter()

    const imageProps = useNextSanityImage(sanityClient, project.portrait)

    return (
        <>
            <Image
                src={imageProps.src}
                alt="Highlighted project"
                fill
                className="object-cover grayscale"
            />
            <div className="absolute top-0 left-0 w-full h-full py-4 md:py-8 lg:py-16">
                <div className="h-full realtive ">
                    <div className="absolute w-full h-full bg-gray-900 opacity-50 " />
                    <div className="relative z-10 flex flex-col justify-between h-full p-4">
                        <h3 className="text-slate-100">{project.customerName}</h3>
                        <h2>{project.projectName}</h2>
                        <p className="text-slate-100">{project.customerQuote}</p>
                        <Button
                            buttonStyle="border-2 border-lightBlue bg-lightBlue"
                            text="Les mer"
                            textStyle="text-black"
                            onClick={() => router.push(`/dete-har-vi-gjort/${project._id}}`)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
