import { useDispatch } from "react-redux";
import "./App.css";
import { toggleLogin } from "./store/reducers/user.reducer";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(toggleLogin())}>로그인 토글하기</button>
    </div>
  );
}

export default App;
