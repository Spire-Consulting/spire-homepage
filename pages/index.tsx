import Button from "../components/buttons/Button"
import Layout from "../components/Layout"

export default function Home() {
    return (
        <Layout tabTitle={"Hjem"}>
            <div className="bg-gray-700">
                Home <Button className="bg-blue-500" text="Les mer" />
            </div>
        </Layout>
    )
}
