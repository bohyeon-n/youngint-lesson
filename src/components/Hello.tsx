import * as React from "react";

export interface HelloProps {
  readonly name: string;
}

export const Hello = (props: HelloProps) => <h1>hello {props.name}!</h1>;
