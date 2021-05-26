import { createGlobalStyle } from "styled-components";

const HwGlobalStyles = createGlobalStyle`
:root {
   /* Color variables */
   --color-primary: #6ec5b8;
   --color-secondary: #f87575;
   --color-black: #252b38;
   --color-white: #ffffff;
 } 
 /* Resets */
html {
   box-sizing: border-box;
 }
 
 *,
 *::before,
 *::after {
   box-sizing: inherit;
 }
 
 html,
 body {
   padding: 0;
   margin: 0;
 }
 
 body {
   background-color: #f5f4f5;
   font-family: DejaVuSansMono, monospace, sans-serif;
   color: var(--color-black);
 }
 
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
   margin: 0;
 }
 
 p {
   margin: 0;
 }
 
 a {
   color: inherit;
   text-decoration: none;
   font-weight: 600;
 }
 
`;

export default HwGlobalStyles;
