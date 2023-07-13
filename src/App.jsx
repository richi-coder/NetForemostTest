import "./App.css";
import TimerPage from "./TimerPage/TimerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogFeedPage from "./BlogFeedPage/BlogFeedPage";
import Table from "./TablePage/TablePage";
import PostPage from "./PostPage.jsx/PostPage";
import Navigation from "./components/Navigation";
import LayoutEffect from "./LayoutPage/LayoutEffect";
import Memo from "./MemoPage/Memo";
import SegmentTablePage from "./SegmentTablePage/SegmentTablePage";
import Transition from "./TransitionPage/Transition";
import BorderHOC from "./components/BorderHOC";

const DebugTimerPage = BorderHOC(TimerPage)

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/timer" element={<DebugTimerPage />} />
          <Route path="/blog" element={<BlogFeedPage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/segmenttable" element={<SegmentTablePage />} />
          <Route path="/post/:query" element={<PostPage />} />
          <Route path="/uselayout" element={<LayoutEffect />} />
          <Route path="/usememo" element={<Memo />} />
          <Route path="/usetransition" element={<Transition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

