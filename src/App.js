import NavBar from "./component/NavBar/NavBar";
// import Home from "./component/Home/Home";
import AdminTable from "./component/AdminTable/AdminTable";
import { useDispatch } from "react-redux";
import { getPriceConfig } from "./actions/priceConfig";
import { getPriceConfigEnable } from "./actions/priceConfigEnable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Graph from "./component/Graph/Graph";

function App() {
  const dispatch = useDispatch();
  dispatch(getPriceConfig());
  dispatch(getPriceConfigEnable());
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Graph />} />
            {/* <Route path="/" exact element={<Home />} /> */}
            <Route path="/AdminTable" exact element={<AdminTable />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
