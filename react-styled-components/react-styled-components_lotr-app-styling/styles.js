import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
  // ********************************************************************** COLOR
  --color-earth: #282828;
  --color-clouds: #f1f1f1;
  --color-smoke: #d4d1cd;

  // ********************************************************************** FONT
  --font-family: ${lora.style.fontFamily}, serif;
  --font-headline-1: normal 700 44px/48px var(--font-family);
  --font-headline-2: normal 700 32px/41px var(--font-family);
  --font-title: normal 700 16px/20px var(--font-family);
  --font-caption: normal 500 12px/15px var(--font-family);
  --font-caption--italic: italic 400 12px/15px var(--font-family);
  --font-body: normal 400 16px/20px var(--font-family);

  // ********************************************************************** EFFECT
  --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);
  --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
}

  body {
    font-family: var(--font-body);
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  h1 {
    font: var(--font-headline-1);
  }

  h2 {
    font: var(--font-headline-2);
    margin: 40px 0 25px 0;
  }

  em {
    font: var(--font-caption--italic);
  }

  strong {
    font: var(--font-title);
    color: var(--color-clouds);
    
  }

  a {
    font: var(--font-caption);
    text-decoration: none;
    color: ${({ theme }) => theme.link};
    cursor: pointer;

    &:hover {
    color: ${({ theme }) => theme.linkHover};
    }
 }

 img {
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book-hover);
  }
 }

  button {
    font: var(--font-body);
    cursor: pointer;
    background-color: ${({ theme }) => theme.buttonBackground};
    color:${({ theme }) => theme.buttonText};
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.1); // 10 % größer
    }
  }

  ul {
    list-style-type: none;
  }
`;

export const lightMode = {
  background: "var(--color-smoke)",
  text: "var(--color-earth)",
  link: "var(--color-earth)",
  linkHover: "var(--color-clouds)",
  buttonBackground: "var(--color-earth)",
  buttonText: "var(--color-clouds)",
};

export const darkMode = {
  background: "var(--color-earth)",
  text: "var(--color-clouds)",
  link: "var(--color-clouds)",
  linkHover: "var(--color-smoke)",
  buttonBackground: "var(--color-smoke)",
  buttonText: "var(--color-earth)",
};
