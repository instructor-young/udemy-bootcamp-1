export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";

export const addItemActionCreator = (payload) => ({ type: ADD_ITEM, payload });
export const removeItemActionCreator = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

const initialState = {
  items: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ADD_ITEM) {
    const newItem = action.payload;
    const newItems = [...state.items, newItem];

    newState.items = newItems;
  } else if (action.type === REMOVE_ITEM) {
    const itemIdToRemove = action.payload;
    const newItems = state.items.filter((item) => item.id !== itemIdToRemove);

    newState.items = newItems;
  }

  return newState;
}
