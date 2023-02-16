import React, { useState } from "react"
import Button from "../components/buttons/Button"
import Spinner from "../components/Spinner"
import { YourFormElement } from "../interfaces"
import { sendContactForm } from "../utils/api/contactFormApi"

export default function ContactForm() {
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: React.FormEvent<YourFormElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.elements.name)
        const { name, mail, description } = event.currentTarget.elements
        setLoading(true)
        sendContactForm({
            name: name.value,
            mail: mail.value,
            description: description.value
        }).then(() => {
            setLoading(false)
        })
    }

    return (
        <section className="rounded shadow-lg bg-zinc-800">
            <div className="max-w-screen-md px-4 py-6 mx-auto lg:py-8">
                <form onSubmit={handleSubmit} className="space-y-8 text-white">
                    <div>
                        <label htmlFor="mail" className="block mb-2 text-sm font-medium ">
                            Mail
                        </label>
                        <input
                            type="mail"
                            id="mail"
                            className="shadow-sm bg-zinc-600 border border-zinc-900 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="navn@eksempel.no"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                            Navn/bedrift
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full p-3 text-sm border rounded-lg shadow-sm bg-zinc-600 border-zinc-900 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Hvem trenger hjelp..."
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium ">
                            Beskrivelse
                        </label>
                        <textarea
                            id="description"
                            rows={6}
                            className="block p-2.5 w-full text-sm  bg-zinc-600 border border-zinc-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Hva trenger dere hjelp med..."
                        ></textarea>
                    </div>
                    <Button
                        typeSubmit
                        text="Send"
                        className="w-full bg-blue-500"
                        endIcon={loading ? <Spinner className="ml-2" /> : undefined}
                    />
                </form>
            </div>
        </section>
    )
}
