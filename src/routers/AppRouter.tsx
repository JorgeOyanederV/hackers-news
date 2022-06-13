import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/HomePage";
import NewPostPage from "../components/News/New/NewPostPage";

const AppRouter = () => {
  return (
    <div className="w-screen h-screen bg-bgWhite">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/news/:id" element={<NewPostPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
