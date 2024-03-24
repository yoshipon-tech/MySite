import { HorizontalLine } from "../utils/HorizontalLine";
import cssModule from "./Heading.module.scss";

type Props = {
  title: string;
};

export function Heading({ title }: Props) {
  return (
    <>
      <div className={cssModule.title}>
        <h1>{title}</h1>
      </div>
      <HorizontalLine />
    </>
  );
}
