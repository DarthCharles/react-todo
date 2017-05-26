export function addNewTodo(todo) {
  return {
    type: 'ADD_NEW_TODO',
    todo
  };
}

export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index
  };
}