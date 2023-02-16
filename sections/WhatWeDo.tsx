const whatWeDo = [
    {
        title: "Engasjerte",
        description:
            "Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple."
    },
    {
        title: "Motiverte",
        description:
            "Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple."
    },
    {
        title: "Drevet av studenter",
        description:
            "Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple."
    },
    {
        title: "Dyktige",
        description:
            "Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple."
    }
]

export default function WhatWeDo() {
    return (
        <div className="grid grid-cols-2 gap-12">
            {whatWeDo.map((item, index: number) => (
                <div key={index} className="space-y-6">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}
