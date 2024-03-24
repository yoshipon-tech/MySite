import { Icon } from "@/src/components/ui/Icon";
import Image from "/src/assets/image/IMG_3668.jpg";
import cssModule from "./Links.module.scss";


export function Links() {
  return (
    <div className={cssModule.linksArea}>
      <Icon title="Twitter" iconSrc={Image} />
      <Icon title="Facebook" iconSrc={Image} />
      <Icon title="Instagram" iconSrc={Image} />
    </div>
  );
}
