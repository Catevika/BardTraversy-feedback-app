import { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import type { ContextValue } from '../types/types';

export const useFeedbackContext = (): ContextValue => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedbackContext must be used within FeedbackProvider');
  }
  return context;
};
