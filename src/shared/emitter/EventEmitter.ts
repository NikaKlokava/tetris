import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event: string, fn: (event: KeyboardEvent) => void) =>
    eventEmitter.on(event, fn),
  off: (event: string) => eventEmitter.off(event),
  emit: (event: string, type: { key: GamepadTypes }) =>
    eventEmitter.emit(event, type),
};

Object.freeze(Emitter);

export default Emitter;
