import axios from "axios"
import { baseApiUrl } from "../baseApiUrl"

const URL = `${baseApiUrl}/contact-form`

export const sendContactForm = (formData: { name: string; mail: string; description: string }) => {
    return axios.post(URL, formData)
}
