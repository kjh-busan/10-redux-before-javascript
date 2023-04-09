const redux = require("reduxjs/toolkit");

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

const sotre = redux.createStore(counterReducer);

const counterSubsriber = () => {
  const lastestState = sotre.getState();
  console.log(lastestState);
};

sotre.subscribe(counterSubsriber);
