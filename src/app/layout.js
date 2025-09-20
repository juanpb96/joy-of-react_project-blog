import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS, BLOG_TITLE } from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";
import { cookies } from "next/headers";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function RootLayout({ children }) {
  const theme = (await cookies()).get("theme") ?? "light";

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme.value === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <Header theme={theme.value} />
        <RespectMotionPreferences>
          <main>{children}</main>
        </RespectMotionPreferences>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
