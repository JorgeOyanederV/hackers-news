import { FC, useState } from "react";
import heart from "../../../assets/iconmonstr-favorite-3@2x.png";
import clock from "../../../assets/iconmonstr-time-2.png";
import heart_hole from "../../../assets/iconmonstr-favorite-2.png";
import { useDispatch, useSelector } from "react-redux";
import RootReducer from "../../../reducers/RootReducer";
import {
  setFaveNew,
  startRemoveFave,
} from "../../../actions/NewsActions/NewsActions";
import { RootStore } from "../../../store/store";

export const New: FC = ({ _new }) => {
  const { author, story_title, story_url, created_at, objectID, isFaves } =
    _new;
  const { loadingButtons } = useSelector((state: RootStore) => state.news);
  const [isFave, setIsFave] = useState(isFaves);
  const dispatch = useDispatch();
  const hoursTranscurred =
    new Date().getHours() - new Date(created_at).getHours();

  const addToFaves = () => {
    if (!isFave && loadingButtons === false) {
      setIsFave(!isFave);
      dispatch(setFaveNew(_new));
    }
  };

  const removeFromFaves = () => {
    if (isFave && loadingButtons === false) {
      setIsFave(!isFave);
      dispatch(startRemoveFave(_new));
    }
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
      {isFave ? (
        <div
          className="relative flex-none w-[68px] h-full ml-[16px]"
          onClick={removeFromFaves}
        >
          <div className="absolute h-full w-full bg-[#606060] opacity-[0.06]"></div>
          <div className="static h-full flex justify-center items-center">
            <img src={heart} alt="heart-full" className="w-[24px] h-[24px]" />
          </div>
        </div>
      ) : (
        <div
          className="relative flex-none w-[68px] h-full ml-[16px]"
          onClick={addToFaves}
        >
          <div className="absolute h-full w-full bg-[#606060] opacity-[0.06]"></div>
          <div className="static h-full flex justify-center items-center">
            <img
              src={heart_hole}
              alt="heart-hole"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default New;
