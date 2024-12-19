import styles from './styles.module.css';
import { formatDate } from '../../helpers/formatDate()';
import svg from '../../assets/svgSprite.svg';
import { weekActions } from '../../store/weekSlice';
import { useDispatch } from 'react-redux';

const WeekSlider = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.week}>
			<button
				className={styles.button}
				onClick={() => {
					dispatch(weekActions.prevWeek());
				}}
			>
				<svg className={styles.icon}>
					<use href={`${svg}#arrow-left`} />
				</svg>
			</button>
			<p className={styles.date}>{formatDate(new Date(), 'numeric', 'long', 'short', 'numeric').toUpperCase()}</p>
			<button
				className={styles.button}
				onClick={() => {
					dispatch(weekActions.nextWeek());
				}}
			>
				<svg className={styles.icon}>
					<use href={`${svg}#arrow-right`} />
				</svg>
			</button>
		</div>
	);
};

export default WeekSlider;
