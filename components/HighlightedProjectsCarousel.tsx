import { Project } from "../interfaces"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import CarouselItem from "./CarouselItem"

type Props = {
    highlightedProjects: Project[]
}

export default function HighlightedProjectsCarousel({ highlightedProjects }: Props) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleLeftClick = () => {
        if (activeIndex === 0) return setActiveIndex(highlightedProjects.length - 1)
        setActiveIndex(activeIndex - 1)
    }

    const handleRightClick = () => {
        if (activeIndex === highlightedProjects.length - 1) return setActiveIndex(0)
        setActiveIndex(activeIndex + 1)
    }

    if (highlightedProjects.length === 0) return null

    return (
        <div className="relative flex flex-row items-center w-full">
            <ChevronLeftIcon
                onClick={handleLeftClick}
                className="w-12 h-12 text-white cursor-pointer"
            />
            <div className="relative flex-1 m-auto h-80">
                <CarouselItem project={highlightedProjects[activeIndex]} />
            </div>
            <ChevronRightIcon
                onClick={handleRightClick}
                className="w-12 h-12 text-white cursor-pointer"
            />
        </div>
    )
}
