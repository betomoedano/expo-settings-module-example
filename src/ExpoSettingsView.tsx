import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSettingsViewProps } from './ExpoSettings.types';

const NativeView: React.ComponentType<ExpoSettingsViewProps> =
  requireNativeViewManager('ExpoSettings');

export default function ExpoSettingsView(props: ExpoSettingsViewProps) {
  return <NativeView {...props} />;
}
