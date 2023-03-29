import React from "react";

function CheckUncheck({ checkAll, uncheckAll, weapons, type }) {
  const allChecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: true
  }));

  const allUnchecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: false
  }));

  return (
    <div className="flex flex-col sm:flex-row gap-6 py-5">
      <button
        className="w-[200px] h-[40px] bg-green-700 rounded-[6px] hover:opacity-80"
        onClick={() => checkAll(allChecked, type)}
      >
        Check All
      </button>
      <button
        className="w-[200px] h-[40px] bg-red-900 rounded-[6px] hover:opacity-80"
        onClick={() => uncheckAll(allUnchecked, type)}
      >
        Uncheck All
      </button>
    </div>
  );
}

export default CheckUncheck;
