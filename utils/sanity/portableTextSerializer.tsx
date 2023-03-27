// @ts-nocheck
export const portableTextSerializers = {
    ul: ({ children }) => (
        <ul className="list-disc" style={{ marginTop: 5, marginLeft: 20 }}>
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal" style={{ marginTop: 5, marginLeft: 20 }}>
            {children}
        </ol>
    ),
    normal: ({ children }) => <p style={{ marginTop: 10 }}>{children}</p>,
    link: ({ children }) => (
        <a className="underline visited:text-purple-800 text-darkBlue" href={`mailto: ${children}`}>
            {children}
        </a>
    ),
    hardBreak: () => <br />
}
