import styled from "styled-components";
import ELBox from "@/components/ELBox";
import ELStackItem from "./ELItem";

const ELStackBase = styled(ELBox)`
  display: flex;
  flex-direction: column-reverse;
  grid-gap: 10px;
`;

export interface IELStackProps {
  placeholder: string;
}

export default function ELStack({ placeholder }: IELStackProps) {
  return (
    <ELStackBase placeholder={placeholder} className="stack">
      <ELStackItem>console.log()</ELStackItem>
      <ELStackItem>sumer()</ELStackItem>
    </ELStackBase>
  );
}
