import { useRouter } from "next/router"
import Button from "../components/buttons/Button"
import IconTitle from "../components/HeaderWithTriangle"

export default function Projects() {
    const router = useRouter()

    return (
        <div className="flex flex-row content-center my-12 space-x-4">
            <div className="flex-1"></div>
            <div className="flex-1 space-y-6">
                <IconTitle title="Hva vi gjør" color="lightBlue" />
                <p>
                    Vi har hjulpet bla bla bla bla prosjekter it og strategi det er bra helst to
                    linjer tekst takk
                </p>
                <Button text="Se prosjekter" onClick={() => router.push("/dete-har-vi-gjort")} />
            </div>
        </div>
    )
}
