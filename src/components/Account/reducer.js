export const reducer = (state, action) => {
  if (action.type === 'EDIT_USER') {
    return {
      ...state,
      isModalOpen: true,
      color: 'green',
      modalContent: 'User updated...',
    };
  }
  if (action.type === 'EDIT_ERROR') {
    return { 
      ...state,
      isModalOpen: true,
      color: 'red',
      modalContent: 'Username or Email are already used...', };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  throw new Error('No matching action type...');
};