import { FC, useEffect } from "react";
import PaginateList from "./NewsList/PaginateList";
import SourceNews from "./NewsSelectors/SourceNews";
import TypeNews from "./NewsSelectors/TypeNews";
import { useDispatch } from "react-redux";
import { GetInitialData } from "../../actions/NewsActions/NewsActions";

const News: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetInitialData());
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
