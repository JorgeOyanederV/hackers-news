import { FC, useEffect } from "react";
import PaginateList from "./NewsList/PaginateList";
import SourceNews from "./NewsSelectors/SourceNews";
import TypeNews from "./NewsSelectors/TypeNews";
import { useDispatch } from "react-redux";
import { getInitialData } from "../../actions/NewsActions/NewsActions";
import { Dispatch } from 'redux';
import { NewsDispatchTypes } from "../../actions/NewsActions/NewsActionsTypes";

const News: FC = () => {
  const dispatch = useDispatch<Dispatch<NewsDispatchTypes>>();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    <div>
      <TypeNews />
      <SourceNews />
      {/* <PaginateList /> */}
    </div>
  );
};

export default News;
