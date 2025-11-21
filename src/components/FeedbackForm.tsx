import { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useFeedbackContext } from '../hooks/useFeedbackContext';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState<string | null>('');

	const { addFeedback, feedbackEdit, updateFeedback } =
		useFeedbackContext();

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			if (feedbackEdit.item.text) setText(feedbackEdit.item.text);
			if (feedbackEdit.item.rating) setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (text === '') {
			setMessage(null);
		} else if (e.target.value !== '' && e.target.value.trim().length < 10) {
			setMessage('Text must be at least 10 characters');
			setBtnDisabled(false);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text.trim().length > 9) {
			const newFeedback = {
				text,
				rating
			};
			if (feedbackEdit.edit === true && feedbackEdit.item.id) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
				setBtnDisabled(true);
			} else {
				addFeedback(newFeedback);
			}
			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating: number) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						name=''
						placeholder='Write a Review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
