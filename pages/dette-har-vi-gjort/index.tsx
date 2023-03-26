import { Project } from "../../interfaces"
import { fetchProjects } from "../../utils/api/projectsApi"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import HighlightedProjectsCarousel from "../../components/HighlightedProjectsCarousel"
import { useState } from "react"
import Button from "../../components/buttons/Button"

type ProjectPageProps = {
    references: Project[]
}

const Projects = ({references}: ProjectPageProps) => {
    const [activeFilter, setActiveFilter] = useState("ALL")

    return (
        <Layout tabTitle="Dette har vi gjort">
            <div className="w-screen px-52">
                <HighlightedProjectsCarousel highlightedProjects={references.slice(3)} />
                <div className="flex w-full justify-center gap-8 mt-16">
            <Button
                buttonStyle={`border-2 border-lightBlue ${activeFilter === "ALL" && "bg-lightBlue"}`}
                text="Alle"
                textStyle={activeFilter === "ALL" ? "text-black" : "text-lightBlue"}
                onClick={() => setActiveFilter("ALL")}
            />
            <Button
                buttonStyle={`border-2 border-lightBlue ${activeFilter === "IT" && "bg-lightBlue"}`}
                text="IT-løsninger"
                textStyle={activeFilter === "IT" ? "text-black" : "text-lightBlue"}
                onClick={() => setActiveFilter("IT")}
            />
            <Button
                buttonStyle={`border-2 border-lightBlue ${activeFilter === "STRATEGY" && "bg-lightBlue"}`}
                textStyle={activeFilter === "STRATEGY" ? "text-black" : "text-lightBlue"}
                text="Strategi"
                onClick={() => setActiveFilter("STRATEGY")}
            />
            </div>
                <div className="px-12">
                {/* Placeholder for when filtering is implemented */}
                {/* {references?.filter((reference) => reference.type === activeFilter).map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project} alternate={index % 2 === 0} />
                ))} */}
                {references?.map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project} alternate={index % 2 === 0} />
                ))}
                </div>
            </div>          
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data } = await fetchProjects()
        if (!data?.data) {
            return { notFound: true }
        }
        return { props: { references: data?.data?.references } }
    } catch (error) {
        console.log(error)
        return { notFound: true }
    }
}
export default Projects
