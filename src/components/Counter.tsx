import { createSignal, createContext, useContext, Component } from "solid-js";

const CounterContext = createContext();

export const CounterProvider: Component<{count?: number}> = (props) =>  {
  const [count, setCount] = createSignal(props.count || 0)
  const store = [
      count,
      {
        increment() {
          setCount(c => c + 1);
        },
        decrement() {
          setCount(c => c - 1);
        }
      }
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounter() { return useContext(CounterContext); }