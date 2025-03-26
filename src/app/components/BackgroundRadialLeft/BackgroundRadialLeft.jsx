import Image from "next/image";

export function BackgroundRadialLeft() {
    return (
        <div className="absolute top-0 left-0 z-50 ">
            <Image
                src="/background-floated-left.png"
                width={850}
                height={650}
                alt="Circle Left"
                priority
            />
        </div>
    );
}