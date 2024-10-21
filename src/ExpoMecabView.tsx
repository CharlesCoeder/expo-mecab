import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMecabViewProps } from './ExpoMecab.types';

const NativeView: React.ComponentType<ExpoMecabViewProps> =
  requireNativeViewManager('ExpoMecab');

export default function ExpoMecabView(props: ExpoMecabViewProps) {
  return <NativeView {...props} />;
}
