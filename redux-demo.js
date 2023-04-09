const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  console.log("action : ", action.type);
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREASE") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const sotre = redux.createStore(counterReducer);
console.log("sotre.getState : ", sotre.getState());

const counterSubsriber = () => {
  const lastestState = sotre.getState();
  console.log(lastestState);
};

sotre.subscribe(counterSubsriber);

sotre.dispatch({ type: "INCREASE" });
sotre.dispatch({ type: "DECREASE" });
