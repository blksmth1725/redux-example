import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {},
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux State Tracking Application</h1>
        <div className="container">
          <Profile />
          <Login />
        </div>
      </div>
    </Provider>
  );
}

export default App;
