import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-[#592B20] text-white pr-4 pl-4 h-9 pt-1 rounded-md font-medium">
      {props.children}
    </button>
  );
}

export default Button
