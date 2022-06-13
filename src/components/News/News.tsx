import { FC, useEffect } from "react";
import PaginateList from "./NewsList/PaginateList";
import SourceNews from "./NewsSelectors/SourceNews";
import TypeNews from "./NewsSelectors/TypeNews";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../actions/NewsActions/NewsActions";
import { Dispatch } from "redux";
import { NewsDispatchTypes } from "../../actions/NewsActions/NewsActionsTypes";
import NewFavesList from "./NewsList/NewFavesList";
import { RootStore } from "../../store/store";

const News: FC = () => {
  const dispatch = useDispatch<Dispatch<NewsDispatchTypes>>();
  const { faves } = useSelector((state: RootStore) => state.news);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    <div>
      <TypeNews />
      <SourceNews />
      <PaginateList />
      <NewFavesList />
    </div>
  );
};

export default News;
