import { Project } from "../interfaces"
import classNames from "classnames"
import Image from "next/image"
import Button from "./buttons/Button"
import { useNextSanityImage } from "next-sanity-image"
import sanityClient from "../utils/sanity/sanity"
import { useRouter } from "next/router"

type ProjectCardProps = {
    project: Project
    alternate?: boolean
}
export default function ProjectCard({ project, alternate }: ProjectCardProps) {
    const router = useRouter()

    const imageProps = useNextSanityImage(sanityClient, project.portrait)

    return (
        <div
            className={classNames(
                "flex h-card items-center justify-center gap-24 mt-16",
                alternate ? "flex-row-reverse" : "flex-row"
            )}
        >
            <div className="flex flex-col justify-center w-full h-full">
                <p className="mb-4 text-lime">{project.type.toUpperCase()}</p>
                <h2 className="pb-2 mb-8 border-b-2 w-fit border-b-lightBlue">
                    {project.customerName}
                </h2>
                <div className="mb-8">
                    <p>{project.shortDescription}</p>
                </div>
                <Button
                    buttonStyle="border-2 border-lightBlue"
                    text="Les mer"
                    textStyle="text-lightBlue"
                    onClick={() => router.push(`/dette-har-vi-gjort/${project._id}`)}
                />
            </div>
            <div className="relative">
                <Image
                    width={600}
                    height={300}
                    src={imageProps.src}
                    sizes="(max-width: 640px) 400px, 600px"
                    alt={project.customerName}
                    placeholder="blur"
                    blurDataURL={project.portrait.asset.metadata.lqip}
                />
            </div>
        </div>
    )
}
