import "./App.css";
import TimerPage from "./TimerPage/TimerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogFeedPage from "./BlogFeedPage/BlogFeedPage";
import TablePage from "./TablePage/TablePage";
import PostPage from "./PostPage.jsx/PostPage";
import Navigation from "./components/Navigation";
import LayoutEffectPage from "./LayoutPage/LayoutEffect";
import MemoPage from "./MemoPage/Memo";
import SegmentTablePage from "./SegmentTablePage/SegmentTablePage";
import TransitionPage from "./TransitionPage/Transition";
import BorderHOC from "./components/BorderHOC";
import { Suspense } from "react";

const DebugTimerPage = BorderHOC(TimerPage)

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/timer" element={<DebugTimerPage />} />
          <Route path="/blog" element={<BlogFeedPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/segmenttable" element={<SegmentTablePage />} />
          <Route path="/post/:query" element={
            <Suspense fallback={<div className="text-red-500 text-5xl font-bold">Loading!!</div>}>
              <PostPage />
            </Suspense>
          } />
          <Route path="/uselayout" element={<LayoutEffectPage />} />
          <Route path="/usememo" element={<MemoPage />} />
          <Route path="/usetransition" element={<TransitionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

