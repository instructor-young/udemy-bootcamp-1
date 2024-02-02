import "./App.css";
import { AuthProvider } from "./contexts/auth.context";
import HomePage from "./pages/HomePage";

function App() {
  console.log("리렌더 App");
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;
