import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts
import ExpoSettingsModule from './ExpoSettingsModule';
import ExpoSettingsView from './ExpoSettingsView';
import { ChangeEventPayload, ExpoSettingsViewProps } from './ExpoSettings.types';

// Get the native constant value.
export const PI = ExpoSettingsModule.PI;

export function hello(): string {
  return ExpoSettingsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSettingsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSettingsModule ?? NativeModulesProxy.ExpoSettings);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSettingsView, ExpoSettingsViewProps, ChangeEventPayload };
