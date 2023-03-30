import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function WeaponsHeader(props) {
  return (
    <div
      className="flex items-center justify-center gap-2 p-7 text-[16px] sm:text-[20px] text-white bg-sky-900 cursor-pointer hover:opacity-95 mb-[1px]"
      onClick={props.handleVisibility}
    >
      <p className="font-bold">{19 - props.weaponsTruths}/19</p>
      <h4 className="text-center ml-auto mr-auto text-[18px] sm:text-[24px] font-bold">
        {props.name}
        <span className="block text-green-500 text-[14px] sm:text-[18px]">
          {props.patchInfo}
        </span>
      </h4>
      {!props.visibility ? (
        <GoChevronDown className="text-2xl sm:text-4xl" />
      ) : (
        <GoChevronUp className="text-2xl sm:text-4xl" />
      )}
    </div>
  );
}

export default WeaponsHeader;
