import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { CounterActions } from '../../store/counter';

function Counter(): JSX.Element {
  const [increaseValue, setIncreaseValue] = useState<number>(0);

  // const counter = useSelector<RootState>((state: RootState) => state.counter.counter);
  const counter = useSelector((state: RootState) => state.counter.counter);
  // const showCounter = useSelector<RootState>((state: RootState) => state.counter.showCounter);
  const showCounter = useSelector((state: RootState) => state.counter.showCounter);
  const dispatch = useDispatch<AppDispatch>();

  const increaseValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIncreaseValue(+event.target.value);
  };

  return (
    <React.Fragment>
      {showCounter && <h2>Counter: {counter}</h2>}
      <label htmlFor='value'>Choose Increase value:</label>
      <input
        type='number'
        id='value'
        value={increaseValue}
        onChange={increaseValueHandler}
        min='1'
        max='10'
        step='1'
      />
      <button onClick={() => dispatch(CounterActions.increment())}>+</button>
      <button onClick={() => dispatch(CounterActions.decrement())}>-</button>
      <button onClick={() => dispatch(CounterActions.increase(increaseValue))}>increase</button>
      <button onClick={() => dispatch(CounterActions.toggleCounter())}>Toggle</button>
    </React.Fragment>
  );
}

export default Counter;
