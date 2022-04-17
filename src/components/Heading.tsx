import { Component, createMemo } from 'solid-js';
import { createStore } from "solid-js/store";
import { useCounter } from './Counter';
import styles from './Heading.module.css'

type Props = {
  title: string
  text: string
}

export const Heading: Component<Props> = (props) => {

  const [count, { increment, decrement }] = useCounter();

  const countLabel = createMemo(() => `Count: ${count()}`)

  return (
    <div class={styles.Wrapper}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <p>{countLabel}</p>
      <button type="button" onclick={increment}>
        Click: +
      </button>
      <button type="button" onclick={decrement}>
        Click: -
      </button>
    </div>
  )
}