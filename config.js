const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('COUNTRY', 'The country code Ejm. us')
  .add('ZIP', 'The ZIP code. Ejm. 94040')
  .add('FROM', 'From Phone Number')
  .add('TO', 'To Phone Number')

imports
  .add('driver')
  .add('twilio')

dependencies
  .add('messages', 'twilio:MessageCollection')
  .add('locations', 'driver:LocationCollection')

schema.type('Root')
