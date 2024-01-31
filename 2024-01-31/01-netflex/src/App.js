import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
