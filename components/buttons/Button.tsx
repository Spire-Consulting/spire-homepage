type ButtonProps = {
    text: string
    typeSubmit?: boolean
    onClick?: () => void
    buttonStyle?: string
    textStyle?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
}

export default function Button(props: ButtonProps) {
    const { text, onClick, buttonStyle, textStyle, startIcon, endIcon, typeSubmit } = props

    return (
        <button
            type={typeSubmit ? "submit" : "button"}
            className={`flex justify-center items-center px-4 py-2 font-medium rounded-sm shadow-md focus:outline-none focus:ring-2 disabled:bg-gray-500 
            ${buttonStyle} `}
            onClick={onClick}
        >
            {startIcon}
            <p className={textStyle}>{text}</p>
            {endIcon}
        </button>
    )
}
