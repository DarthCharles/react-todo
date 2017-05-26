export default function (state = ['Lavar el carro 🚗', 'Tender la ropa'], action = {}) {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return [...state, action.todo];
    case 'REMOVE_TODO':
      const newState = Object.assign([], state);
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
};