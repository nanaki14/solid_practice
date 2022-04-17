import { Dynamic } from "solid-js/web";
import { createSignal, Switch, Match, For } from "solid-js";

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing
}

export const DynamicComponent = () => {
  const [selected, setSelected] = createSignal<'red' | 'green' | 'blue'>("red");

  return (
    <>
      <select value={selected()} onInput={e => setSelected(e.currentTarget.value as 'red' | 'green' | 'blue')}>
        <For each={Object.keys(options)}>{
          color => <option value={color}>{color}</option>
        }</For>
      </select>
      <Dynamic component={options[selected()]} />
    </>
  );
}

