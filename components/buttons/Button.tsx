type ButtonProps = {
    text: string
    typeSubmit?: boolean
    onClick?: () => void
    className?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
}

export default function Button(props: ButtonProps) {
    const { text, onClick, className, startIcon, endIcon, typeSubmit } = props
    return (
        <button
            type={typeSubmit ? "submit" : "button"}
            className={` ${className} flex justify-center items-center px-4 py-2 font-medium text-white rounded-lg shadow-md  focus:outline-none focus:ring-2 disabled:bg-gray-500; `}
            onClick={onClick}
        >
            {startIcon}
            <p>{text}</p>
            {endIcon}
        </button>
    )
}
