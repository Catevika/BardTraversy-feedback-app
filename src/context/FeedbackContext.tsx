import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import type { ContextValue, FeedBack } from '../types/types';

const FeedbackContext = createContext<ContextValue | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: React.ReactNode; }) => {
	const [feedback, setFeedback] = useState([
		{
			id: '1',
			text: 'This item is feedback item 1',
			rating: 10
		},
		{
			id: '2',
			text: 'This item is feedback item 2',
			rating: 9
		},
		{
			id: '3',
			text: 'This item is feedback item 3',
			rating: 7
		}
	]);

	const [isLoading] = useState(false);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	const deleteFeedback = (id: string) => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback: Omit<FeedBack, 'id'>) => {
		const feedback_obj: FeedBack = {
			...newFeedback,
			id: uuid()
		};
		setFeedback([feedback_obj, ...feedback]);
	};

	const editFeedback = (item: FeedBack) => {
		setFeedbackEdit({
			item,
			edit: true
		});
	};

	const updateFeedback = (id: string, updatedItem: Omit<FeedBack, 'id'>) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);

		setFeedbackEdit({
			item: {},
			edit: false
		});
	};

	const contextValue: ContextValue = {
		feedback,
		isLoading,
		feedbackEdit,
		deleteFeedback,
		addFeedback,
		editFeedback,
		updateFeedback
	};

	return (
		<FeedbackContext.Provider value={contextValue}>
			{children}
		</FeedbackContext.Provider>
	);
};

export { FeedbackContext };
