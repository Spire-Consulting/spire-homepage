import Image from "next/image"
import { Employee } from "../interfaces"
import LinkedIn from "./buttons/LinkedIn"
import Mail from "./buttons/Mail"

type EmployeeProps = {
    employee: Employee
}

export default function EmployeeCard({ employee }: EmployeeProps) {
    return (
        <li className="flex flex-col w-full h-full overflow-hidden rounded shadow-lg">
            <div className="relative pb-[85%]">
                <Image
                    src={employee.profilePicture}
                    alt={employee.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="px-6 py-4">
                <p className="mb-2 text-xl font-bold text-black underline decoration-blue-500 underline-offset-4">
                    {employee.name}
                </p>
                <p className="text-base text-gray-700">{employee.position}</p>
                <div className="flex pt-4 space-x-4">
                    <LinkedIn url={employee.linkedIn} />
                    <Mail email={employee.email} />
                </div>
            </div>
        </li>
    )
}
