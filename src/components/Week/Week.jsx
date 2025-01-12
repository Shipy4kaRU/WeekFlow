import styles from './styles.module.css';
import Day from '../Day/Day';
import { useEffect, useState } from 'react';
import { WEEK_DAYS } from '../../constants/WEEK_DAYS';
import { addDays } from '../../helpers/addDays';
import { subtractDays } from '../../helpers/substractDays';
import { useSelector, useDispatch } from 'react-redux';
import { weekActions } from '../../store/weekSlice';

const Week = () => {
	const [updatedWEEK_DAYS, setUpdatedWEEK_DAYS] = useState([]);
	const dispatch = useDispatch();

	const week = useSelector((state) => state.week.weeks);
	const currentWeek = useSelector((state) => state.week.currentWeek);
	const userUid = useSelector((state) => state.account.uid);

	const onSaveHandler = async (day, text, inputNumber, isPassed) => {
		if (day === 0) day = 6;
		else day--;
		dispatch(weekActions.setTask({ day, text, inputNumber, isPassed }));
		const response = await fetch(`https://weekflow-8020a-default-rtdb.firebaseio.com/users/${userUid}/calendar/week/${day}/data/${inputNumber}.json`, {
			method: 'PUT',
			body: JSON.stringify({
				text: text,
				isPassed: isPassed,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Ошибка при отправке данных');
		}
	};

	const onPassedHandler = async (day, inputNumber, isPassed, text) => {
		if (day === 0) day = 6;
		else day--;
		dispatch(weekActions.setPassed({ day, inputNumber, isPassed }));
		const response = await fetch(`https://weekflow-8020a-default-rtdb.firebaseio.com/users/${userUid}/calendar/week/${day}/data/${inputNumber}.json`, {
			method: 'PUT',
			body: JSON.stringify({
				text: text,
				isPassed: isPassed,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Ошибка при отправке данных');
		}
	};

	useEffect(() => {
		const currentDate = new Date();
		const usaWeekDay = currentDate.getDay();
		let ruWeekDay;
		if (usaWeekDay === 0) ruWeekDay = 6;
		else ruWeekDay = usaWeekDay - 1;
		const updatedWEEK_DAYS = WEEK_DAYS.map((el, index) => {
			return {
				date: ruWeekDay > index ? subtractDays(new Date(), ruWeekDay - index - currentWeek * 7) : addDays(new Date(), index - ruWeekDay + currentWeek * 7),
				active: ruWeekDay === index,
			};
		});
		setUpdatedWEEK_DAYS(updatedWEEK_DAYS);
	}, [currentWeek]);

	return (
		<section className={styles.week}>
			{updatedWEEK_DAYS.map((el, index) => (
				<Day
					key={el.date.getDay()}
					active={new Date().getDate() === el.date.getDate() && new Date().getMonth() === el.date.getMonth() ? el.active : undefined}
					date={el.date}
					data={week[index]}
					onSave={onSaveHandler.bind(this, el.date.getDay())}
					onPassed={onPassedHandler.bind(this, el.date.getDay())}
				/>
			))}
		</section>
	);
};

export default Week;
