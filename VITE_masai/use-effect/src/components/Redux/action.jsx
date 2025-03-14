export const increment = (amount = 1) => {
  return {
    type: 'INCREMENT',
    payload: amount
  };
};

export const decrement = (amount = 1) => {
  return {
    type: 'DECREMENT',
    payload: amount
  };
};

export const toggleTheme = () => {
  return {
    type: 'TOGGLE_THEME'
  };
};
