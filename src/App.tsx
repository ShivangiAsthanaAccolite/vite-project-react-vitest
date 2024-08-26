import "./App.css";

import About from "./component/About";
import Home from "./component/Home";
import MyComponent from "./component/MyComponent";
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
        <MyComponent />
      </div>
    </>
  );
}

export default App;
