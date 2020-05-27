import * as React from 'react';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';

export default class Configuration extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <Panel
          isOpen={true}
          type={ PanelType.smallFixedFar }
          headerText='Srinivas Panel'
          closeButtonAriaLabel='Close'
        >
        <p>Hello there!</p>
        </Panel>
        </div>
    );
  }
}