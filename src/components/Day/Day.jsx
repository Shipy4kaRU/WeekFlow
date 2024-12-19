import styles from './styles.module.css';
import Input from '../UI/Input/Input';

const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const Day = ({ date, active, data, onSave, onPassed }) => {
	let dayData = data.data;
	if (!dayData) dayData = [];

	const difference = dayData.length && 4 - dayData.length;
	const startDays = new Array(4).fill('');

	return (
		<div className={styles.day}>
			<div className={`${styles['date-container']} ${active ? styles.active : ''}`}>
				<p className={styles.date}>{`${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`}</p>
				<p className={styles.weekDay}>{weekDays[date.getDay()]}</p>
			</div>
			{!dayData.length
				? startDays.map((el, index) => (
						<Input key={index++} task={el.text} passed={el.isPassed} onPassed={onPassed} onSave={onSave} inputNumber={index} isDisabled={index++ > dayData.length ? true : false}></Input>
				  ))
				: dayData.map((el, index) => (
						<Input key={index++} task={el.text} passed={el.isPassed} onPassed={onPassed} onSave={onSave} inputNumber={index} isDisabled={index > dayData.length ? true : false}></Input>
				  ))}
			<Input key={dayData.length} onSave={onSave} inputNumber={dayData.length} isDisabled={dayData.length === 0 ? true : false}></Input>
			{difference > 0 &&
				new Array(difference)
					.fill(null)
					.map((el, index) => (
						<Input key={index + dayData.length + 1} onSave={onSave} inputNumber={index + dayData.length + 1} isDisabled={index + dayData.length + 1 > dayData.length ? true : false}></Input>
					))}
		</div>
	);
};

export default Day;
