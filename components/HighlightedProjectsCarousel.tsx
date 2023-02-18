import { Project } from "../interfaces"
import Image from "next/image"
import Button from "./buttons/Button"
import { useRouter } from "next/router"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

type Props = {
    highlightedProjects: Project[]
}

export default function HighlightedProjectsCarousel({ highlightedProjects }: Props) {
    const router = useRouter()
    const [activeIndex, setActiveIndex] = useState(0)

    const handleLeftClick = () => {
        setActiveIndex(activeIndex - 1)
    }

    const handleRightClick = () => {
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className="relative flex flex-row items-center w-full">
            <ChevronLeftIcon
                onClick={handleLeftClick}
                className="w-12 h-12 text-white tcursor-pointer "
            />
            <div className="relative flex-1 m-auto h-80">
                <Image
                    src={highlightedProjects[activeIndex].image}
                    alt="Highlighted project"
                    fill
                    className="object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full p-16 space-y-1">
                    <h3 className="text-slate-300">
                        {highlightedProjects[activeIndex].customerName}
                    </h3>
                    <h2>En fristende prosjekttittel</h2>
                    <p className="text-slate-300">En setning som beskriver prosjektet</p>
                    <Button
                        buttonStyle="border-2 border-lightBlue bg-lightBlue"
                        text="Kontakt oss"
                        textStyle="text-black"
                        onClick={() =>
                            router.push(
                                `/dete-har-vi-gjort/${highlightedProjects[activeIndex]._id}}`
                            )
                        }
                    />
                </div>
            </div>
            <ChevronRightIcon
                onClick={handleRightClick}
                className="w-12 h-12 text-white cursor-pointer "
            />
        </div>
    )
}
