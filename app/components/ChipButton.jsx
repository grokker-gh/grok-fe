import Image from "next/image";

export const ChipButton = ({ label, onClick, icon }) => {
    return (
        // create a button with a label and an icon
        <button
            className="flex items-center text-sm px-3 py-1 bg-gray-100 text-gray-500 rounded-full"
            onClick={onClick}
        >
            <Image color="gray-500" src={icon} width={22} height={22} className="px-1" alt="icon" />
            {label}
        </button>


    );
};