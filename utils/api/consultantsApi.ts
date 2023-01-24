import axios from "axios"
import { Employee } from "../../interfaces"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/consultants`

/*  FETCH ALL  */

export interface IFetchConsultantsReturn {
    data: { data: { consultants: Employee[] } }
}

export interface IFetchConsultantsParams {}

export type IFetchConsultants = (
    params?: IFetchConsultantsParams
) => Promise<IFetchConsultantsReturn>

export const fetchConsultants: IFetchConsultants = (params = {}) => {
    return axios.get(URL, { params })
}
