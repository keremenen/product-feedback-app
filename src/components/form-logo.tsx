import Image from "next/image";

export default function FormLogo({ icon }: { icon: string }) {
  return (
    <Image
      src={icon}
      alt="icon"
      width={56}
      height={56}
      className="absolute -top-7"
    />
  );
}
