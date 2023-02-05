type ButtonProps = {
    text: string
    typeSubmit?: boolean
    onClick?: () => void
    className?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
    outlined?: boolean
    textColor?: string
}

export default function Button(props: ButtonProps) {
    const { text, onClick, className, startIcon, endIcon, typeSubmit, textColor } = props

    return (
        <button
            type={typeSubmit ? "submit" : "button"}
            className={`flex justify-center items-center px-4 py-2 font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 disabled:bg-gray-500 
            ${className} `}
            onClick={onClick}
        >
            {startIcon}
            <p className={textColor ? textColor : "text-white"}>{text}</p>
            {endIcon}
        </button>
    )
}
