import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { Project } from "../../interfaces"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { useNextSanityImage } from "next-sanity-image"
import sanityClient from "../../utils/sanity/sanity"
import { portableTextSerializers } from "../../utils/sanity/portableTextSerializer"
import { fetchById, projectIdsQuery } from "../../utils/sanity/queries"
import Layout from "../../components/Layout"

type ProjectProps = {
    project: Project
}

const ProjectPage = ({ project }: ProjectProps) => {
    const imageProps = useNextSanityImage(sanityClient, project.portrait)
    if (!project) return <p>Project not found</p>

    return (
        <Layout tabTitle={project.projectName}>
            <div>
                <div>
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
                <div>
                    <p>{project.customerName}</p>
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
