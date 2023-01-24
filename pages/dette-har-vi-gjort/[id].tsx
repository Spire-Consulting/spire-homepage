import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { fetchProject, getAllProjectIds } from "../../utils/api/projectsApi"
import { Project } from "../../interfaces"
import Image from "next/image"

type ProjectProps = {
    reference: Project
}

const Reference = (props: ProjectProps) => {
    const { reference } = props

    if (!reference) return <p>project not found</p>

    return (
        <div>
            <div>
                <Image
                    src={reference.image}
                    alt={`${reference.customerName}`}
                    layout="fill" // required
                    objectFit={"contain"} // change to suit your needs
                />
            </div>
            <div>
                <p>{reference.customerName}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = await getAllProjectIds()
    return {
        paths,
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
        const reference = await fetchProject(id)
        if (!reference) {
            return { notFound: true }
        }
        return { props: { reference: reference } }
    } catch (error) {
        console.log(error)
        return { notFound: true }
    }
}

export default Reference
