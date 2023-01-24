import axios from "axios"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/contact-form`

export const sendContactForm = (formData: { name: string; mail: string; description: string }) => {
    return axios.post(URL, formData)
}
