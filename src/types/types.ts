import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  version?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};

export type CardProps = {
  children: React.ReactNode;
  reverse?: boolean;
};

export type FeedBack = {
  id: string;
  text: string;
  rating: number;
};

export type ContextValue = {
  feedback: FeedBack[];
  isLoading: boolean;
  feedbackEdit: {
    item: Partial<FeedBack>;
    edit: boolean;
  };
  deleteFeedback: (id: string) => void;
  addFeedback: (item: Omit<FeedBack, 'id'>) => void;
  editFeedback: (item: FeedBack) => void;
  updateFeedback: (id: string, item: Omit<FeedBack, 'id'>) => void;
};