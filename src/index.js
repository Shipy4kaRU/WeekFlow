import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
);
