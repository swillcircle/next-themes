import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

const MainSection = () => {
  const { theme, setTheme } = useTheme();

  const outputRange = [
    `M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z`,
    `M8 11.5C8 18.1274 12 23.5 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C12 0 8 4.87258 8 11.5Z`,
  ];

  const pathVariants = {
    sun: {
      d: outputRange[0],
      rotate: 0,
    },
    moon: {
      d: outputRange[1],
      rotate: "-10deg",
    },
  };

  useEffect(() => {
    console.log(theme);
  }, [setTheme]);

  return (
    <>
      {theme && (
        <section className="relative w-screen h-screen flex flex-col mx-auto px-2 pt-20 md:pt-36 items-center bg-white dark:bg-gray-900 transition-bg">
          <div className="relative flex justify-center items-center mb-36">
            <div className="absolute rotate">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                  variants={pathVariants}
                  animate={theme === "light" ? "sun" : "moon"}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                  fill="#E8E363"
                />
              </svg>
            </div>
            <div
              className={
                theme === "light" ? "relative opacity-100" : " opacity-0"
              }
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0L20.4308 4.21028C20.4749 4.218 20.519 4.22593 20.563 4.23407L24.5606 1.13381L25.2278 6.00759C25.4871 6.1642 25.7409 6.32898 25.9888 6.50158L30.5774 5.27208L29.3599 9.81576C29.401 9.87269 29.4416 9.92994 29.4819 9.9875L34.3508 10.6031L31.5159 14.3371C31.6251 14.7408 31.7167 15.1518 31.7897 15.5692L36 18L31.7897 20.4308C31.7411 20.7084 31.6844 20.9831 31.6197 21.2548L34.4077 24.8883L29.8294 25.491C29.6796 25.727 29.523 25.9583 29.3597 26.1845L30.5772 30.728L25.9887 29.4985C25.8356 29.605 25.6804 29.7086 25.523 29.809L24.8883 34.6298L21.0321 31.6708C20.8332 31.7147 20.6327 31.7544 20.4308 31.7897L18 36L15.5692 31.7897C15.2597 31.7355 14.9537 31.6712 14.6516 31.597L10.955 34.4638L10.3024 29.6957C10.1761 29.6125 10.0513 29.5272 9.92792 29.44L5.12136 30.7279L6.42211 25.8734C6.26293 25.6398 6.11062 25.4011 5.9655 25.1576L1.16231 24.5503L4.22541 20.5157L4.21028 20.4308L0 18L4.21028 15.5692C4.23223 15.4438 4.25585 15.319 4.28112 15.1948L1.14805 11.1117L6.2114 10.4451C6.28023 10.3379 6.35047 10.2317 6.42211 10.1266L5.12132 5.27199L9.928 6.55994C10.1079 6.43275 10.291 6.30969 10.4771 6.19092L11.1117 1.37014L14.968 4.3292C15.1669 4.2853 15.3673 4.24562 15.5692 4.21028L18 0ZM18 30.9231C25.1372 30.9231 30.9231 25.1372 30.9231 18C30.9231 10.8628 25.1372 5.07691 18 5.07691C10.8628 5.07691 5.07691 10.8628 5.07691 18C5.07691 25.1372 10.8628 30.9231 18 30.9231Z"
                  fill="#E8E363"
                />
              </svg>
            </div>
          </div>
          <div className="container mx-auto rounded border-grad grad-shadow">
            <div className="flex justify-between bg-gray-50 dark:bg-gray-900 mx-0.5 my-0.5 px-8 py-8 rounded-sm transition-bg">
              <div className="">
                <pre className="whitespace-pre-wrap">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    html{" "}
                  </span>
                  <span className="text-blue-700 dark:text-blue-500">
                    data-theme
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">=</span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-blue-900 dark:text-blue-300 theme-text">
                    {theme === "light" ? "light" : "dark"}
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-blue-900 dark:text-blue-300">
                    {" "}
                    style
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">=</span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-blue-900 dark:text-blue-300">
                    color-scheme:
                  </span>
                  <span className="text-blue-900 dark:text-blue-300 scheme-text">
                    {theme === "light" ? "light" : "dark"}
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">;</span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-4 whitespace-pre-wrap">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    head
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">/</span>
                  <span className="text-green-800 dark:text-green-500">
                    head
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-4 whitespace-pre-wrap">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    body
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-8">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    div{" "}
                  </span>
                  <span className="text-blue-700 dark:text-blue-500">id</span>
                  <span className="text-gray-900 dark:text-gray-50">=</span>
                  <span className="text-blue-900 dark:text-blue-300">
                    __next
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-12">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    div{" "}
                  </span>
                  <span className="text-blue-700 dark:text-blue-500">id</span>
                  <span className="text-gray-900 dark:text-gray-50">=</span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-blue-900 dark:text-blue-300">
                    theContent
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &quot;
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-12">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;/
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    div
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-8">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;/
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    div
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre className="pl-4 whitespace-pre-wrap">
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;/
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    body
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
                <pre>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3c;/
                  </span>
                  <span className="text-green-800 dark:text-green-500">
                    html
                  </span>
                  <span className="text-gray-900 dark:text-gray-50">
                    &#x3e;
                  </span>
                </pre>
              </div>
              <div className="flex flex-col">
                <div
                  className={
                    "dark-mode-toggle-container" +
                    (theme === "light" ? " light" : " dark-mode")
                  }
                >
                  <button
                    className={
                      "dark-mode-toggle" +
                      (theme === "light" ? " light" : " dark-mode")
                    }
                    onClick={() => {
                      setTheme(theme === "light" ? "dark" : "light");
                    }}
                  ></button>
                </div>
                <p className="dark-mode-toggle-text text-gray-900 dark:text-gray-50">
                  {theme === "light" ? "Light" : "Dark"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MainSection;
