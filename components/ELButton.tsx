import styled from "styled-components";

const ELButton = styled.button`
  padding: 6px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 20px;
  /* width: 97vw; */

  &.active,
  &:hover {
    background-color: rgb(42, 51, 65);
  }
`;

export default ELButton;
