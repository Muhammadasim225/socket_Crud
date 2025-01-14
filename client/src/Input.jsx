import React from 'react';

const Input = (props) => {
  const { placeholder, handleEvent, name, value, type } = props;
  return (
    <div>
      <input
        name={name}
        value={value}
        onChange={handleEvent}
        type={type}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
