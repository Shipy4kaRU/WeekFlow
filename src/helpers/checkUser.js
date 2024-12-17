const checkUser = async (uid) => {
	try {
		const response = await fetch(`https://weekflow-8020a-default-rtdb.firebaseio.com/users/${uid}.json`);
		if (!response.ok) {
			return false;
		}
		const data = await response.json();
		return data !== null;
	} catch (err) {
		console.log('Произошла непредвиденная ошибка: ', err);
	}
};

export default checkUser;
