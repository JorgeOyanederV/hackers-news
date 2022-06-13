import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import NewPost from "../components/News/New/NewPost";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news/:id" element={<NewPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
