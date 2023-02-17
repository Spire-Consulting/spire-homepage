export type Page = {
    tabTitle: string
    navTitle: string
    link: string
    pageTitle?: string
    description?: string
}

export type Employee = {
    name: string
    profilePicture: string
    position: string
    study: string
    linkedIn: string
    email: string
    isAlumni: boolean
    about: string
    company?: string
}

export interface Project {
    _id: string
    customerName: string
    image: string
    isPublic: string
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
