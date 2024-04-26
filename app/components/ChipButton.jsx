
export const ChipButton = ({ label, onClick }) => {
    return (
        <button className="chip-button px-4 py-1 text-gray-500 bg-gray-100 text-sm rounded-full" onClick={onClick}>
            {label}
        </button>
    );
};