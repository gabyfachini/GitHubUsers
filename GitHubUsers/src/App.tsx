import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App">
        <h1>GitHub Users</h1>
        <p>Welcome to the GitHub Users App!</p>
        <Outlet />
      </div>
    </>
  )
}

export default App
