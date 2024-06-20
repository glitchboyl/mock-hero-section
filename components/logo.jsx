import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";

const Chillax = localFont({
  src: "../public/fonts/Chillax-Regular.woff2",
  display: "swap",
});

const Logo = () => {
  return (
    <Link href="/">
      <div
        className={cn(
          "text-[24px] leading-[34px] tracking-normal",
          Chillax.className
        )}
      >
        Serendale
      </div>
    </Link>
  );
};

export default Logo;
