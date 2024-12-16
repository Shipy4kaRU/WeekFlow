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
import { getFromLocalStorage } from "./helpers/getFromLocalStorage";
import { accountActions } from "./store/accountSlice";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userUid = useSelector((state) => state.account.uid);

  useEffect(() => {
    const isSavedUid = getFromLocalStorage("uid");
    if (isSavedUid && !userUid) dispatch(accountActions.setUid(isSavedUid));
    if (userUid) {
      dispatch(setLogginData(userUid));
    }
  }, [dispatch, userUid]);

  if (!userUid) {
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
