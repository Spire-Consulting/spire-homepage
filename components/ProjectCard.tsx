import { Project } from "../interfaces"
import Image from "next/image"

type ProjectCardProps = {
    project: Project
    alternate?: boolean
}
export default function ProjectCard({ project, alternate }: ProjectCardProps) {
    return (
        <div className={`flex ${alternate ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-1/2 mx-6">
                <h3 className="mb-6">{project.customerName}</h3>
                <p className="">{project.projectDescription}</p>
            </div>
            <div className="relative w-1/2 m-4">
                <Image src={project.image} fill className="object-fit" alt={project.customerName} />
            </div>
        </div>
    )
}
