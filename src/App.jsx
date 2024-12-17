import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Login, Header, Calendar, Profile, Settings, NotFound } from './constants/PAGES';
import { getLS, removeLS } from './constants/LOCAL_STORAGE';
import { account, setLogginData, exportAccountData } from './constants/ACTIONS';
import DoubleContainer from './components/UI/DoubleContainer/DoubleContainer';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	const store = useStore();

	const userUid = useSelector((state) => state.account.uid);

	useEffect(() => {
		const state = store.getState();
		const isSavedUid = getLS('uid');
		const isThisRegistration = getLS('registration');
		const accountData = state.account;
		const week = state.week;
		console.log(isThisRegistration);
		console.log(userUid);
		if (isSavedUid && !userUid) dispatch(account.setUid(isSavedUid));
		if (userUid && !isThisRegistration) {
			dispatch(setLogginData(userUid));
		}
		if (userUid && isThisRegistration) {
			removeLS('registration');
			dispatch(exportAccountData(userUid, accountData, week));
		}
	}, [dispatch, store, userUid]);

	if (!userUid) {
		history.replace('/login');
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
