import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useRef } from "react"
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
    const ref = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        console.log("serfsdf")
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }

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
                            onClick={() => router.push("/om-oss")}
                        />
                        <Button
                            buttonStyle="border-2 border-lightBlue"
                            text="Om oss"
                            textStyle="text-lightBlue"
                            onClick={() => router.push("/kontakt")}
                        />
                    </div>
                </div>
                <Link
                    className="flex flex-col items-center pb-8 cursor-pointer"
                    onClick={handleClick}
                    href="#who-we-are"
                >
                    <p className="text-lg text-center">Se mer</p>
                    <ChevronDownIcon className="w-8 h-8 text-white" />
                </Link>
            </div>
            <div className="px-16 space-y-16 lg:px-32">
                <WhoWeAre ref={ref} />
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
