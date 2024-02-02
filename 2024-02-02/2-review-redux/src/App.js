import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addItemActionCreator,
  removeItemActionCreator,
} from "./store/reducers/cart.reducer";

function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClickAddItem = () => {
    const id = nanoid();
    const amount = 1;
    const item = { id, amount };
    const action = addItemActionCreator(item);

    dispatch(action);
  };

  const handleClickRemoveItem = (itemId) => () => {
    const action = removeItemActionCreator(itemId);

    dispatch(action);
  };

  return (
    <div className="App">
      <button onClick={handleClickAddItem}>랜덤 상품 추가하기</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <button onClick={handleClickRemoveItem(item.id)}>제거하기</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
