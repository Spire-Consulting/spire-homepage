import Image from "next/image"

type IconTitleProps = {
    title: string
    color: "lightBlue" | "lime"
}

export default function HeaderWithTriangle({ title, color }: IconTitleProps) {
    return (
        <div className="flex flex-row items-center space-x-4">
            <Image alt="logo" width={20} height={20} src={`/icons/triangle-filled-${color}.svg`} />
            <h2>{title}</h2>
        </div>
    )
}
