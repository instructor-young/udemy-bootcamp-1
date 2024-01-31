import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth.context";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
