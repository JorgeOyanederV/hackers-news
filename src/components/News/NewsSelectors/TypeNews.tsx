import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../../store/store";
import { setActiveNews } from "../../../actions/NewsActions/NewsActions";

interface TypeNewsProps {}

const TypeNews: FC<TypeNewsProps> = () => {
  const { types } = useSelector((state: RootStore) => state.news);
  const dispatch = useDispatch();

  const handleClickAll = () => {
    dispatch(setActiveNews("all"));
  };

  const handleClickFaves = () => {
    dispatch(setActiveNews("faves"));
  };

  return (
    <div className="pt-[70px] flex justify-center pb-[63px]">
      <button
        className={
          "w-[98px] h-[31px] pt-[3px] pr-[39px] pl-[40px] border rounded-l-[2px] font-bold " +
          `${
            types === "all"
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
            types === "faves"
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

export default TypeNews;
