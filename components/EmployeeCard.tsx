import Image from "next/image"
import { Employee } from "../interfaces"
import LinkedIn from "./buttons/LinkedIn"
import { useNextSanityImage } from "next-sanity-image"
import sanityClient from "../utils/sanity/sanity"

type EmployeeProps = {
    employee: Employee
}

export default function EmployeeCard({ employee }: EmployeeProps) {
    console.log("employee", employee)
    const imageProps = useNextSanityImage(sanityClient, employee.profilePicture)

    return (
        <li className="flex flex-col w-full h-full overflow-hidden">
            <div className="relative pb-[85%]">
                <Image
                    src={imageProps.src}
                    alt={employee.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={employee.profilePicture.asset.metadata.lqip}
                />
            </div>
            <div className="py-4 space-y-2">
                <p className="text-xl font-bold">{employee.name}</p>
                <p className="text-base text-lime">{employee.position}</p>
                <div>
                    <LinkedIn url={employee.linkedin} />
                </div>
                <p>{employee.email}</p>
            </div>
        </li>
    )
}
