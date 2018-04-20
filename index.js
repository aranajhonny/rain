const { root, locations, messages } = program.refs;
const { FROM, TO, HOURS } = process.env;
export async function init() {
  return program.setTimer('check', 0, 10);
}
export async function timer({ key }) {
  //const condition = await locations.forecast().one({hours: HOURS}).weather.main.get();
  const condition = await locations
    .forecast()
    .one({ hours: HOURS })
    .weather.main.get();
  console.log(condition);
  if (condition === 'Rain') {
    // await messages.sendSms({
    //  from: FROM,
    //  to: TO,
    //  body: 'Hola Juan, mañana a las 21 horas se pronostican lluvias',
    // });
  }
}
