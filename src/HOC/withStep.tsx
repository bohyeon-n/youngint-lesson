import * as React from "react";

export interface withStepProps {
  step: number;
  handleChangeStep(): void;
}
export function withStep<P extends withStepProps>(
  WrappedComponet: React.ComponentType<P>
) {
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
