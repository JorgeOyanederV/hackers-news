import { FC, useState } from "react";
import { useDispatch } from "react-redux";

interface PaginateListProps {}

const PaginateList: FC<PaginateListProps> = () => {
  const [active, setActive] = useState("all");
  const dispatch = useDispatch();

  const handleClickAll = () => {};

  const handleClickFaves = () => {};

  return (
    <div className="pt-[70px] flex justify-center pb-[63px]">
      <button
        className={
          "w-[98px] h-[31px] pt-[3px] pr-[39px] pl-[40px] border rounded-l-[2px] font-bold " +
          `${
            active === "all"
              ? "text-[#1797ff]"
              : "text-[#606060] border-[#d6d6d6]"
          }`
        }
        onClick={handleClickAll}
      >
        <p className="text-sm">All</p>
      </button>
      <button
        className={
          "w-[98px] h-[31px] pt-[3px] pr-[16px] pl-[17px] border rounded-r-[2px] font-bold " +
          `${
            active === "faves"
              ? "text-[#1797ff]"
              : "text-[#606060] border-[#d6d6d6]"
          }`
        }
        onClick={handleClickFaves}
      >
        <p className="text-sm">My faves</p>
      </button>
    </div>
  );
};

export default PaginateList;
