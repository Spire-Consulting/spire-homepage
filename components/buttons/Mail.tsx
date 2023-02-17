import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import React from "react"

type MailProps = {
    email: string
    className?: string
}

export default function Mail({ email, className }: MailProps) {
    return (
        <Link href={`mailto${email}`}>
            <EnvelopeIcon className={`${className} h-6`} />
        </Link>
    )
}
