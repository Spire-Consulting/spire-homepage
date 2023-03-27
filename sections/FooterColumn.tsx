type FooterColumnProps = {
    children: JSX.Element
}

export default function FooterColumn({ children }: FooterColumnProps) {
    return (
        <div className="flex flex-col w-56 py-8 space-y-2 md:py-0">
            <div className="w-full h-px bg-lightBlue"></div>
            {children}
        </div>
    )
}
