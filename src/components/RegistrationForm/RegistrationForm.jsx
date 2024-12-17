import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import PasswordInput from '../PasswordInput/PasswordInput';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import googleSvg from '../../assets/google.svg';
import { account } from '../../constants/ACTIONS';
import { addLS } from '../../constants/LOCAL_STORAGE';

const RegistrationForm = () => {
	const [isRegistration, setIsRegistration] = useState(false);
	const [saveSession, setSaveSession] = useState(true);
	const [loginError, setLoginError] = useState('');
	const dispatch = useDispatch();

	//использование react form hook
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'all',
	});

	const onToggleHandler = () => {
		setIsRegistration((state) => !state);
	};

	const onSubmitHandler = async (data) => {
		setLoginError('');
		try {
			if (!isRegistration) {
				const result = await signInWithEmailAndPassword(auth, data.email, data.password);
				const uid = result.user.uid;
				console.log(result.user);
				dispatch(account.setUid(uid));
				if (saveSession) addLS('uid', uid);
			} else {
				const result = await createUserWithEmailAndPassword(auth, data.email, data.password);
				const uid = result.user.uid;
				console.log(result.user);
				dispatch(account.setUsername(data.email));
				dispatch(account.setPassword(data.password));
				dispatch(account.setUid(uid));
				addLS('registration', true);
				if (saveSession) addLS('uid', uid);
			}
		} catch (error) {
			console.log(error.message);
			setLoginError('Неверный логин или пароль!');
		}
	};

	const handleGoogleSignIn = async (data) => {
		const provider = new GoogleAuthProvider();
		setLoginError('');
		try {
			const result = await signInWithPopup(auth, provider);
			const uid = result.user.uid;
			dispatch(account.setUid(uid));
			console.log(result.user.uid);
			if (saveSession) addLS('uid', uid);

			// const uid = result.user.uid;
			// dispatch(accountActions.setUsername(data.email));
			// dispatch(accountActions.setPassword(data.password));
			// dispatch(accountActions.setUid(uid));
			// addToLocalStorage("registration", true);
		} catch (error) {
			console.error('Ошибка входа через Google:', error.message);
			setLoginError('Ошибка входа через Google!');
		}
	};

	return (
		<form action="" className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
			<h1 className={styles.header}>{isRegistration ? 'Создать аккаунт' : 'Войти в аккаунт'}</h1>
			<button onClick={handleGoogleSignIn} className={styles['google-button']}>
				<img src={googleSvg} alt="Google Icon" className={styles.google} />
				Войти через <span className={styles.bold}>Google</span>
			</button>
			{Boolean(loginError) && <p className={styles.errorText}>{loginError}</p>}
			<div className={styles.container}>
				<label htmlFor="username" className={styles['form-label']}>
					Email
				</label>
				<input type="text" id="username" placeholder="example@email.com" className={`${styles.username} ${styles.input} ${errors.username && styles['error-input']}`} {...register('email')} />
				{errors.email && <p className={styles.error}>{`${errors.email.message}*`}</p>}
			</div>
			<PasswordInput errors={errors} register={register}></PasswordInput>
			<div>
				<input
					type="checkbox"
					id="remember"
					className={styles.remember}
					onChange={() => {
						setSaveSession((state) => !state);
					}}
					checked={saveSession}
				/>
				<label htmlFor="remember" className={styles['remember-label']}>
					Запомнить меня
				</label>
			</div>
			<button type="submit" className={styles.submit}>
				{isRegistration ? 'Зарегистрироваться' : 'Войти'}
			</button>
			<p className={styles.islogged}>
				{isRegistration ? 'Уже есть аккаунт?' : 'Еще не зарегистрированы?'}
				<button type="button" className={styles.registration} onClick={onToggleHandler}>
					{isRegistration ? 'Войти в аккаунт' : 'Создать аккаунт'}
				</button>
			</p>
		</form>
	);
};

export default RegistrationForm;
