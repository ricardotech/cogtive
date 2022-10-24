import Image from "next/image";
import { FunctionComponent } from "react";

type Props = {
  width?: string | number;
  height?: string | number;
  alt?: string | undefined;
  src: string;
  style?: object;
};

export const NextImage: FunctionComponent<Props> = ({
  width,
  alt,
  height,
  src,
  style,
}) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} style={style} />
  );
};
