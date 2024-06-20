import Logo from "./logo";
import Link from "next/link";
import { GithubIcon, DiscordIcon, RedditIcon, TwitterIcon } from "./icons";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navs = [
  "Smart Contracts",
  "Services",
  "Solutions",
  "Roadmap",
  "Whitepaper",
];

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1366px] hidden md:flex justify-between items-center mx-auto px-[16px] pt-[48px]">
        <Logo />
        <nav className="w-[520px] lg:w-[600px]">
          <ul className="flex justify-between items-center">
            {navs.map((nav) => (
              <li key={nav} className="text-[18px] leading-[22px]">
                <Link href="/">{nav}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="hidden w-[128px] lg:flex justify-between items-center text-[20px]">
          <li>
            <Link
              href="https://github.com/glitchboyl/mock-hero-section"
              target="_blank"
            >
              <GithubIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <DiscordIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <RedditIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden justify-between items-center px-[32px] pt-[32px]">
        <Logo />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="border-[2px] border-white bg-black text-[20px]"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="text-black">
            <nav className="w-full">
              <ul className="flex items-center flex-wrap gap-x-[32px] gap-y-[16px]">
                {navs.map((nav) => (
                  <li key={nav} className="text-[16px] leading-[24px]">
                    <Link href="/">{nav}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-[32px]">
              <ul className="w-[128px] flex justify-between items-center text-[20px]">
                <li>
                  <Link
                    href="https://github.com/glitchboyl/mock-hero-section"
                    target="_blank"
                  >
                    <GithubIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <DiscordIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <RedditIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <TwitterIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
