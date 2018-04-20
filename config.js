const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('FROM', 'From Phone Number')
  .add('TO', 'To Phone Number')
  .add('HOURS', 'Forecasts Hours')

imports
  .add('driver')
  .add('twilio')

dependencies
  .add('messages', 'twilio:MessageCollection')
  .add('locations', 'driver:LocationCollection')

schema.type('Root')
