import { Tab } from "@headlessui/react"
import { ReactNode } from "react"
import { classNames } from "../utils/helpers/classNames"

type TabsProps = {
    headers: string[]
    setActiveItem?: (index: string) => void
    children?: ReactNode[]
}

export default function Tabs(props: TabsProps) {
    const { headers, setActiveItem, children } = props

    const handleClick = (header: string) => {
        if (setActiveItem) {
            setActiveItem(header)
        }
    }

    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex flex-row p-[2.5px] mb-6 border-2 rounded-lg bg-zinc-900 border-zinc-600">
                    {headers.map((header: string, index: number) => (
                        <Tab
                            key={index}
                            onClick={() => handleClick(header)}
                            className={({ selected }) =>
                                classNames(
                                    "w-full py-2.5 text-md leading-5 font-medium rounded-lg",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-slate-800 ring-opacity-60",
                                    selected
                                        ? "bg-zinc-600 text-white shadow"
                                        : "text-gray-400 hover:bg-zinc-500 hover:text-white"
                                )
                            }
                        >
                            {header}
                        </Tab>
                    ))}
                </Tab.List>
                {children && (
                    <Tab.Panels className="mt-2 ">
                        {children.map((child: ReactNode, index: number) => (
                            <Tab.Panel key={index} className="space-y-8">
                                {child}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                )}
            </Tab.Group>
        </div>
    )
}
