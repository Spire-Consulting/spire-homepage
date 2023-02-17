import Image from "next/image"
import { Employee } from "../interfaces"
import LinkedIn from "./buttons/LinkedIn"

type EmployeeProps = {
    employee: Employee
}

export default function EmployeeCard({ employee }: EmployeeProps) {
    return (
        <li className="flex flex-col w-full h-full overflow-hidden">
            <>
                <div className="relative pb-[85%]">
                    <Image
                        src={employee.profilePicture}
                        alt={employee.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="py-4 space-y-2">
                    <p className="text-xl font-bold">{employee.name}</p>
                    <p className="text-base text-lime">{employee.position}</p>
                    <div>
                        <LinkedIn url={employee.linkedIn} />
                    </div>
                    <p>{employee.email}</p>
                </div>
            </>
        </li>
    )
}
