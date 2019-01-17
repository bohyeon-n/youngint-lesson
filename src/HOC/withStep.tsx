import * as React from "react";

function withStep<P extends {}>(WrappedComponet: React.ComponentType<P>) {
  return class extends React.Component<P> {
    state = {
      step: 0
    };
    onChangeStep = (step: number) => {
      this.setState({
        step
      });
    };
    render() {
      return <WrappedComponet {...this.props} {...this.state} />;
    }
  };
}
