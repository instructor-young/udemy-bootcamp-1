import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth.context";
import { ProfileProvider } from "./contexts/profile.context";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import MyPage from "./pages/MyPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
            <Route path="/my-page" element={<MyPage />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
