import Link from "next/link";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

const Logo = ({ width, height }: Props) => {
  return (
    <Link href="/">
      <Image
        src="/svg/logo.svg"
        alt="Audiophile Logo"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
