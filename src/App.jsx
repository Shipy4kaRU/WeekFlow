import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import DoubleContainer from "./components/UI/DoubleContainer/DoubleContainer";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <DoubleContainer>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </DoubleContainer>
  );
}

export default App;
