import * as React from 'react';
import '../style/App.css';

interface CallbackProps {
  location: {
    hash: string;
    pathname: string;
    search: string;
    state: string | undefined
  }
};

export default class Callback extends React.Component<CallbackProps, {}> {
  public constructor(props: CallbackProps) {
    super(props);
  }

  public render() {
    return (
      <div>Callback received!</div>
    );
  }
}
