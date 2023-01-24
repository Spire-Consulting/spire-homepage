import Button from "../components/buttons/Button"
import Layout from "../components/Layout"

export default function Home() {
    return (
        <Layout tabTitle={"Hjem"}>
            <div className="flex">
                <div className="flex flex-col space-y-4 ">
                    <h1>Trenger du hjelp med et problem innen IT eller strategi?</h1>
                    <h3>Kontakt oss for bla bla bla hei hei</h3>
                    <div className="flex space-x-4">
                        <Button className="text-white bg-blue-500" text="Les mer" />
                        <Button className="text-black border-black" text="Kontakt oss" />
                    </div>
                </div>
                <div>Her kan det komme et bilde kanskje</div>
            </div>
        </Layout>
    )
}
