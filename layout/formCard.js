import React from "react";

const FormCard = (props) => {
  return (
    <div className="flex w-[320px] ml-1 mt-9 lg:mt-0 flex-col text-center overflow-hidden lg:w-[550px] lg:h-[350px] rounded-lg bg-[#f2ede4] lg:ml-10">
      {props.children}
    </div>
  );
};

export default FormCard;
