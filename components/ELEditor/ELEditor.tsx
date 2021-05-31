import styled from "styled-components";

const ELEditor = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;

  &::before {
    content: "${({ placeholder }) => placeholder || "Code"}";
    position: relative;
    top: 10px;
    left: 10px;
    color: gray;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default ELEditor;
