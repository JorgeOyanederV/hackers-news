import { FC } from "react";
import News from "./News/News";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className="container px-[150px]">
      <News />
    </div>
  );
};

export default HomePage;
