import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <ExpandMoreIcon sx={{ fontSize: "40px" }} />
      ) : (
        <ExpandLessIcon sx={{ fontSize: "40px" }} />
      )}
    </div>
  );
}

export default WeaponsHeader;
