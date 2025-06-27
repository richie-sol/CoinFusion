import React from "react";

const StackCard = ({icon, title, description}) => {
  return (
    <div className="py-6 px-4 rounded-xl group bg-lightGray hover:bg-black hover:scale-105 transition duration-200 hover:shadow-lg">
      <div className="bg-primary w-10 h-10 flex justify-center items-center rounded-full group-hover:bg-white">
        {icon}
      </div>
      <div className="mt-20 flex flex-col space-y-2 group-hover:text-white">
        <h4 className="font-light text-3xl max-w-[10rem]">{title}</h4>
        <p className="max-w-xs text-sm">
         {description}
        </p>
        <a href="" className="text-xs text-primary font-medium">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default StackCard;
