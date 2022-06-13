import { FC } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../store/store";
import New from "../New/New";

interface NewFavesListProps {}

const NewFavesList: FC<NewFavesListProps> = () => {
  const { faves, types } = useSelector((state: RootStore) => state.news);

  if (faves?.length === 0) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-[30px]">
      {types == "faves" &&
        faves?.map((activeNew) => {
          return <New _new={activeNew} key={activeNew.objectID} />;
        })}
    </div>
  );
};

export default NewFavesList;
