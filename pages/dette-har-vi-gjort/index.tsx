import { Project } from "../../interfaces"
import { fetchProjects } from "../../utils/api/projectsApi"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectCard from "../../components/ProjectCard"
import Tabs from "../../components/Tabs"

type ProjectsType = {
    references: Project[]
}

const Projects = (props: ProjectsType) => {
    const { references } = props
    return (
        <Layout tabTitle="Dette har vi gjort">
            <div className="flex-row hidden w-full lg:flex">
                <div className="flex flex-col items-center flex-1">
                    <h2 className="mb-8">IT-løsninger</h2>
                    {references?.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} alternate={index % 2 === 0} />
                    ))}
                </div>
                <div className="flex flex-col items-center flex-1">
                    <h2 className="mb-8">Strategi</h2>

                    {references?.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} alternate={index % 2 === 1} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full space-y-8 lg:hidden">
                <Tabs headers={["IT", "Strategi"]}>
                    <>
                        {references?.map((project: Project, index: number) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                alternate={index % 2 === 1}
                            />
                        ))}
                    </>
                    <>
                        {references?.map((project: Project, index: number) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                alternate={index % 2 === 1}
                            />
                        ))}
                    </>
                </Tabs>
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
