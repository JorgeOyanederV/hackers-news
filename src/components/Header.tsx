import { FC } from "react";
import logo from "../assets/hacker-news.png";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-screen shadow-title py-[44px] px-[150px] bg-title">
      <img src={logo} className="w-[208px] y-[28px]" />
    </div>
  );
};

export default Header;
