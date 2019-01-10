import * as React from "react";
import { Stars } from "../components/Stars";
import { Hello } from "../components/Hello";
export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Hello name="world" />
        <Stars number={5} string={"*"} />
        <Stars number={10} string={"😻"} />
      </div>
    );
  }
}
