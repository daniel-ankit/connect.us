import Home from "./pages/Home/home"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile/:username">
        <Profile/>
      </Route>
      <Route path="/login">
        <Register login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
    </Router>
  )
}

export default App
