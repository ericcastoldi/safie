const modelReducer = (model, state, action) => {
  if(action.type in model.actionTypeMapping){
    var reducer = model.actionTypeMapping[action.type];
    return reducer(state, action);
  }

  return state;
};

module.exports = modelReducer;
