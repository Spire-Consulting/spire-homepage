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
        <section className="bg-white rounded shadow-lg">
            <div className="max-w-screen-md px-4 py-6 mx-auto lg:py-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="mail"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Mail
                        </label>
                        <input
                            type="mail"
                            id="mail"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="navn@eksempel.no"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Navn/bedrift
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Hvem trenger hjelp..."
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Beskrivelse
                        </label>
                        <textarea
                            id="description"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
