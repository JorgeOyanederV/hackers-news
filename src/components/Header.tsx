import { FC } from "react";
import logo from "../assets/hacker-news.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full shadow-title py-[44px] bg-title">
      <div className="w-full container px-16 sm:px-[150px] mx-auto">
        <img
          src={logo}
          className="w-[208px] y-[28px]"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Header;
