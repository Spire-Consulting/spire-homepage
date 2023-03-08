import axios from "axios"
import { Project } from "../../interfaces"
import { baseApiUrl } from "../baseApiUrl"

const URL = `${baseApiUrl}/references`

export interface IFetchProjectsReturn {
    data: { data: { references: Project[] } }
}

export interface IFetchProjectReturn {
    reference?: Project
}

export interface IFetchProjectsParams {}

export type IFetchProjects = (params?: IFetchProjectsParams) => Promise<IFetchProjectsReturn>

export type IFetchProject = (id: string | string[] | undefined) => Promise<IFetchProjectReturn>

export const fetchProjects: IFetchProjects = (params = {}) => {
    return axios.get(URL, params)
}

export const fetchProject: IFetchProject = async (id) => {
    const res = await axios.get(URL, { params: { _id: id } })
    console.log(res)
    try {
        const project = res.data.data.references[0]
        return project
    } catch (error) {
        return undefined
    }
}

export const getAllProjectIds = async () => {
    const projectIds = await axios.get(URL).then((res: IFetchProjectsReturn) => {
        return res.data.data.references.map((reference: Project) => reference._id)
    })

    return projectIds.map((projectId: string) => {
        return {
            params: {
                id: projectId
            }
        }
    })
}
