import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import Button from "../components/buttons/Button"
import Layout from "../components/Layout"
import { Employee } from "../interfaces"
import Employees from "../sections/Employees"
import Projects from "../sections/Projects"
import { fetchConsultants } from "../utils/api/consultantsApi"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import WhatWeDo from "../sections/WhatWeDo"
import WhoWeAre from "../sections/WhoWeAre"
import Link from "next/link"

type EmployeesType = {
    employees: Employee[]
}

export default function Home({ employees }: EmployeesType) {
    const router = useRouter()

    return (
        <Layout tabTitle={"Hjem"} isLandingLayout>
            <div className="h-[calc(100vh-74px)] flex flex-col justify-between">
                <div className="px-32 m-auto space-y-8">
                    <h1 className="text-lightBlue">Trenger du hjelp med IT eller strategi?</h1>
                    <h3>Vi er et studentdrevet konsulentselskap som jobber med strategi og IT</h3>
                    <div className="flex space-x-4">
                        <Button
                            buttonStyle="border-2 border-lightBlue bg-lightBlue"
                            text="Kontakt oss"
                            textStyle="text-black"
                            onClick={() => router.push("/kontakt")}
                        />
                        <Button
                            buttonStyle="border-2 border-lightBlue"
                            text="Om oss"
                            textStyle="text-lightBlue"
                            onClick={() => router.push("/om-oss")}
                        />
                    </div>
                </div>
                <Link className="flex flex-col items-center pb-8 cursor-pointer" href="#who-we-are">
                    <p className="text-lg text-center">Se mer</p>
                    <ChevronDownIcon className="w-8 h-8 text-white" />
                </Link>
            </div>
            <div className="space-y-16 page-padding">
                <WhoWeAre />
                <WhatWeDo />
                <Employees employees={employees} />
                <Projects />
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
