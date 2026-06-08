const Button = ({ onClick, text}) => {
    return (
        <button
            onClick={onClick}
            className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:scale-125 cursor-pointer backdrop-blur-2xl shadow-2xl"
        >
            {text}
        </button>
    )
}

export default Button;