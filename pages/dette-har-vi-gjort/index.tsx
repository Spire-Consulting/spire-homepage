import { Project } from "../../interfaces"
import { fetchProjects } from "../../utils/api/projectsApi"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"

type ProjectsType = {
    references: Project[]
}

const Projects = (props: ProjectsType) => {
    const { references } = props
    return (
        <Layout tabTitle="Dette har vi gjort">
            <div>
                {references?.map((project: Project, index: number) => (
                    <div key={index}>{project.customerName}</div>
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
