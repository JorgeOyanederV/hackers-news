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

          <div className="w-full flex justify-center gap-x-1 md:gap-x-[10px] p-[30px]">
            <button
              onClick={onPrev}
              disabled={page == 0}
              className="w-8 h-8 px-1 pb-[1px] border rounded-md border-buttonGray"
            >
              {`<`}
            </button>
            {buttonsPagination.map((button: number) => {
              return (
                <button
                  value={button}
                  onClick={changePage}
                  key={button}
                  className={
                    "w-8 h-8 px-1 pb-[1px] border rounded-md border-buttonGray " +
                    `${page === button && "bg-[#1890ff] text-[#fff]"}`
                  }
                >
                  {button + 1}
                </button>
              );
            })}
            <button
              onClick={onNext}
              disabled={page === totalPages - 1}
              className="w-8 h-8 px-1 pb-[1px] border rounded-md border-buttonGray"
            >{`>`}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginateList;
