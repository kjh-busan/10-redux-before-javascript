const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const sotre = redux.createStore(counterReducer);
// console.log(sotre.getState());

const counterSubsriber = () => {
  const lastestState = sotre.getState();
  console.log(lastestState);
};

sotre.subscribe(counterSubsriber);

sotre.dispatch({ type: "INCREASE" });
