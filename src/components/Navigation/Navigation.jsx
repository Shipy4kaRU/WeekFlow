import styles from './styles.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import svg from '../../assets/svgSprite.svg';
import { deleteFromLocalStorage } from '../../helpers/deleteFromLocalStorage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { account, week } from '../../constants/ACTIONS';
import { weekInitStates, accountInitStates } from '../../store/initStates';

const Navigation = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const onExitHandler = () => {
		deleteFromLocalStorage('uid');
		dispatch(account.setUid());
		dispatch(account.setAccountData(accountInitStates));
		dispatch(week.setCalendar(weekInitStates));
		history.replace('/');
	};

	return (
		<nav className={styles.navbar}>
			<ul className={styles['navbar-list']}>
				<li className={styles['link-element']}>
					<NavLink activeClassName={styles.active} to="/calendar" className={styles.link}>
						<div className={styles['icon-container']}>
							<div className={styles.animation}>
								<svg className={styles.icon}>
									<use href={`${svg}#calendar`} />
								</svg>
							</div>
							<span className={styles.text}>Календарь</span>
						</div>
					</NavLink>
				</li>
				<li className={styles['link-element']}>
					<NavLink activeClassName={styles.active} to="/profile" className={styles.link}>
						<div className={styles['icon-container']}>
							<div className={styles.animation}>
								<svg className={styles.icon}>
									<use href={`${svg}#profile`} />
								</svg>
							</div>
							<span className={styles.text}>Профиль</span>
						</div>
					</NavLink>
				</li>
				<li className={styles['link-element']}>
					<NavLink activeClassName={styles.active} to="/settings" className={styles.link}>
						<div className={styles['icon-container']}>
							<div className={styles.animation}>
								<svg className={styles.icon}>
									<use href={`${svg}#settings`} />
								</svg>
							</div>
							<span className={styles.text}>Настройки</span>
						</div>
					</NavLink>
				</li>
				<li className={styles['link-element']}>
					<button to="/" className={styles.link} onClick={onExitHandler}>
						<div className={styles['icon-container']}>
							<div className={styles.animation}>
								<svg className={styles.icon}>
									<use href={`${svg}#exit`} />
								</svg>
							</div>
							<span className={styles.text}>Выход</span>
						</div>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
