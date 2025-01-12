export const loadingInitStates = {
	calendar: false,
	profile: false,
	settings: false,
};

export const accountInitStates = {
	username: '',
	password: '',
	gender: 'мужской',
	uid: '',
};

export const weekInitStates = {
	weeks: [
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
		{ isExist: true, data: [] },
	],
	currentWeek: 0,
};
