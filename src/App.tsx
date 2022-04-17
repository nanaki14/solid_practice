import { Component, onMount } from 'solid-js';
import { CounterProvider } from './components/Counter';
import { DynamicComponent } from './components/DynamicComponent';
import { Heading } from './components/Heading'

const App: Component = () => {
  let myDiv: any;

  onMount(() => {
    console.log('mountされた')
    console.log(myDiv)
  });


  return (
    <CounterProvider count={1}>
      <div
        ref={myDiv}
        style={{
          'text-align': 'center'
        }}
      >
        <Heading
          title="こんにちはSolid"
          text="これはいいものだ"
        />
        <DynamicComponent />
      </div>
    </CounterProvider>
  );
};

export default App;
