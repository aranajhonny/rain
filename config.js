const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('FROM', 'From Phone Number')
  .add('TO', 'To Phone Number')

imports
  .add('driver')
  .add('twilio')

dependencies
  .add('messages', 'twilio:MessageCollection')
  .add('condition', 'String')

schema.type('Root')
