export const MOVE = "MOVE";

const initialState = {
  level: 1,
  location: { x: 0, y: 0 },
  horizontalDirection: "right",
};

export const moveActionCreator = (direction) => ({
  type: MOVE,
  payload: direction,
});

function characterReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      const newLocation = { ...state.location };
      let newHorizontalDirection = state.horizontalDirection;

      if (action.payload === "up") {
        if (state.location.y > 0) {
          --newLocation.y;
        }
      } else if (action.payload === "down") {
        ++newLocation.y;
      } else if (action.payload === "right") {
        if (state.location.x < 9) {
          ++newLocation.x;
          newHorizontalDirection = "right";
        }
      } else {
        if (state.location.x > 0) {
          --newLocation.x;
          newHorizontalDirection = "left";
        }
      }

      const newState = {
        ...state,
        location: newLocation,
        horizontalDirection: newHorizontalDirection,
      };
      return newState;
    default:
      return state;
  }
}

export default characterReducer;
