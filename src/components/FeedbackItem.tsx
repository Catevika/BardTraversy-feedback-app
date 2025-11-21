import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useFeedbackContext } from '../hooks/useFeedbackContext';
import type { FeedBack } from '../types/types';

function FeedbackItem({ item }: { item: FeedBack; }) {
	const { deleteFeedback, editFeedback } = useFeedbackContext();

	const { rating, text } = item;
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='purple' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
}

export default FeedbackItem;
