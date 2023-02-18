import { Project } from "../../interfaces"
import { fetchProjects } from "../../utils/api/projectsApi"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import HighlightedProjectsCarousel from "../../components/HighlightedProjectsCarousel"

type ProjectsType = {
    references: Project[]
}

const Projects = (props: ProjectsType) => {
    const { references } = props
    return (
        <Layout tabTitle="Dette har vi gjort">
            <div className="space-y-16 page-padding">
                <HighlightedProjectsCarousel highlightedProjects={references.slice(3)} />

                {references?.map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project} alternate={index % 2 === 1} />
                ))}
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
