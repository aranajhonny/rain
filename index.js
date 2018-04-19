const { root, locations, messages } = program.refs;
const { COUNTRY, ZIP } = process.env;
export async function init() {
	return program.setTimer('check', 0, 50);
}
export async function timer({ key }) {
	const currentDay = Date().getDate();

	const weatherConditions = await locations
		.byZipCode((country: COUNTRY), (zip: ZIP))
		.list.items.query('{ dt dt_txt weather {main} }');

	weatherConditions.map(item => {
		const wHour = new Date(item.dt * 1000).getHours();
		const wDay = new Date(item.dt * 1000).getDate();
		const days = Wday - currentDay;
		if (days === 1 && Whour === 21) {
			console.log('El clima esta: ' + item.wheater.main);
		}
	});
}
