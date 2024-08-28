import * as React from 'react';

import { ExpoSettingsViewProps } from './ExpoSettings.types';

export default function ExpoSettingsView(props: ExpoSettingsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
