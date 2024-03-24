import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  iconSrc: StaticImageData;
};

export function Icon({title, iconSrc}: Props) {
  return (
  <div>
    <div>
      <Image src={iconSrc} alt={title} width={100} height={100} />
    </div>
    <p>{title}</p>
  </div>
  );
}
