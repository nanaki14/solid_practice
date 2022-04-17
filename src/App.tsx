import { Component, onMount } from 'solid-js';
import { CounterProvider } from './components/Counter';
import { DynamicComponent } from './components/DynamicComponent';
import { Heading } from './components/Heading'
import { Routes, Route, Link, useParams, Outlet } from "solid-app-router"

const UserDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>User: {params.id}</h1>
      <Link href="/">Home</Link>
    </div>
  )
}

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
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Home</h1>
              <Link href="/about">about</Link>
              <br />
              <Link href="/users/01">user</Link>
            </div>
          } />
          <Route path="/about" element={
            <div>
              <h1>About</h1>
              <Link href="/">home</Link>
            </div>
          }/>
          <Route path="/users"
            element={
              <div>
                <h1>Users</h1>
                <Outlet />
              </div>
            }
          >
            <Route path="/:id" element={
              <UserDetail />
            }/>
          </Route>
        </Routes>
      </div>
    </CounterProvider>
  );
};

export default App;
