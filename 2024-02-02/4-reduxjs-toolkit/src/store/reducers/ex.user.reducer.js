import { produce } from "immer";

const initialState = {
  isLoggedIn: false,
  lastVisitedAt: null,
  grade: null,
  profile: {
    nickname: null,
    age: null,
    location: null,
    avatar: null,
    experiences: [],
  },
  friends: [],
  likedGoods: [],
};

const LOG_IN = "user/logIn";
const LOG_OUT = "user/logOut";
const UPDATE_EXPERIENCE = "user/updateExperience";
const UPDATE_AVATAR_SRC = "user/updateAvatarSrc";
const ADD_FRIEND = "user/addFriend";
const REMOVE_FRIEND = "user/removeFriend";
const LIKE = "user/like";
const UNLIKE = "user/unlike";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const updateExperience = (payload) => ({
  type: UPDATE_EXPERIENCE,
  payload,
});
export const updateAvatarSrc = (payload) => ({
  type: UPDATE_AVATAR_SRC,
  payload,
});
export const addFriend = (payload) => ({ type: ADD_FRIEND, payload });
export const removeFriend = (payload) => ({ type: REMOVE_FRIEND, payload });
export const like = (payload) => ({ type: LIKE, payload });
export const unlike = (payload) => ({ type: UNLIKE, payload });

export function userReducer(state = initialState, action) {
  if (action.type === UPDATE_EXPERIENCE) {
    const newState = produce(state, (draft) => {
      const { id, data } = action.payload;
      const indexToUpdate = draft.profile.experiences.findIndex(
        (experience) => experience.id === id
      );
      draft.profile.experiences[indexToUpdate] = data;
    });
    return newState;
  } else if (action.type === ADD_FRIEND) {
    const newState = produce(state, (draft) => {
      const newFriend = action.payload;
      draft.friends.push(newFriend);
    });

    return newState;
  } else if (action.type === REMOVE_FRIEND) {
    const friendIdToRemove = action.payload;
    const newState = {
      ...state,
      friends: state.friends.filter((friend) => friend.id !== friendIdToRemove),
    };

    return newState;
  }
}
