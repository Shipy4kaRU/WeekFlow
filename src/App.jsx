import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import DoubleContainer from "./components/UI/DoubleContainer/DoubleContainer";
import NotFound from "./pages/NotFound/NotFound";
import Calendar from "./pages/Calendar/Calendar";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ParallaxBolls from "./components/ParallaxBolls/ParallaxBolls";

function App() {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.isLogged.isLogged);

  if (!isLoggedIn) {
    history.replace("/login");
    return (
      <>
        <Login />
        <ParallaxBolls />
      </>
    );
  }

  return (
    <DoubleContainer>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/calendar" />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </DoubleContainer>
  );
}

export default App;
