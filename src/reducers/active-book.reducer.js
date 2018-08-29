export default function(currentState = null, action) {
  const actionSwitch = (type) => ({
    'BOOK_SELECTED': action.payload
  })[type];

  return actionSwitch(action.type) || currentState;
}
