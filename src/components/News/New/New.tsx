import { FC, useState } from "react";
import heart from "../../../assets/iconmonstr-favorite-3@2x.png";
import clock from "../../../assets/iconmonstr-time-2.png";
import heart_hole from "../../../assets/iconmonstr-favorite-2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFave,
  setRemoveFave,
} from "../../../actions/NewsActions/NewsActions";

export const New: FC = ({ _new }) => {
  const { author, story_title, story_url, created_at, objectID, isFaves } =
    _new;

  const [isFave, setIsFave] = useState(isFaves);
  const dispatch = useDispatch();
  const hoursTranscurred =
    new Date().getHours() - new Date(created_at).getHours();

  const makeFave = () => {
    if (isFave) {
      dispatch(setRemoveFave(_new));
    } else {
      dispatch(setFave(_new));
    }
    setIsFave(!isFave);
  };

  return (
    <div className="w-full md:h-[90px] pl-[26px] flex border border-[#979797] rounded-[6px] ">
      {/* When click on this redirect to the main new post */}
      <div className="flex-1 flex flex-col justify-center py-2">
        <div className="flex flex-row gap-[8px] items-start">
          <img src={clock} alt="clock" />
          <p className="text-[11px]">
            {hoursTranscurred} hours ago by {author}
          </p>
        </div>
        <p className="text-sm text-justify">{story_title}</p>
      </div>

      {/* When click on this add to the local storage */}
      <div
        className="relative flex-none w-[68px] h-full ml-[16px]"
        onClick={makeFave}
      >
        <div className="absolute h-full w-full bg-[#606060] opacity-[0.06]"></div>
        <div className="static h-full flex justify-center items-center">
          {isFave ? (
            <img src={heart} alt="heart-full" className="w-[24px] h-[24px]" />
          ) : (
            <img
              src={heart_hole}
              alt="heart-hole"
              className="w-[24px] h-[24px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default New;
