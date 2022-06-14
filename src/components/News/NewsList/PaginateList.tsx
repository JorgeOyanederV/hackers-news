import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../actions/NewsActions/NewsActions";
import { New as NewI } from "../../../actions/NewsActions/NewsActionsTypes";
import { RootStore } from "../../../store/store";
import New from "../New/New";

interface PaginateListProps {}

const PaginateList: FC<PaginateListProps> = () => {
  const {
    news,
    totalPages = 0,
    types,
    source = "DEFAULT",
    loadingNews,
    page = 0,
  } = useSelector((state: RootStore) => state.news);
  const dispatch = useDispatch();
  const [buttonsPagination, setbuttonsPagination] = useState<number[]>([]);

  useEffect(() => {
    let buttonsCalculate = [];
    let pagesToEnd = totalPages - page;
    let amountButtons = pagesToEnd < 5 ? pagesToEnd : 5;
    for (let index = page; index < page + amountButtons; index++) {
      buttonsCalculate.push(index);
    }
    setbuttonsPagination(buttonsCalculate);
  }, [news]);

  const changePage = ({ target }) => {
    dispatch(getNews(source, target.value));
  };
  const onPrev = () => {
    dispatch(getNews(source, page - 1));
  };
  const onNext = () => {
    dispatch(getNews(source, page + 1));
  };

  return (
    <div>
      {!loadingNews && types === "all" && source !== "" && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-[30px]">
            {news.map((activeNew: NewI) => {
              return <New _new={activeNew} key={activeNew.objectID} />;
            })}
          </div>
          <button onClick={onPrev} disabled={page == 0}>
            {`<`}
          </button>
          {buttonsPagination.map((button: number) => {
            return (
              <button
                value={button}
                onClick={changePage}
                key={button}
                className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
              >
                {button + 1}
              </button>
            );
          })}
          <button
            onClick={onNext}
            disabled={page === totalPages - 1}
          >{`>`}</button>
        </>
      )}
    </div>
  );
};

export default PaginateList;
