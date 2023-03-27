import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { Project } from "../../interfaces"
import { PortableText } from "@portabletext/react"
import sanityClient from "../../utils/sanity/sanity"
import { portableTextSerializers } from "../../utils/sanity/portableTextSerializer"
import { fetchById, projectIdsQuery } from "../../utils/sanity/queries"
import Layout from "../../components/Layout"
import CarouselItem from "../../components/CarouselItem"
import Quote from "../../components/Quote"
import HeaderWithTriangle from "../../components/HeaderWithTriangle"

type ProjectProps = {
    project: Project
}

const ProjectPage = ({ project }: ProjectProps) => {
    if (!project) return <p>Project not found</p>

    return (
        <Layout tabTitle={project.projectName}>
            <div className="relative w-full h-[300px]">
                <CarouselItem project={project} />
            </div>
            <div className="px-12 py-8 space-y-8 lg:space-y-12 lg:px-16">
                <div className="flex flex-row space-x-16">
                    <div>
                        <p className="text-lg font-extrabold ">Type prosjekt</p>
                        <p className="text-gray-300">{project.type.toUpperCase()}</p>
                    </div>
                    <div>
                        <p className="text-lg font-extrabold ">År</p>
                        <p className="text-gray-300">{project.year}</p>
                    </div>
                    <div>
                        <p className="text-lg font-extrabold">Varighet</p>
                        <p className="text-gray-300">{project.projectDuration}</p>
                    </div>
                </div>
                {project.customerQuote && <Quote quote={project.customerQuote} />}
                <div className="space-y-4">
                    <HeaderWithTriangle title="Om prosjektet" color="lightBlue" />
                    <PortableText
                        value={project.projectDescription}
                        components={portableTextSerializers}
                    />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(projectIdsQuery)
    return {
        paths: paths.map((id: IParams) => ({ params: id })),
        fallback: false
    }
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const { id } = context.params as IParams
        if (!id) {
            return { notFound: true }
        }
        const project = await sanityClient.fetch(fetchById(id))
        if (!project) {
            return { notFound: true }
        }
        return { props: { project: project } }
    } catch (error) {
        return { notFound: true }
    }
}

export default ProjectPage
