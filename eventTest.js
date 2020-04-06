const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an event listener and callback
emitter.on('test', () => {
  console.log('Test emitter triggered...');
});

// Trigger an event
emitter.emit('test');
