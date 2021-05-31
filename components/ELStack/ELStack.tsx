import styled from "styled-components";
import ELBox from "@/components/ELBox";
import ELStackItem from "./ELItem";

const ELStackBase = styled(ELBox)`
  display: flex;
  flex-direction: column-reverse;
  grid-gap: 10px;
`;

// TODO: create props types for component
export default function ELStack({ placeholder }) {
  return (
    <ELStackBase placeholder={placeholder} className="stack">
      <ELStackItem>d1</ELStackItem>
      <ELStackItem>das</ELStackItem>
      {/* <ELStackItem />
      <ELStackItem />
      <ELStackItem /> */}
    </ELStackBase>
  );
}
