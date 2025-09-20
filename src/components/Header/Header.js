"use client";
import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";
import Cookies from "js-cookie";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

function Header({ theme: initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function onThemeToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    Cookies.set("theme", nextTheme);

    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action} onClick={onThemeToggle}>
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>
            Toggle {theme === "light" ? "light" : "dark"} mode
          </VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
