const { root, condition, messages } = program.refs;
const { FROM, TO } = process.env;
export async function init() {
  return program.setTimer('check', 0, 10);
}
export async function timer({ key }) {
  if ((await condition.get()) === 'Rain') {
    await messages.sendSms({
      from: FROM,
      to: TO,
      body: `Rain is coming`,
    });
  }
}
