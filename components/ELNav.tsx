import styled from "styled-components";

const ELNavBase = styled.nav`
  display: flex;
  padding: 10px 20px;
  grid-gap: 10px;
  background-color: var(--primary-light);

  box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -webkit-box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -moz-box-shadow: 0px 14px 36px 6px var(--primary-dark);
`;

const ELNavButton = styled.button`
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
