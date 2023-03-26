import { Project } from "../interfaces"
import classNames from "classnames"
import Image from "next/image"
import Button from "./buttons/Button"

type ProjectCardProps = {
    project: Project
    alternate?: boolean
}
export default function ProjectCard({ project, alternate }: ProjectCardProps) {    
    return (
        <div className={classNames("flex h-card items-center justify-center gap-24 mt-16", alternate ? "flex-row-reverse" : "flex-row")}>
            <div className="w-full h-full flex justify-center flex-col">
                {/* Placeholder for when filtering is implemented */}
                {/* <p>{project.type}</p> */}
                <p className="text-lime mb-4">Strategi</p>
                <h2 className="border-b-2 w-fit pb-2 border-b-lightBlue mb-8">{project.customerName}</h2>
                {/* Remove slice when shorter description is implemented */}
                <p className="mb-8">{project.projectDescription.slice(0, 70)}</p>
                <Button
                    buttonStyle="border-2 border-lightBlue"
                    text="Les mer"
                    textStyle="text-lightBlue"
                    onClick={() => null}
                />
            </div>
             <div className="w-full h-full relative">
                <Image src={project.image} fill className={"object-scale-down "} alt={project.customerName}/>
            </div>
        </div>
    )
}
