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
    name: string
    profilePicture: SanityImage
    position: string
    study: string
    linkedin: string
    email: string
    isAlumni: boolean
    about: string
    company?: string
}

export interface Project {
    _id: string
    projectName: string
    customerName: string
    portrait: any
    isPublic: boolean
    isHighlighted: boolean
    projectDuration: number
    year: number
    projectDescription: string
    customerQuote: string
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
