import EmployeeCard from "../components/EmployeeCard"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import { Employee } from "../interfaces"
import { employeesQuery } from "../utils/sanity/queries"
import sanityClient from "../utils/sanity/sanity"

type EmployeesType = {
    employees: Employee[]
}

const Employees = (props: EmployeesType) => {
    const { employees } = props
    return (
        <Layout tabTitle="Ansatte">
            <div>
                <div className="pb-8 space-y-6 text-center lg:pb-12">
                    <h2 className="text-3xl font-bold">Mør våre ansatte</h2>
                    <p className="text-lg">
                        Spire består av motiverte og engasjerte studenter fra Trondheim. Bla bla bla
                        bla blasd lasdasldasd lsadasdl
                    </p>
                </div>

                <ul className="grid grid-cols-1 gap-12 sm:gap-10 lg:gap-6 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                    {employees
                        ?.filter((employee: Employee) => !employee.isAlumni)
                        .map((employee: Employee, i: number) => {
                            return <EmployeeCard key={i} employee={employee} />
                        })}
                </ul>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const employees: Employee[] = await sanityClient.fetch(employeesQuery)
        return { props: { employees: employees } }
    } catch (error) {
        return { notFound: true }
    }
}

export default Employees
