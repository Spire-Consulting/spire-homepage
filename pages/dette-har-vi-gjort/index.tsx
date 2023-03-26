import { Project } from "../../interfaces"
import { fetchProjects } from "../../utils/api/projectsApi"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import HighlightedProjectsCarousel from "../../components/HighlightedProjectsCarousel"
import sanityClient from "../../utils/sanity/sanity"
import { projectsQuery } from "../../utils/sanity/queries"

type ProjectsType = {
    projects: Project[]
}

const Projects = ({ projects }: ProjectsType) => {
    return (
        <Layout tabTitle="Dette har vi gjort">
            <div className="space-y-16 page-padding">
                {/* <HighlightedProjectsCarousel highlightedProjects={projects.slice(3)} /> */}

                {projects?.map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project} alternate={index % 2 === 1} />
                ))}
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const projects: Project[] = await sanityClient.fetch(projectsQuery)
        console.log(projects)
        return { props: { projects: projects } }
    } catch (error) {
        console.log(error)
        return { notFound: true }
    }
}
export default Projects
