import styled from "styled-components";
import ELEditor from "@/components/ELEditor/ELEditor";
import ELStackItem from "./ELItem";

const ELStackBase = styled(ELEditor)`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
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
