import { useFeedbackContext } from '../hooks/useFeedbackContext';

function FeedbackStats() {
	const { feedback } = useFeedbackContext();

	// Calculate ratings average
	let average: number =
		feedback.reduce((acc: number, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	// Get one decimal only for decimals, with a regex for no trailing .0 for integers
	const displayAverage = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : displayAverage}</h4>
		</div>
	);
}

export default FeedbackStats;
