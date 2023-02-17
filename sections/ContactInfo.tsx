import { HomeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import Mail from "../components/buttons/Mail"

type ContactInfoProps = {
    withImage: boolean
}

export default function ContactInfo({ withImage }: ContactInfoProps) {
    return (
        <div className="flex flex-col space-y-2 text-slate-300">
            {withImage && (
                <>
                    <Image
                        src="/images/logo_spireconsulting_hvit_NOBG.svg"
                        alt="logo"
                        width="150"
                        height="150"
                    />
                    <span className="w-full h-[3px] bg-lightBlue !mt-0" />
                </>
            )}
            <div className="flex items-center">
                <Mail email="kontakt@spireconsulting.no" />
                <Link href="mailto:kontakt@spireconsulting.no" className="ml-6 ">
                    kontakt@spireconsulting.no
                </Link>{" "}
            </div>
            <div className="flex items-center ">
                <PhoneIcon className="h-6 " />
                <p className="ml-6 text-slate-300">+47 480 00 508</p>
            </div>
            <div className="flex items-center ">
                <HomeIcon className="h-6 " />
                <p className="ml-6 text-slate-300">Org nr: 916 672 357</p>
            </div>
        </div>
    )
}
