import { BrowserRouter, Route, Routes } from "react-router-dom";
import useInitCharacter from "./hooks/useInitCharater";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import StatusPage from "./pages/StatusPage";

function App() {
  useInitCharacter();
  console.log(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
