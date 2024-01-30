import "./App.css";
import ColorSelector from "./components/ColorSelector";
import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App" style={{ padding: "5rem 0" }}>
      <Counter />

      <hr />

      <ColorSelector />

      <hr />

      <SignUpForm />
    </div>
  );
}

export default App;
