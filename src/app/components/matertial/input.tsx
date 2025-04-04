const Input = ({ label, id, type, value, onChange, required = false }: {label: string, id: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean}) => {
    return (
        <div className="mb-4">
        <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-2"
        >
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border  rounded-full focus:outline-none focus:ring-2 text-teal-650 outline-none"
            required={required}
        />
        </div>
    );
    };

    export default Input;