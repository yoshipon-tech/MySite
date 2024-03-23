import { CardItem } from "@/src/components/ui/CardItem";
import Image from "/src/assets/image/IMG_3668.jpg";
import cssModule from "./Ideas.module.scss";

export function Ideas() {
  return (
    <div className={cssModule.IdeasArea}>
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
      <CardItem
        image={Image}
        alt="hoghgoe"
        title="よくわかる"
        description="aaa"
        label="aaa"
      />
    </div>
  );
}
