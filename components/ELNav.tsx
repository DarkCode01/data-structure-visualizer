import styled from "styled-components";

const ELNavBase = styled.nav`
  display: flex;
  padding: 10px 20px;
  background-color: var(--primary);
  grid-gap: 10px;

  box-shadow: 0px 14px 31px 6px rgba(28, 37, 49, 1);
  -webkit-box-shadow: 0px 14px 31px 6px rgba(28, 37, 49, 1);
  -moz-box-shadow: 0px 14px 31px 6px rgba(28, 37, 49, 1);
`;

const ELNavButton = styled.button`
  padding: 6px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 20px;

  &.active,
  &:hover {
    background-color: rgb(42, 51, 65);
  }
`;

export default function ELNav() {
  return (
    <ELNavBase>
      <ELNavButton className="active">clear</ELNavButton>
      <ELNavButton>step next</ELNavButton>
      <ELNavButton>step preview</ELNavButton>
      <ELNavButton>run</ELNavButton>
    </ELNavBase>
  );
}
