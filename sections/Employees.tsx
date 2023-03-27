import { useRouter } from "next/router"
import Button from "../components/buttons/Button"
import ImageStack from "../components/ImageStack"
import HeaderWithTriangle from "../components/HeaderWithTriangle"

export default function Employees() {
    const router = useRouter()

    return (
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <ImageStack />
            <div className="mb-12 space-y-6">
                <div className="flex flex-row items-center space-x-4">
                    <HeaderWithTriangle title="Menneskene i spire" color="lightBlue" />
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
