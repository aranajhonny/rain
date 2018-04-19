const { root, locations, messages } = program.refs;
const { COUNTRY, ZIP, FROM, TO } = process.env;
export async function init() {
	return program.setTimer('check', 0, 10);
}
export async function timer({ key }) {
	const currentDay = new Date().getDate();

	const weatherConditions = await locations
		.byZipCode({ country: COUNTRY, zip: ZIP })
		.list.items()
		.query('{ dt dt_txt weather {main} }');

	weatherConditions.map(async item => {
		const Hour = new Date(item.dt * 1000).getHours();
		const Day = new Date(item.dt * 1000).getDate();
		const days = wDay - currentDay;
		if (days === 1 && wHour === 21) {
			if (item.weather[0].main == 'Rain') {
				await messages.sendSms({
					from: FROM,
					to: TO,
					body:
						'Hola Juan, mañana a las 21 horas se pronostican lluvias',
				});
			}
		}
	});
}
