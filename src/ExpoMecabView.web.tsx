import * as React from 'react';

import { ExpoMecabViewProps } from './ExpoMecab.types';

export default function ExpoMecabView(props: ExpoMecabViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
