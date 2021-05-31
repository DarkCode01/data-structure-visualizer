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

interface IELNavProps {
  addItemToCallStack: () => void;
  removeItemFromCallStack: () => void;
}

export default function ELNav({ addItemToCallStack, removeItemFromCallStack }: IELNavProps) {
  return (
    <ELNavBase>
      <ELButton className="active" onClick={addItemToCallStack}>
        Add Item [stack]
      </ELButton>
      <ELButton className="active" onClick={removeItemFromCallStack}>
        Remove Item [stack]
      </ELButton>
    </ELNavBase>
  );
}
