import { CSSProperties } from "react";

type Props = {
  style?: React.CSSProperties;
};

export function HorizontalLine(props: Props) {
  const defaultStyle: React.CSSProperties = {
    width: "100%",
    height: "1px",
    backgroundColor: "grey",
  } as CSSProperties;

  return <div style={props.style ? props.style : defaultStyle}></div>;
}
