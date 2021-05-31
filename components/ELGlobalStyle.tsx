import { createGlobalStyle } from "styled-components";

const HwGlobalStyles = createGlobalStyle`
html {
   box-sizing: border-box;
 }

 :root {
   --primary: rgb(28, 37, 49);
   --primary-light: rgb(31, 41, 55);
   --primary-dark: rgb(25, 33, 44);
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
   background-color: var(--primary);
   font-family: DejaVuSansMono, monospace, sans-serif;
   color: #000;
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
