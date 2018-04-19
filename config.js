const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('COUNTRY', 'The country code Ejm. us')
  .add('ZIP', 'The ZIP code. Ejm. 94040')

imports
  .add('driver')
  .add('twilio')

dependencies
  .add('messages', 'twilio:MessageCollection')
  .add('locations', 'driver:LocationCollection')

schema.type('Root')
