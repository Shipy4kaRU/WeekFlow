import Week from '../../components/Week/Week';
import WeekSlider from '../../components/WeekSlider/WeekSlider';
import styles from './styles.module.css';

const Calendar = () => {
	return (
		<section className={styles.home}>
			<h1 className="visually-hidden">Календарь</h1>
			<WeekSlider />
			<Week />
		</section>
	);
};

export default Calendar;
