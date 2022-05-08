import { v4 as uuidv4 } from 'uuid';

const getInitialState = () => ({
	categories: [
		{
			id: uuidv4(),
			label: 'Going out',
			color: '#FF0000',
		},
		{
			id: uuidv4(),
			label: 'Groceries',
			color: '#FFC0CB',
		},
		{
			id: uuidv4(),
			label: 'Traveling',
			color: '#0000FF',
		},
		{
			id: uuidv4(),
			label: 'Salary',
			color: '#00FF00',
		},
	],
});

export const preloadState = () => {
	const localStorage = window.localStorage.getItem('state');
	if (localStorage != null) {
		return JSON.parse(localStorage);
	}

	return getInitialState();
};
