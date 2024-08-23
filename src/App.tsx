import "./App.css";

import About from "./component/About";
import Home from "./component/Home";
import { UserGreeting } from "./component/UserGreeting";
import UserList from "./component/UserList";

function App() {
  return (
    <>
      <div>
        <h4>App Component</h4>
        <p> I am in App component</p>
        <Home />
        <About />
        <UserGreeting />
        <UserList />
      </div>
    </>
  );
}

export default App;
