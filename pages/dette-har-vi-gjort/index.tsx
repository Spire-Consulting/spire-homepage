import { Project, ProjectType } from "../../interfaces"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import HighlightedProjectsCarousel from "../../components/HighlightedProjectsCarousel"
import sanityClient from "../../utils/sanity/sanity"
import { projectsQuery } from "../../utils/sanity/queries"
import { useState } from "react"
import Button from "../../components/buttons/Button"

type ProjectsProps = {
    projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
    const [activeFilter, setActiveFilter] = useState<ProjectType | "ALL">("ALL")
    const isHighlighted = (project: Project) => project.isHighlighted

    return (
        <Layout tabTitle="Dette har vi gjort">
            <div className="w-screen px-18 md:px-32 lg:px-52">
                <HighlightedProjectsCarousel highlightedProjects={projects.filter(isHighlighted)} />
                <div className="flex justify-center w-full gap-8 mt-16">
                    <Button
                        buttonStyle={`border-2 border-lightBlue ${
                            activeFilter === "ALL" && "bg-lightBlue"
                        }`}
                        text="Alle"
                        textStyle={activeFilter === "ALL" ? "text-black" : "text-lightBlue"}
                        onClick={() => setActiveFilter("ALL")}
                    />
                    <Button
                        buttonStyle={`border-2 border-lightBlue ${
                            activeFilter === "it" && "bg-lightBlue"
                        }`}
                        text="IT-løsninger"
                        textStyle={activeFilter === "it" ? "text-black" : "text-lightBlue"}
                        onClick={() => setActiveFilter("it")}
                    />
                    <Button
                        buttonStyle={`border-2 border-lightBlue ${
                            activeFilter === "strategy" && "bg-lightBlue"
                        }`}
                        textStyle={activeFilter === "strategy" ? "text-black" : "text-lightBlue"}
                        text="Strategi"
                        onClick={() => setActiveFilter("strategy")}
                    />
                </div>
                <div>
                    {projects
                        ?.filter((project) => {
                            return activeFilter === "ALL" ? true : project.type === activeFilter
                        })
                        .map((project: Project, index: number) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                alternate={index % 2 === 0}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const projects: Project[] = await sanityClient.fetch(projectsQuery)
        return { props: { projects: projects } }
    } catch (error) {
        console.log(error)
        return { notFound: true }
    }
}
export default Projects
