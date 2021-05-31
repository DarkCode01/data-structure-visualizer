import { createGlobalStyle } from "styled-components";

const HwGlobalStyles = createGlobalStyle`
html {
   box-sizing: border-box;
 }

 :root {
   --primary: rgb(28, 37, 49);
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
