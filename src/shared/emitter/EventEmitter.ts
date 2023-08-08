import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event: string, fn: () => void) => eventEmitter.on(event, fn),
  off: (event: string) => eventEmitter.off(event),
  emit: (event: string) => eventEmitter.emit(event),
};

Object.freeze(Emitter);

export default Emitter;
