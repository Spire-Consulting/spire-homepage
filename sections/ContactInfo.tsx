import { HomeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import Mail from "../components/buttons/Mail"

type ContactInfoProps = {
    children: JSX.Element
}

export default function ContactInfo({ children }: ContactInfoProps) {
    return (
        <div className="flex flex-col space-y-2 w-56 py-8 md:py-0">
            <div className="w-full bg-lightBlue h-px"></div>
            {children}
        </div>
    )
}
