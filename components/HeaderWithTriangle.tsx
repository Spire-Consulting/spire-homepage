import Image from "next/image"

type IconTitleProps = {
    title: string
}

export default function HeaderWithTriangle({ title }: IconTitleProps) {
    return (
        <div className="flex flex-row items-center space-x-4">
            <Image alt="logo" width={17} height={17} src={"images/triangle-filled.svg"} />
            <h2>{title}</h2>
        </div>
    )
}
