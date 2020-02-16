import { CONSTANTS } from "../actions";
let listId = 2;
let cardId = 4;
const initialState = [
  {
    title: "Test 1",
    id: `list=${0}`,
    cards: [
      { id: `card=${0}`, text: "This is card1. Yah!" },
      { id: `card=${1}`, text: "Making card 2 you nonce!" }
    ]
  },
  {
    title: "Test 2",
    id: `list=${1}`,
    cards: [
      { id: `card=${2}`, text: "This is card1. Yah!" },
      { id: `card=${3}`, text: "Making card 2 you nonce!" }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`
      };
      listId += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`
      };
      cardId += 1;
      console.log("action received", action);
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
};
export default listReducer;
