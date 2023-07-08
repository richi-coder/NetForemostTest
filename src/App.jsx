import "./App.css";
import Timer from "./TimerPage/TimerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogFeedPage from "./BlogFeedPage/BlogFeedPage";
import Table from "./TablePage/TablePage";
import PostPage from "./PostPage.jsx/PostPage";
import Navigation from "./Navigation/Navigation";
import LayoutEffect from "./TestingUseLayout.jsx/LayoutEffect";
import Memo from "./TestingUseMemo.jsx/Memo";
import SegmentTablePage from "./SegmentTablePage/SegmentTablePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/timer" element={<Timer />} />
          <Route path="/blog" element={<BlogFeedPage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/segmenttable" element={<SegmentTablePage />} />
          <Route path="/post/:query" element={<PostPage />} />
          <Route path="/uselayout" element={<LayoutEffect />} />
          <Route path="/usememo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

