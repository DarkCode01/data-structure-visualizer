import styled from "styled-components";
import ELButton from "@/components/ELButton";

const ELNavBase = styled.nav`
  display: flex;
  padding: 10px 20px;
  grid-gap: 10px;
  background-color: var(--primary-light);

  box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -webkit-box-shadow: 0px 14px 36px 6px var(--primary-dark);
  -moz-box-shadow: 0px 14px 36px 6px var(--primary-dark);
`;

export default function ELNav() {
  return (
    <ELNavBase>
      <ELButton className="active">Add Item [stack]</ELButton>
    </ELNavBase>
  );
}
