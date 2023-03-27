import React from "react"

type QuoteProps = {
    quote: string
}

export default function Quote({ quote }: QuoteProps) {
    return <div className="italic text-lime">{`"${quote}"`}</div>
}
