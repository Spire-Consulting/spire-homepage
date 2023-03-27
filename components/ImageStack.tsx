import Image from "next/image"

export default function ImageStack() {
    return (
        <div className="flex-col hidden md:flex">
            <div className="flex flex-row justify-center mb-4 space-x-4">
                <div className="mt-auto">
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={"/images/peopleInSpire1.jpg"}
                    />
                </div>
                <div className="w-[125px] h-[200px] relative">
                    <Image
                        className="object-cover"
                        alt="logo"
                        fill
                        src={"/images/stockphoto_teamwork.png"}
                    />
                </div>
            </div>
            <div className="flex flex-row mb-4 space-x-4 ">
                <div className="hidden lg:block">
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="150"
                        height="150"
                        src={"/images/old_members.jpg"}
                    />
                </div>
                <div className="w-[125px] h-[200px] hidden xl:flex relative">
                    <Image
                        className="object-cover"
                        alt="logo"
                        fill
                        src={"/images/stockphoto.png"}
                    />
                </div>
                <div>
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        width="200"
                        height="200"
                        src={"/images/group_photo_old.jpg"}
                    />
                </div>
            </div>
        </div>
    )
}
