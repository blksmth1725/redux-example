import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1>Redux State Tracking Application</h1>
      <div className="container">
        <Profile />
        <Login />
      </div>
    </div>
  );
}

export default App;
