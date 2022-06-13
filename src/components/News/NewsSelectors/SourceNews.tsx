import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../store/store";
import { Dispatch } from 'redux';
import {
  getNews,
  setSourceNews,
} from "../../../actions/NewsActions/NewsActions";
import { NewsDispatchTypes } from "../../../actions/NewsActions/NewsActionsTypes";

interface SourceNewsProps {}

const SourceNews: FC<SourceNewsProps> = () => {
  const dispatch = useDispatch<Dispatch<NewsDispatchTypes>>();
  const { source } = useSelector((state: RootStore) => state.news);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSourceNews(event.target.value));
    if (event.target.value !== "DEFAULT") {
      dispatch(getNews(event.target.value));
    }
  };

  return (
    //   idk how to minimize the className for better view.....
    <div className="w-[240px] h-[32px] mb-[38px]">
      <select
        className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label=".form-select-sm example"
        onChange={handleChange}
        value={source}
      >
        <option value="DEFAULT">Select yout news</option>
        <option value="angular">Angular</option>
        <option value="reacts">Reacts</option>
        <option value="vuejs">Vuejs</option>
      </select>
    </div>
  );
};

export default SourceNews;
