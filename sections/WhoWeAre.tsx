import { useRouter } from "next/router"
import React from "react"
import Button from "../components/buttons/Button"
import HeaderWithTriangle from "../components/HeaderWithTriangle"

type WhoWeAreProps = {
    ref: React.RefObject<HTMLInputElement>
}

export default function WhoWeAre({ ref }: WhoWeAreProps) {
    const router = useRouter()

    return (
        <div ref={ref} className="space-y-4" id="who-we-are">
            <HeaderWithTriangle title="Hvem er vi?" />
            <p>
                Spire Consulting er et studentdrevet konsulentselskap som tilbyr
                rådgivningstjenester til både små og store bedrifter. Selskapet drives og eies av
                studenter ved Norges teknisk-naturvitenskapelige universitet (NTNU) i Trondheim. Vår
                visjon er å gjøre bedrifter i stand til å realisere sitt utviklingspotensial.
                Motivasjonen bak stiftelsen av Spire Consulting var å skape en arena hvor studenter
                gis en mulighet til å skape verdi for bedrifter i næringslivet ved bruk av sin
                kompetanse.
            </p>
            <Button
                buttonStyle="border-2 border-lightBlue bg-lightBlue"
                text="Kontakt oss"
                textStyle="text-black"
                onClick={() => router.push("/om-oss")}
            />
        </div>
    )
}
