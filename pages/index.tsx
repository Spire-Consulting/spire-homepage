import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import Button from "../components/buttons/Button"
import Layout from "../components/Layout"
import { Employee } from "../interfaces"
import Employees from "../sections/Employees"
import { fetchConsultants } from "../utils/api/consultantsApi"

type EmployeesType = {
    employees: Employee[]
}

export default function Home({ employees }: EmployeesType) {
    const router = useRouter()

    return (
        <Layout tabTitle={"Hjem"}>
            <div className="flex flex-col content-center max-w-6xl ">
                <div className="flex flex-col h-screen space-y-10">
                    <h1 className="text-lightBlue">Trenger du hjelp med IT eller strategi?</h1>
                    <h3>Vi er et studentdrevet konsulentselskap som jobber med strategi og IT</h3>
                    <div className="flex space-x-4">
                        <Button
                            className="border-2 border-lightBlue"
                            textColor="text-lightBlue"
                            outlined
                            text="Les mer"
                            onClick={() => router.push("/om-oss")}
                        />
                        <Button
                            className="border-2 border-lightBlue"
                            textColor="text-lightBlue"
                            outlined
                            text="Kontakt oss"
                            onClick={() => router.push("/kontakt")}
                        />
                    </div>
                </div>
                <Employees employees={employees} />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data } = await fetchConsultants()
        if (!data?.data) {
            return { notFound: true }
        }
        return { props: { employees: data?.data?.consultants } }
    } catch (error) {
        console.log(error)
        return { notFound: true }
    }
}
