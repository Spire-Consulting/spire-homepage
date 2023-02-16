import { useRouter } from "next/router"
import Button from "../components/buttons/Button"
import ImageStack from "../components/ImageStack"
import { Employee } from "../interfaces"
import Image from "next/image"

type Props = {
    employees: Employee[]
}

export default function Employees({ employees }: Props) {
    const router = useRouter()

    return (
        <div className="flex flex-row content-center my-8 space-x-12">
            <ImageStack employees={employees} />
            <div className="space-y-6">
                <div className="flex flex-row items-center space-x-4">
                    <Image alt="logo" width={17} height={17} src={"images/triangle-filled.svg"} />
                    <h2>Menneskene i Spire</h2>
                </div>
                <p>Spire består av motiverte studenter som bla bla bla</p>
                <div className="flex flex-row space-x-6">
                    <Button
                        text="Bli kjent med oss"
                        buttonStyle="border-2 border-lightBlue bg-lightBlue"
                        textStyle="text-black"
                        onClick={() => router.push("/ansatte")}
                    />
                    <Button
                        text="Kontakt oss"
                        buttonStyle="border-2 border-lightBlue"
                        textStyle="text-lightBlue"
                        onClick={() => router.push("/kontakt")}
                    />
                </div>
            </div>
        </div>
    )
}
