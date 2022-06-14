import { FC } from "react";
import logo from "../assets/hacker-news.png";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-full shadow-title py-[44px] px-[150px] bg-title">
      <div className="w-full container px-[150px] mx-auto">
        <img src={logo} className="w-[208px] y-[28px]" />
      </div>
    </div>
  );
};

export default Header;
