// Route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 세부 페이지
import Main from "../page/Main";

const RoutePath = () => (
  <Routes>
    <Route path="/main" element={<Main />} />
  </Routes>
);

export default RoutePath;
