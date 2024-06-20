import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const ClashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Regular.woff2",
  display: "swap",
});

export const metadata = {
  title: "Mock hero section",
  description:
    "Mock hero section from figma/community/file/1125959482867271805",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("bg-black text-white", ClashGrotesk.className)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
