import "./App.css";
import Home from "./component/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Counter from "./pages/Counter";
// import XmlBaseApi from "./pages/Xmlbaseapi";
import React, { Suspense } from "react";
import PhotoGallery from "./pages/PhotoGallery";
import Players from "./pages/Players";

const StopWatch = React.lazy(() => import("./pages/Stopwatch"));
const PageNotFound = React.lazy(()=>import("./pages/404"));
const XmlBaseApi = React.lazy(()=>import("./pages/Xmlbaseapi"));

const App = () => {
  const locaction = useLocation();
  return (
    <div className="App">
      <div className="nav-link">
        <ul>
          <li>
            <Link to="/" className={locaction.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/counter"
              className={locaction.pathname === "/counter" ? "active" : ""}
            >
              Counter
            </Link>
          </li>
          <li>
            <Link
              to="/stopwatch"
              className={locaction.pathname === "/stopwatch" ? "active" : ""}
            >
              StopWatch
            </Link>
          </li>
          <li>
            <Link
              to="/xmlbase"
              className={locaction.pathname === "/xmlbase" ? "active" : ""}
            >
              Xmlhttp
            </Link>
          </li>
          <li>
            <Link
              to="/photogallery"
              className={locaction.pathname === "/photogallery" ? "active" : ""}
            >
              PhotoGallery
            </Link>
          </li>
          <li>
            <Link
              to="/player"
              className={locaction.pathname === "/player" ? "active" : ""}
            >
              player
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div> Please Wait... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/xmlbase" element={<XmlBaseApi />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/player" element={<Players />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
