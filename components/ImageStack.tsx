import { Employee } from "../interfaces"
import Image from "next/image"
import { useMemo } from "react"

type Props = {
    employees: Employee[]
}

export default function ImageStack({ employees }: Props) {
    const fiveRandomEmployees = useMemo(
        () =>
            employees
                ?.filter((employee: Employee) => !employee.isAlumni)
                .sort(() => 0.5 - Math.random())
                .slice(0, 5),
        [employees]
    )

    return (
        <div className="gap-8 columns-2 md:columns-3">
            {fiveRandomEmployees.map((employee: Employee, i: number) => (
                <div key={i} className="mb-4">
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={employee.profilePicture}
                    />
                </div>
            ))}
        </div>
    )
}
