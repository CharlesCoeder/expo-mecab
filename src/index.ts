import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMecab.web.ts
// and on native platforms to ExpoMecab.ts
import ExpoMecabModule from './ExpoMecabModule';
import ExpoMecabView from './ExpoMecabView';
import { ChangeEventPayload, ExpoMecabViewProps } from './ExpoMecab.types';

// Get the native constant value.
export const PI = ExpoMecabModule.PI;

export function hello(): string {
  return ExpoMecabModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoMecabModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMecabModule ?? NativeModulesProxy.ExpoMecab);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMecabView, ExpoMecabViewProps, ChangeEventPayload };
