const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = (state = initialState, action) => {

  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }
  return state;
};

let todo = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar arroz',
  done: false
};

const action = {
  type: 'agregar',
  payload: newTodo
};

todo = todoReducer(todo, action);
console.log(todo)