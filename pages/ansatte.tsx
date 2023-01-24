import EmployeeCard from "../components/EmployeeCard"
import { fetchConsultants } from "../utils/api/consultantsApi"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import { Employee } from "../interfaces"

type EmployeesType = {
    employees: Employee[]
}

const Employees = (props: EmployeesType) => {
    const { employees } = props
    return (
        <Layout
            tabTitle="Ansatte"
            pageTitle="Våre ansatte"
            description="Dette er våre ansatte bla bla bla"
        >
            <ul className="grid grid-cols-1 gap-12 sm:gap-10 lg:gap-6 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {employees
                    ?.filter((employee: Employee) => !employee.isAlumni)
                    .map((employee: Employee, i: number) => {
                        return <EmployeeCard key={i} employee={employee} />
                    })}
            </ul>
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

export default Employees
