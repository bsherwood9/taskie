import { CONSTANTS } from "../actions";
let listId = 3;
let cardId = 4;
const initialState = [
  {
    title: "Test 1",
    id: 0,
    cards: [
      { id: 0, text: "This is card1. Yah!" },
      { id: 1, text: "Making card 2 you nonce!" }
    ]
  },
  {
    title: "Test 2",
    id: 1,
    cards: [
      { id: 0, text: "This is card1. Yah!" },
      { id: 1, text: "Making card 2 you nonce!" }
    ]
  },
  {
    title: "RARRRR",
    id: 2,
    cards: [
      { id: 0, text: "This is card1. Yah!" },
      { id: 1, text: "Making card 2 you nonce!" },
      { id: 2, text: "Making some cool stuffs here so watch out." }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listId
      };
      listId += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardId
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
