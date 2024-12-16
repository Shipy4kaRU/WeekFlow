import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import DoubleContainer from "./components/UI/DoubleContainer/DoubleContainer";
import NotFound from "./pages/NotFound/NotFound";
import Calendar from "./pages/Calendar/Calendar";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { setLogginData } from "./store/accountSlice";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.isLogged.isLogged);
  const userUid = useSelector((state) => state.account.uid);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setLogginData(userUid));
    }
  }, [isLoggedIn, dispatch, userUid]);

  if (!isLoggedIn) {
    history.replace("/login");
    return <Login />;
  }

  return (
    <DoubleContainer>
      <Header></Header>
      <Switch>
        <Route path="/login" exact>
          <Redirect to="/calendar" />
        </Route>
        <Route path="/" exact>
          <Redirect to="/calendar" />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </DoubleContainer>
  );
}

export default App;
