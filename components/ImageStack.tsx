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
        <div className="flex flex-col">
            <div className="flex flex-row justify-center mb-4 space-x-4">
                <div className="mt-auto">
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={"/images/peopleInSpire1.jpg"}
                    />
                </div>
                <div className="w-[125px] h-[200px] relative">
                    <Image
                        className="object-cover"
                        alt="logo"
                        fill
                        src={fiveRandomEmployees[1].profilePicture}
                    />
                </div>
            </div>
            <div className="flex flex-row mb-4 space-x-4">
                <div>
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={fiveRandomEmployees[0].profilePicture}
                    />
                </div>
                <div className="w-[125px] h-[200px] relative">
                    <Image
                        className="object-cover"
                        alt="logo"
                        fill
                        src={fiveRandomEmployees[2].profilePicture}
                    />
                </div>
                <div>
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={fiveRandomEmployees[3].profilePicture}
                    />
                </div>
            </div>
        </div>
    )
}
