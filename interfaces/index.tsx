export type Page = {
    tabTitle: string
    navTitle: string
    link: string
    pageTitle?: string
    description?: string
}

type SanityImage = {
    _type: string
    asset: any
}

export type Employee = {
    fullName: string
    profilePicture: SanityImage
    position: string
    study: string
    linkedin: string
    email: string
    isAlumni: boolean
    about: string
    company?: string
}

export type ProjectType = "it" | "strategy"

export interface Project {
    _id: string
    projectName: string
    customerName: string
    portrait: SanityImage
    isPublic: boolean
    isHighlighted: boolean
    shortDescription: string
    projectDuration: number
    year: number
    projectDescription: any[]
    type: ProjectType
    customerQuote?: string
}

interface ContactFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement
    mail: HTMLInputElement
    description: HTMLInputElement
}

export interface YourFormElement extends HTMLFormElement {
    readonly elements: ContactFormElements
}

export type Service = {
    title: string
    description: string
    icon: JSX.Element
}
