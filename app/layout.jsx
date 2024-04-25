import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../app/globals.css";
import CustomLayoutProvider from "./components/CustomLayoutProvider";
import { Analytics } from "@vercel/analytics/react"

const customFont = localFont({
  src: [
    {
      path: "../public/CabinetGrotesk-Regular.otf",
      style: "normal",
    },
    {
      path: "../public/CabinetGrotesk-Medium.otf",
      style: "bold",
    },
  ],
});

const title = "Randil Wijayananda - Portfolio";
const description =
  "Portfolio | Hello, I'm Randil. Student, Developer, and Designer, with a interest in Data Engineering, Computer Science, and Web Design.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://www.randilw.com"),
  keywords: [
    "randil",
    "wijayananda",
    "creative developer",
    "designer",
    "randil wijayananda",
    "portfolio",
  ],
  openGraph: {
    title: title,
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
      },
    ],
    description,
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  colorScheme: "light",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <body suppressHydrationWarning={true}>
        <CustomLayoutProvider>{children}</CustomLayoutProvider>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
